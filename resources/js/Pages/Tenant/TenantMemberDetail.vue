<script setup>
import { ref, computed } from 'vue'

import BaseLayout from '@/Layouts/BaseLayout.vue'
import PrimaryButton from '@/Components/Button/PrimaryButton.vue'

import DropdownMenu from '@/Components/DropdownMenu/DropdownMenu.vue'
import DropdownMenuList from '@/Components/DropdownMenu/DropdownMenuList.vue'
import DropdownMenuItem from '@/Components/DropdownMenu/DropdownMenuItem.vue'

import StatsCard from '@/Components/Cards/StatsCard.vue'

// Table component
import Table from '@/Components/Tables/BaseTable.vue'
import TableHeader from '@/Components/Tables/TableHeader.vue'
import TableHead from '@/Components/Tables/TableHead.vue'
import TableCaption from '@/Components/Tables/TableCaption.vue'
import TableRow from '@/Components/Tables/TableRow.vue'
import TableBody from '@/Components/Tables/TableBody.vue'
import TableCell from '@/Components/Tables/TableCell.vue'

// Tab Component
import Tab from '@/Components/Tabs/BaseTabs.vue'
import TabList from '@/Components/Tabs/TabList.vue'
import TabListItem from '@/Components/Tabs/TabListItem.vue'

// API
import { membersAttendanceAPI } from '@/Utils/api'

import { Calendar, DatePicker } from 'v-calendar'

import {
  ArrowDownTrayIcon,
  EllipsisHorizontalIcon,
  UserIcon,
  EyeIcon,
  ArrowRightStartOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
  CalendarDaysIcon,
  ClockIcon,
} from '@heroicons/vue/24/outline'

const selected = ref('Member Attendance')
const setActive = (name) => (selected.value = name)
const selectedTab = computed(() => selected.value)

const attrs = ref([
  {
    key: 'today',
    highlight: true,
    dates: { repeat: { weekdays: 7 } },
    popover: {
      label: 'sunday service',
    },
  },
])
// const disabledDates = ref([
//   {
//     repeat: {
//       weekdays: [1, 2, 3, 4, 5, 6],
//     },
//   },
// ])
</script>

<template>
  <BaseLayout title="Member">
    <template #sidenav>
      <StatsCard
        class="mt-[20px]"
        :icon="ArrowRightEndOnRectangleIcon"
        title="On Time (%)"
        value="70"
        color="green"
      ></StatsCard>
      <StatsCard
        :icon="ArrowRightEndOnRectangleIcon"
        title="Lateness (%)"
        value="10"
        color="gray"
      ></StatsCard>
      <StatsCard
        :icon="ArrowRightStartOnRectangleIcon"
        title="Absence (%)"
        value="30"
        color="pink"
      ></StatsCard>
      <StatsCard
        :icon="ClockIcon"
        title="Avg CheckIn Time"
        value="9:45"
      ></StatsCard>
    </template>
    <template #content>
      <div class="flex items-center justify-between">
        <DatePicker v-model="date">
          <template #default="{ togglePopover }">
            <PrimaryButton
              selector="export"
              class="text-sm"
              @click="togglePopover"
            >
              <CalendarDaysIcon class="h-5 w-5"></CalendarDaysIcon>
              <span>Aug 12 - 26, 2023</span>
            </PrimaryButton>
          </template>
        </DatePicker>
        <div class="flex items-center space-x-3 text-sm">
          <PrimaryButton selector="export" class="bg-gray-800 text-white">
            <ArrowDownTrayIcon class="h-5 w-5"></ArrowDownTrayIcon>
            <span>Attendance Report</span>
          </PrimaryButton>
          <PrimaryButton selector="manage" class="bg-gray-800 text-white">
            <UserIcon class="h-5 w-5"></UserIcon>
            <span>Manage Member</span>
          </PrimaryButton>
        </div>
      </div>
      <!-- Member details -->
      <div
        class="flex items-center justify-between rounded-md border border-gray-100 px-8 py-4"
      >
        <div class="flex space-x-8">
          <div class="flex items-center">
            <div
              class="flex h-24 w-24 items-center justify-center rounded-full border border-gray-100 bg-green-50 px-2 py-2"
            >
              <h4 class="text-2xl font-bold text-green-600">NS</h4>
            </div>
            <!-- <div class="flex flex-col">
              <h4 class="text-2xl font-bold">Nelly Sarpong</h4>
            </div> -->
          </div>
          <div class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <h4 class="text-xs uppercase text-gray-500">Full name</h4>
              <p class="text-sm font-semibold">NELLY SARPONG</p>
            </div>
            <div class="flex flex-col space-y-1">
              <h4 class="text-xs uppercase text-gray-500">
                Contact information
              </h4>
              <p class="text-sm font-semibold">+491521560994</p>
            </div>
            <!-- <div class="flex flex-col space-y-1">
              <h4 class="text-xs uppercase text-gray-500">Membership ID</h4>
              <p class="text-sm font-semibold">21560994</p>
            </div> -->
          </div>
          <div class="flex flex-col space-y-5">
            <div class="flex flex-col space-y-1">
              <h4 class="text-xs uppercase text-gray-500">branch</h4>
              <p class="text-sm font-semibold">AHODWO</p>
            </div>
            <div class="flex flex-col space-y-1">
              <h4 class="text-xs uppercase text-gray-500">added on</h4>
              <p class="text-sm font-semibold">2023-07-16 13:17:34</p>
            </div>
          </div>
        </div>
        <div class="flex space-x-3">
          <button
            class="relative flex items-center space-x-5 rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold"
          >
            <div class="-mt-2 flex">
              <span
                class="absolute h-2 w-2 animate-ping rounded-full bg-green-500 opacity-75"
              ></span>
              <span class="absolute h-2 w-2 rounded-full bg-green-500"></span>
            </div>
            <span>Active</span>
          </button>
          <button
            class="rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold"
          >
            Regenerate Pin
          </button>
        </div>
      </div>
      <!-- end Member details -->
      <!-- Tabs -->
      <Tab>
        <TabList>
          <TabListItem
            name="Member Attendance"
            :selected-tab="selectedTab"
            @set-active="(name) => setActive(name)"
          />
          <TabListItem
            name="Calendar View"
            :selected-tab="selectedTab"
            @set-active="(name) => setActive(name)"
          />
        </TabList>
      </Tab>
      <!-- services -->
      <div v-if="selectedTab == 'Member Attendance'">
        <!-- Services Table -->
        <Table class="px-0">
          <TableCaption>
            <div class="flex items-center justify-between space-x-5">
              <div>
                <span>Member Overall Attendances</span>
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
              <TableCell cell-type="checkbox" @change="toggle"></TableCell>
              <TableHead>Service Name</TableHead>
              <TableHead>Attendance</TableHead>
              <TableHead>Absence</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <!-- Actual table content -->
            <TableRow
              v-for="(attendance, index) in membersAttendanceAPI"
              :key="index"
              :class="{}"
            >
              <TableCell
                v-model="selectedServices"
                cell-type="checkbox"
                :value-data="index"
              ></TableCell>
              <TableCell>
                <span class="font-semibold">{{ attendance.name }}</span>
              </TableCell>
              <TableCell>
                <span class="font-bold text-green-700"
                  >{{ attendance.total_attendance }}%</span
                >
              </TableCell>
              <TableCell>
                <span class="font-bold text-gray-400"
                  >{{ attendance.total_absence }}%</span
                >
              </TableCell>
              <TableCell>
                <button
                  :id="'editServiceDropdown' + index"
                  type="button"
                  class="border-none p-1 hover:rounded-full hover:bg-gray-100 active:bg-slate-200"
                >
                  <EllipsisHorizontalIcon
                    class="h-6 w-6"
                  ></EllipsisHorizontalIcon>
                  <!-- dropdown trigger for the actions -->
                  <DropdownMenu
                    :target="'edit' + index"
                    :trigger-el="'editServiceDropdown' + index"
                  >
                    <DropdownMenuList>
                      <DropdownMenuItem
                        :icon="EyeIcon"
                        name="View Detail"
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
      </div>
      <div v-if="selectedTab == 'Calendar View'">
        <Calendar :columns="3" expanded transparent :attributes="attrs" />
      </div>
      <!-- end of Tabs -->
    </template>
  </BaseLayout>
</template>
