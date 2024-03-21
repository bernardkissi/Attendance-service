<script setup>
import { ref, onMounted } from 'vue'

import BaseLayout from '@/Layouts/BaseLayout.vue'
import StatsCard from '@/Components/Cards/StatsCard.vue'
import NoticeCard from '@/Components/Cards/NoticeCard.vue'
import BarChart from '@/Components/Charts/BarChart.vue'

import DropdownMenu from '@/Components/DropdownMenu/DropdownMenu.vue'
import DropdownMenuList from '@/Components/DropdownMenu/DropdownMenuList.vue'
import DropdownMenuItem from '@/Components/DropdownMenu/DropdownMenuItem.vue'

import Pagination from '@/Components/Pagination/DefaultPagination.vue'

// Table component
import Table from '@/Components/Tables/BaseTable.vue'
import TableHeader from '@/Components/Tables/TableHeader.vue'
import TableHead from '@/Components/Tables/TableHead.vue'
import TableCaption from '@/Components/Tables/TableCaption.vue'
import TableRow from '@/Components/Tables/TableRow.vue'
import TableBody from '@/Components/Tables/TableBody.vue'
import TableCell from '@/Components/Tables/TableCell.vue'

// utilities
import PrimaryButton from '@/Components/Button/PrimaryButton.vue'

// composables
import { useSeriesChartData } from '@/Composables/useSeriesChartData'
import { useSelectCheckBoxes } from '@/Composables/useSelectCheckBoxes'

// demo api
import { attendanceApi, qrcodesAPI } from '@/Utils/api'

// icon imports
import {
  ExclamationCircleIcon,
  CheckBadgeIcon,
  ClockIcon,
  CalendarIcon,
  QrCodeIcon,
  ChevronDownIcon,
  CalendarDaysIcon,
  UserIcon,
  EllipsisHorizontalIcon,
  EyeIcon,
  PencilSquareIcon,
  Cog8ToothIcon,
} from '@heroicons/vue/24/outline'

// state
const chartData = ref([])
const selectedServices = ref([])
const data = ref(attendanceApi)

const toggle = () => {
  const { toggleAllCheckBoxes, selectedCheckedBoxes } =
    useSelectCheckBoxes(data)
  toggleAllCheckBoxes()
  console.log(selectedCheckedBoxes.value)
  selectedServices.value = selectedCheckedBoxes.value
}

const onInitBaseChart = () => {
  const { extractMonthlyChartData, series } = useSeriesChartData(data, {
    identifier: 'month',
    keys: ['attendance', 'absence'],
  })
  extractMonthlyChartData()
  chartData.value = series.value
}

onMounted(() => {
  onInitBaseChart()
})
</script>
<template>
  <BaseLayout title="Services - Sunday Service">
    <template #sidenav>
      <!-- successful checkin card -->
      <StatsCard
        class="mt-[20px]"
        :icon="CheckBadgeIcon"
        title="Total Attendance"
        value="2"
        color="green"
      ></StatsCard>
      <!-- end card -->
      <!-- pending checkin card -->
      <StatsCard
        :icon="ExclamationCircleIcon"
        title="Total Absence"
        value="3"
        color="pink"
      ></StatsCard
      ><StatsCard
        :icon="ExclamationCircleIcon"
        title="Total Occurrences"
        value="5"
        color="gray"
      ></StatsCard>
      <!-- end card -->
      <div class="mt-8 flex items-center justify-between rounded pb-6">
        <div class="flex items-center space-x-2">
          <CalendarIcon class="h-5 w-5" />
          <span class="text-base font-bold">Upcoming</span>
        </div>
        <a href="" class="text-sm text-blue-500">view</a>
      </div>

      <!-- upcoming service card -->
      <NoticeCard
        title="Havlia Praise Service"
        name="starts in 9 mins"
        :icon="ClockIcon"
      ></NoticeCard>
    </template>

    <template #content>
      <div class="flex items-center justify-between">
        <PrimaryButton class="relative mx-4 flex items-center space-x-1">
          <div class="-mt-2 flex">
            <span
              class="absolute h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75"
            ></span>
            <span class="absolute h-2 w-2 rounded-full bg-green-500"></span>
          </div>
          <span class="px-3 font-bold">Sunday Service</span>
        </PrimaryButton>
        <div class="flex items-center space-x-3">
          <PrimaryButton selector="filter-button-year">
            <CalendarDaysIcon class="h-5 w-5" />
            <!-- dropdown trigger for the actions -->
            <DropdownMenu target="filter-year" trigger-el="filter-button-year">
              <template #header>
                <div
                  class="bg-gray-50 px-4 py-3 text-sm text-gray-900 dark:text-white"
                >
                  <div class="truncate font-medium">Actions</div>
                </div>
              </template>
              <DropdownMenuList>
                <template #header>
                  <div
                    class="bg-gray-50 px-4 py-3 text-sm text-gray-900 dark:text-white"
                  >
                    <div class="truncate font-medium">Year</div>
                  </div>
                </template>
                <DropdownMenuItem
                  :icon="CalendarDaysIcon"
                  name="2026"
                  link="/"
                ></DropdownMenuItem>
                <DropdownMenuItem
                  :icon="CalendarDaysIcon"
                  name="2025"
                  link="/"
                ></DropdownMenuItem>
                <DropdownMenuItem
                  :icon="CalendarDaysIcon"
                  name="2024"
                  link="/"
                ></DropdownMenuItem>
                <DropdownMenuItem
                  :icon="CalendarDaysIcon"
                  name="2023"
                  link="/"
                ></DropdownMenuItem>
              </DropdownMenuList>
            </DropdownMenu>
            <!-- end of trigger -->
          </PrimaryButton>
          <PrimaryButton selector="filter-button">
            <span class="font-semibold">Chart View </span>
            <ChevronDownIcon class="h-5 w-5"></ChevronDownIcon>
            <!-- dropdown trigger for the actions -->
            <DropdownMenu target="filter-menu" trigger-el="filter-button">
              <template #header>
                <div
                  class="bg-gray-50 px-4 py-3 text-sm text-gray-900 dark:text-white"
                >
                  <div class="truncate font-medium">Actions</div>
                </div>
              </template>
              <DropdownMenuList>
                <template #header>
                  <div
                    class="bg-gray-50 px-4 py-3 text-sm text-gray-900 dark:text-white"
                  >
                    <div class="truncate font-medium">View By</div>
                  </div>
                </template>
                <DropdownMenuItem
                  :icon="CalendarDaysIcon"
                  name="Attendance"
                  link="/"
                ></DropdownMenuItem>
                <DropdownMenuItem
                  :icon="UserIcon"
                  name="Gender"
                  link="/"
                ></DropdownMenuItem>
              </DropdownMenuList>
            </DropdownMenu>
            <!-- end of trigger -->
          </PrimaryButton>
          <PrimaryButton selector="demo-button" class="bg-gray-800 text-white">
            <QrCodeIcon class="h-5 w-5 text-white" />
            <span>Add Qrcode</span>
          </PrimaryButton>
          <PrimaryButton selector="demo-button" class="bg-gray-800 text-white">
            <Cog8ToothIcon class="h-5 w-5 text-white" />
            <span>Manage</span>
          </PrimaryButton>
        </div>
      </div>
      <!-- chart area-->
      <BarChart
        :chart-data="chartData"
        series-title="Demo Test"
        chart-type="bar"
      ></BarChart>
      <!-- end of chart -->

      <!-- Services Table -->
      <Table>
        <TableCaption>
          <div class="flex items-center justify-between space-x-5">
            <div>
              <span>Service Qrcodes</span>
              <p class="py-2 text-base font-normal text-gray-500">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis asperiores maxime veritatis dolorem
              </p>
            </div>

            <div>
              <span>...</span>
            </div>
          </div>
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableCell cell-type="checkbox" @click="toggle"></TableCell>
            <TableHead>Qrcode Identifier</TableHead>
            <TableHead>Service Date</TableHead>
            <TableHead>Active At</TableHead>
            <TableHead>Expires At</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <!-- Actual table content -->
          <TableRow v-for="qrcode in qrcodesAPI" :key="qrcode.id" :class="{}">
            <TableCell
              v-model="selectedServices"
              cell-type="checkbox"
              :value-data="qrcode.id"
            ></TableCell>
            <TableCell>
              <span class="font-semibold">{{ qrcode.identifier }}</span>
            </TableCell>
            <TableCell>{{ qrcode.service_date }}</TableCell>
            <TableCell>
              <span class="text-gray-400">{{ qrcode.active_at ?? '--' }}</span>
            </TableCell>
            <TableCell>
              <span class="text-gray-400">{{ qrcode.expires_at ?? '--' }}</span>
            </TableCell>
            <TableCell
              :class="{
                'text-green-500': qrcode.expired_on == null,
                'text-red-500': qrcode.expired_on != null,
              }"
              class="text-xs font-bold"
              ><span
                :class="{
                  'bg-green-50': qrcode.expired_on == null,
                  'bg-red-50': qrcode.expired_on != null,
                }"
                class="rounded-md bg-gray-50 px-2 py-1"
                >{{ !qrcode.expired_on ? 'Active' : 'Ended' }}</span
              ></TableCell
            >
            <TableCell>
              <button
                :id="'editServiceDropdown' + qrcode.id"
                type="button"
                class="border-none p-1 hover:rounded-full hover:bg-gray-100 active:bg-slate-200"
              >
                <EllipsisHorizontalIcon
                  class="h-6 w-6"
                ></EllipsisHorizontalIcon>
                <!-- dropdown trigger for the actions -->
                <DropdownMenu
                  :target="'edit' + qrcode.id"
                  :trigger-el="'editServiceDropdown' + qrcode.id"
                >
                  <DropdownMenuList>
                    <DropdownMenuItem
                      :icon="EyeIcon"
                      name="View"
                      link="/qrcodes/detail"
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
