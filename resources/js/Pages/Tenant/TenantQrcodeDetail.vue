<script setup>
// library imports
import { ref, onMounted } from 'vue'
import { Calendar } from 'v-calendar'

import BaseLayout from '@/Layouts/BaseLayout.vue'
import StatsCard from '@/Components/Cards/StatsCard.vue'

import TimeSeriesChart from '@/Components/Charts/TimeSeriesChart.vue'

import DropdownMenu from '@/Components/DropdownMenu/DropdownMenu.vue'
import DropdownMenuList from '@/Components/DropdownMenu/DropdownMenuList.vue'
import DropdownMenuItem from '@/Components/DropdownMenu/DropdownMenuItem.vue'

// Table component
import Table from '@/Components/Tables/BaseTable.vue'
import TableHeader from '@/Components/Tables/TableHeader.vue'
import TableHead from '@/Components/Tables/TableHead.vue'
import TableCaption from '@/Components/Tables/TableCaption.vue'
import TableRow from '@/Components/Tables/TableRow.vue'
import TableBody from '@/Components/Tables/TableBody.vue'
import TableCell from '@/Components/Tables/TableCell.vue'

import Pagination from '@/Components/Pagination/DefaultPagination.vue'

// utilities
import PrimaryButton from '@/Components/Button/PrimaryButton.vue'

import { QrcodeCheckInsApi } from '@/Utils/api'

import { useTimeSeriesChartData } from '@/Composables/useTimeSeriesChartData'
import { useSelectCheckBoxes } from '@/Composables/useSelectCheckBoxes'

// icon imports
import {
  ExclamationCircleIcon,
  CheckBadgeIcon,
  ArrowDownTrayIcon,
  EllipsisHorizontalIcon,
  EyeIcon,
  PencilSquareIcon,
  Cog8ToothIcon,
  MagnifyingGlassIcon,
} from '@heroicons/vue/24/outline'

import { CheckCircleIcon } from '@heroicons/vue/24/solid'

const chartData = ref([])
const labels = ref([])

const selectedServices = ref([])

const attrs = ref([
  {
    key: 'today',
    highlight: true,
    dates: new Date(),
  },
])

const data = ref(QrcodeCheckInsApi)

const onInitCheckInsChart = () => {
  const { extractCheckInsChartData, series, chartKeys } =
    useTimeSeriesChartData(data, {
      identifier: 'recorded_at',
      keys: ['value'],
    })
  extractCheckInsChartData()

  chartData.value = series.value
  labels.value = chartKeys.value
}

const toggle = () => {
  const { toggleAllCheckBoxes, selectedCheckedBoxes } =
    useSelectCheckBoxes(data)
  toggleAllCheckBoxes()
  selectedServices.value = selectedCheckedBoxes.value
}

onMounted(() => {
  onInitCheckInsChart()
})
</script>

<template>
  <BaseLayout title="Qrcode-Detail">
    <template #sidenav>
      <Calendar
        :disable-page-swipe="true"
        title-position="left"
        view="weekly"
        class="mt-5"
        :attributes="attrs"
      />
      <StatsCard
        :icon="ExclamationCircleIcon"
        title="Expected Attendance"
        value="120"
      ></StatsCard>
      <!-- successful checkin card -->
      <StatsCard
        :icon="CheckBadgeIcon"
        title="Total Checkins"
        value="113"
        color="green"
      ></StatsCard>
      <!-- end of successful checkin card -->
      <!-- pending checkin card -->
      <StatsCard
        :icon="ExclamationCircleIcon"
        title="Not Checked In"
        value="7"
        color="pink"
      ></StatsCard>
      <!-- end of pending card -->
    </template>
    <template #content>
      <!-- Action area -->
      <div class="flex items-start justify-between">
        <PrimaryButton class="relative flex items-center space-x-1">
          <div class="flex items-center">
            <span
              class="rounded-md bg-red-50 px-1 py-1 text-xs font-bold text-red-600"
              >expired</span
            >
          </div>
          <span class="px-3 text-sm font-semibold"
            >8224f814-e438-4c6b-9b1b-d910e8085d53</span
          >
        </PrimaryButton>
        <div class="flex items-center space-x-3 text-sm">
          <PrimaryButton selector="export" class="bg-gray-800 text-white">
            <ArrowDownTrayIcon class="h-5 w-5"></ArrowDownTrayIcon>
            <span>Download Qrcode</span>
          </PrimaryButton>
          <PrimaryButton selector="manage" class="bg-gray-800 text-white">
            <Cog8ToothIcon class="h-5 w-5"></Cog8ToothIcon>
            <span>Manage</span>
          </PrimaryButton>
        </div>
      </div>
      <!-- end action area -->
      <!-- stats area -->
      <div class="flex items-start justify-between space-x-6">
        <div class="flex-1 rounded-md border border-gray-100 px-4 py-3">
          <TimeSeriesChart
            :chart-data="chartData"
            series-title="Demo Test"
            chart-type="bar"
            :series-categories="labels"
          />
        </div>
        <div class="w-2/5 rounded-md border border-gray-100 px-4 py-3">
          <div class="flex flex-col space-y-2 divide-y divide-dashed">
            <div class="flex flex-col space-y-2">
              <h4 class="text-xs font-semibold uppercase text-gray-500">
                Expected Attendance
              </h4>
              <p class="text-4xl font-bold">85</p>
            </div>
            <div class="mt-4">
              <h4 class="py-3 text-xs font-semibold uppercase text-gray-500">
                Allowed Checks
              </h4>
              <ul class="space-y-2 font-semibold">
                <li class="flex items-center justify-between">
                  <span>Location</span>
                  <CheckCircleIcon
                    class="h-5 w-5 rounded-full bg-green-50 text-green-500"
                  ></CheckCircleIcon>
                </li>
                <li class="flex items-center justify-between">
                  <span>Time</span>
                  <CheckCircleIcon
                    class="h-5 w-5 rounded-full bg-green-50 text-green-500"
                  ></CheckCircleIcon>
                </li>
                <li class="flex items-center justify-between">
                  <span>Distance</span>
                  <CheckCircleIcon
                    class="h-5 w-5 rounded-full bg-green-50 text-green-500"
                  ></CheckCircleIcon>
                </li>
                <li class="flex items-center justify-between">
                  <span>Membership</span>
                  <CheckCircleIcon
                    class="h-5 w-5 rounded-full bg-gray-50 text-gray-400"
                  ></CheckCircleIcon>
                </li>
              </ul>
            </div>
            <div class="mt-4">
              <h4 class="py-3 text-xs font-semibold uppercase text-gray-500">
                Config
              </h4>
              <div class="flex items-center justify-between">
                <span class="font-semibold">Allow visiting members</span>
                <CheckCircleIcon
                  class="h-5 w-5 rounded-full bg-green-50 text-green-500"
                ></CheckCircleIcon>
              </div>
            </div>
            <div class="mt-4">
              <h4 class="py-3 text-xs font-semibold uppercase text-gray-500">
                Service
              </h4>
              <div class="flex items-center justify-between">
                <span class="font-semibold">Sunday Service</span>
                <span
                  class="rounded-lg bg-green-50 px-2 py-1 text-xs font-bold text-green-600"
                  >Active</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end of stats -->
      <!-- Services Table -->
      <Table>
        <TableCaption>
          <div class="flex items-start justify-between space-x-5">
            <div>
              <h3 class="text-xl font-bold">Service Attendance</h3>
              <span class="py-2 text-sm font-normal text-gray-500">
                Members who attended the service
              </span>
            </div>

            <div class="relative flex space-x-4">
              <input
                type="text"
                placeholder="Search for Member eg. Derrick"
                class="relative w-72 rounded-md border border-gray-200 py-[0.9rem] pl-12 text-sm placeholder-gray-400"
              />
              <MagnifyingGlassIcon
                class="absolute inset-x-0 top-0 mt-4 h-5 w-5 text-gray-400"
              ></MagnifyingGlassIcon>
            </div>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell cell-type="checkbox" @change="toggle"></TableCell>
            <TableHead>Name</TableHead>
            <TableHead>Recorded At</TableHead>
            <TableHead>Device Used</TableHead>
            <TableHead>IP Address</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <!-- Actual table content -->
          <TableRow
            v-for="checkIn in QrcodeCheckInsApi"
            :key="checkIn.id"
            :class="{}"
          >
            <TableCell
              v-model="selectedServices"
              cell-type="checkbox"
              :value-data="checkIn.id"
            ></TableCell>
            <TableCell>
              <span class="font-semibold">{{ checkIn.member }}</span>
            </TableCell>
            <TableCell>{{ checkIn.recorded_at }}</TableCell>
            <TableCell>
              <span class="text-gray-400">{{ checkIn.device }}</span>
            </TableCell>
            <TableCell>
              <span class="text-gray-400">{{
                checkIn.ip_address ?? '172.168.0.9'
              }}</span>
            </TableCell>
            <TableCell>
              <button
                :id="'qrcodeDropdown' + checkIn.id"
                type="button"
                class="border-none p-1 hover:rounded-full hover:bg-gray-100 active:bg-slate-200"
              >
                <EllipsisHorizontalIcon
                  class="h-6 w-6"
                ></EllipsisHorizontalIcon>
                <!-- dropdown trigger for the actions -->
                <DropdownMenu
                  :target="'edit' + checkIn.id"
                  :trigger-el="'qrcodeDropdown' + checkIn.id"
                >
                  <DropdownMenuList>
                    <DropdownMenuItem
                      :icon="EyeIcon"
                      name="View"
                      link="/members/detail"
                    ></DropdownMenuItem>
                    <DropdownMenuItem
                      :icon="PencilSquareIcon"
                      name="Edit"
                      link="/qrcodes/detail"
                    ></DropdownMenuItem>
                  </DropdownMenuList>
                </DropdownMenu>
                <!-- end of trigger -->
              </button>
            </TableCell>
          </TableRow>
          <!-- end of table content -->
        </TableBody>
      </Table>
      <div class="pr-4">
        <Pagination></Pagination>
      </div>
    </template>
  </BaseLayout>
</template>

<style>
.vc-container {
  max-width: 220px;
}
.vc-container .vc-weeks {
  max-width: 100px;
  padding-right: 20px;
}
</style>
