<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

import BaseLayout from '@/Layouts/BaseLayout.vue'
// API
import { totalAttendanceV2 } from '@/Utils/api'

// icon imports
import {
  ChevronUpIcon,
  ChevronDownIcon,
  CalendarDaysIcon,
} from '@heroicons/vue/24/outline'

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <BaseLayout title="Attendance">
    <template #sidenav> </template>
    <template #content>
      <!-- Analytics Filters -->
      <div class="flex items-center justify-between px-5 py-1">
        <div>
          <h4 class="text-xl font-bold">Total Attendance</h4>
          <span class="text-sm text-gray-500"
            >Provided attendance based on year and service selected</span
          >
        </div>
        <!-- chart filters -->
        <div class="flex items-center space-x-5">
          <div class="flex items-start space-x-3">
            <button
              id="filterDate"
              type="button"
              data-dropdown-toggle="filterDateDropdown"
              class="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-3 py-3 text-sm font-medium text-gray-500 shadow-sm"
            >
              <CalendarDaysIcon class="h-4 w-4"></CalendarDaysIcon>
              <span class="text-sm">Select Year</span>
              <ChevronDownIcon
                v-if="!dateFilterDropdownVisible"
                class="h-4 w-4"
              ></ChevronDownIcon>
              <ChevronUpIcon v-else class="h-4 w-4"></ChevronUpIcon>
            </button>
            <!-- Filter Dropdown menu -->
            <div
              id="filterDateDropdown"
              class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="filterDate"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >2020</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >2021</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >2022</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >2023</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >2024</a
                  >
                </li>
              </ul>
            </div>
            <button
              id="filterSearch"
              type="button"
              data-dropdown-toggle="filterSearchDropdown"
              class="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-500 shadow-sm"
            >
              <span class="text-sm">{{
                selectedService ?? 'Select Service'
              }}</span>
              <ChevronDownIcon
                v-if="!targetIsVisible"
                class="h-4 w-4"
              ></ChevronDownIcon>
              <ChevronUpIcon v-else class="h-4 w-4"></ChevronUpIcon>
            </button>
            <!-- Filter Search Dropdown menu -->
            <div
              id="filterSearchDropdown"
              class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
            >
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="filterSearch"
              >
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Koinonia</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Sunday Service</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Alpha Hour</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >Midweek</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end of chart filters -->
      </div>
      <!-- end of filters -->

      <div class="overflow-x-auto">
        <table class="table-fixed">
          <thead>
            <tr>
              <th class="bg-gray-100"></th>
              <th :colspan="13" class="w-full bg-gray-100 py-2 text-center">
                Months
              </th>
            </tr>
            <tr class="divide-x divide-gray-100">
              <!-- First column (User) -->
              <th class="sticky left-0 w-1/2 bg-gray-100 px-4 py-2">Members</th>
              <th class="bg-gray-50 px-4 py-2">Counts</th>
              <!-- Subsequent columns (Dates) -->
              <th class="bg-gray-50 px-4 py-2">Jan</th>
              <th class="bg-gray-50 px-4 py-2">Feb</th>
              <th class="bg-gray-50 px-4 py-2">Mar</th>
              <th class="bg-gray-50 px-4 py-2">Apr</th>
              <th class="bg-gray-50 px-4 py-2">May</th>
              <th class="bg-gray-50 px-4 py-2">Jun</th>
              <th class="bg-gray-50 px-4 py-2">Jul</th>
              <th class="bg-gray-50 px-4 py-2">Aug</th>
              <th class="bg-gray-50 px-4 py-2">Sep</th>
              <th class="bg-gray-50 px-4 py-2">Oct</th>
              <th class="bg-gray-50 px-4 py-2">Nov</th>
              <th class="bg-gray-50 px-4 py-2">Dec</th>
              <!-- Add more date columns as needed -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="entry in totalAttendanceV2"
              :key="entry.userId"
              class="divide-x divide-y divide-gray-100"
            >
              <td
                class="sticky left-0 w-1/2 bg-gray-100 px-4 py-2 text-center text-sm font-semibold"
              >
                {{ entry.userId }}
              </td>
              <td class="bg-gray-50 px-4 py-2 text-sm">
                {{ entry.total_service_attendance }} /
                {{ entry.total_service_occurences }}
              </td>
              <!-- Subsequent columns (Attendance) content -->
              <td
                v-for="monthlyAttendance in entry.user_attendance"
                :key="monthlyAttendance.month"
                class="bg-white px-4 py-2"
              >
                <div class="flex flex-shrink-0 space-x-1">
                  <span
                    v-for="(day, index) in monthlyAttendance.days"
                    :key="index"
                    :data-popover-target="`popover-default-${monthlyAttendance.month}-${entry.userId}-${index}`"
                    class="h-2 w-2 rounded-full"
                    :class="[day[2] ? 'bg-green-500' : 'bg-red-400']"
                  >
                    <div
                      :id="`popover-default-${monthlyAttendance.month}-${entry.userId}-${index}`"
                      data-popover
                      role="tooltip"
                      class="invisible absolute z-10 inline-block w-64 rounded-lg border border-gray-200 bg-white text-sm text-gray-500 opacity-0 shadow-sm transition-opacity duration-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
                    >
                      <div
                        class="rounded-t-lg border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
                      >
                        <h3 class="font-semibold text-gray-900 dark:text-white">
                          {{ monthlyAttendance.month }} / {{ day[0] }} /
                          {{ day[1] }}
                        </h3>
                      </div>
                      <div class="px-3 py-2">
                        <p v-if="day[2]">Arrived at 8:30AM</p>
                        <p v-else>Absent - No reason given</p>
                      </div>
                      <div data-popper-arrow></div>
                    </div>
                  </span>
                </div>
              </td>
              <!-- Add more attendance data for User 1 -->
            </tr>
            <!-- Add more rows for other users -->
          </tbody>
        </table>
      </div>
    </template>
  </BaseLayout>
</template>
