<template>
  <div class="flex w-full min-h-screen bg-gray-100 px-2 py-6">
    <aside class="relative w-64 px-6 py-4">
      <div
        class="flex items-center justify-between pb-4 border-b border-dashed border-gray-300"
      >
        <div class="flex items-center space-x-2">
          <BuildingOffice2Icon class="h-8 w-8 text-blue-500" />
          <h4 class="text-xl font-semibold">Attendanc</h4>
        </div>
        <ChevronDownIcon class="h-4 w-4 mt-1 text-gray-500" />
      </div>
      <ul class="flex flex-col items-start space-y-5 pt-8">
        <li class="flex items-center space-x-3">
          <HomeIcon class="h-6 w-6 text-gray-400" />
          <span>Dasboard</span>
        </li>
        <li class="flex items-center justify-between w-full">
          <div class="flex items-center space-x-3">
            <CalendarIcon class="h-6 w-6 text-gray-400" />
            <span>Services</span>
          </div>
          <div class="text-xs font-bold bg-white rounded-full px-3 py-1">7</div>
        </li>
        <li class="flex items-center space-x-3">
          <UsersIcon class="h-6 w-6 text-gray-400" />
          <span>Members</span>
        </li>
        <li
          class="flex items-center space-x-3 py-2 rounded-md bg-white px-2 w-full font-medium"
        >
          <ClipboardDocumentCheckIcon class="h-6 w-6 text-gray-700" />
          <span>Attendance</span>
        </li>
        <li class="flex items-center space-x-3">
          <ChartBarIcon class="h-6 w-6 text-gray-400" />
          <span>Reports</span>
        </li>
        <li class="flex items-center space-x-3">
          <QrCodeIcon class="h-6 w-6 text-gray-400" />
          <span>Qrcode Manager</span>
        </li>
      </ul>
      <h4 class="text-xs font-bold mt-12 text-gray-400 mb-4">ACTIONS</h4>
      <div
        class="flex items-center w-48 space-x-2 border border-dashed border-gray-400 rounded py-3 px-2 hover:border-gray-600"
      >
        <PlusCircleIcon class="h-6 w-6 text-gray-400" />
        <span>Create Qrcode</span>
      </div>
      <div class="absolute bottom-10 h-10 mb-10">
        <div class="flex items-center space-x-2 text-sm pb-4">
          <InformationCircleIcon class="h-6 w-6" />
          <span>Help & Getting Started</span>
        </div>
        <div class="border-b border-dashed border-gray-300 w-48"></div>
        <ul class="flex flex-col space-y-3 pt-5">
          <li class="flex items-center justify-between w-full">
            <div class="flex items-center space-x-3">
              <Cog8ToothIcon class="h-6 w-6 text-gray-400" />
              <span>Settings</span>
            </div>
            <div
              class="text-xs font-bold bg-white rounded-full px-3 py-1 shadow-sm"
            >
              1
            </div>
          </li>
          <li class="flex items-center space-x-3">
            <ArrowRightOnRectangleIcon class="h-6 w-6 text-gray-400" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </aside>
    <main class="flex-1 flex-col bg-white rounded-md shadow-md">
      <header
        class="flex items-center justify-between px-8 py-4 border-b border-dashed border-gray-200"
      >
        <h4 class="text-xl font-semibold">Dashboard</h4>
        <div class="flex items-center space-x-6">
          <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" />
          <span class="text-sm">Sunday, 7 November 2023</span>
          <div class="relative">
            <BellIcon class="h-6 w-6 text-gray-500" />
            <div
              class="absolute top-0 right-1 rounded-full h-2 w-2 bg-red-500"
            ></div>
          </div>
          <div class="flex items-center space-x-3">
            <img
              src="https://eu.ui-avatars.com/api/?background=random&name=Bernard+Kissi"
              class="rounded-full h-8 w-8"
            />
            <span class="text-sm">Bernard Kissi</span>
            <ChevronDownIcon class="h-4 w-4 font-medium text-gray-400" />
          </div>
        </div>
      </header>
      <section class="flex pt-8 px-8 space-x-8">
        <div class="flex flex-col w-64">
          <div
            class="flex flex-col items-center p-4 w-64 mb-8 bg-black rounded shadow-sm"
          >
            <div class="flex items-center justify-between space-x-8 pb-2">
              <span class="text-sm text-white font-semibold"
                >24, April 2023</span
              >
              <div
                class="flex items-center text-green-600 text-sm font-semibold space-x-2"
              >
                <div class="rounded-full h-2 w-2 bg-green-500"></div>
                <span>Live</span>
              </div>
            </div>
            <img src="images/qrcode.png" alt="qrcode" class="h-48 w-48" />
            <div class="pt-2 text-center">
              <p class="text-sm text-white font-bold">General Sunday Service</p>
              <p class="text-sm text-gray-300 font-medium">
                Expires after 4 hours
              </p>
              <p class="text-sm text-blue-400">http://sigmund.name</p>
            </div>
          </div>
          <div
            class="flex items-center justify-center space-x-2 border border-dashed border-gray-300 rounded py-3 px-2 hover:border-gray-600"
          >
            <ArrowSmallDownIcon class="h-6 w-6 text-gray-400" />
            <span>Download Qrcode</span>
          </div>
          <div class="flex items-center justify-between mt-8">
            <div class="flex items-center space-x-2">
              <div class="relative rounded-full h-4 w-4 bg-green-200">
                <div
                  class="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full h-2 w-2 bg-green-500"
                ></div>
              </div>
              <span class="text-lg font-medium">Live</span>
            </div>

            <span class="text-sm text-gray-500">View Live</span>
          </div>
          <div class="flex flex-col space-y-4 mt-6">
            <div
              class="flex items-center justify-between px-6 py-4 border rounded shadow-sm"
            >
              <div class="flex flex-col items-start">
                <div class="flex items-baseline space-x-5">
                  <p class="text-sm pb-1">Live Checkins</p>
                  <!-- <span class="text-xs text-gray-400">from 500</span> -->
                </div>
                <h4 class="text-2xl font-semibold">345</h4>
              </div>
              <CheckCircleIcon class="h-12 w-12 text-green-500" />
            </div>
            <div
              class="flex items-center justify-between px-6 py-4 border rounded shadow-sm"
            >
              <div class="flex flex-col items-start">
                <div class="flex items-baseline space-x-5">
                  <p class="text-sm pb-1">Failed Checkins</p>
                  <!-- <span class="text-xs text-gray-400">from 500</span> -->
                </div>
                <h4 class="text-2xl font-semibold">26</h4>
              </div>
              <XCircleIcon class="h-12 w-12 text-red-300" />
            </div>
            <div
              class="flex items-center justify-between px-6 py-4 border rounded shadow-sm"
            >
              <div class="flex flex-col items-start">
                <div class="flex items-baseline space-x-5">
                  <p class="text-sm pb-1">Pending Checkins</p>
                  <!-- <span class="text-xs text-gray-400">from 500</span> -->
                </div>
                <h4 class="text-2xl font-semibold">126</h4>
              </div>
              <UsersIcon class="h-12 w-12 text-gray-500" />
            </div>
          </div>

          <div
            class="flex items-center justify-between py-3 text-sm text-gray-500"
          >
            <span>Sunday Service</span>
            <span>34 minutes ago</span>
          </div>
          <!-- upcoming -->
          <div
            class="flex items-center justify-between mt-8 pb-4 rounded shadow-sm"
          >
            <div class="flex items-center space-x-2">
              <CalendarIcon class="h-5 w-5" />
              <span class="text-lg font-medium">Upcoming</span>
            </div>

            <span class="text-sm text-gray-500">View</span>
          </div>
          <div
            class="flex items-center justify-between px-6 py-4 border rounded"
          >
            <div class="flex flex-col items-start">
              <div class="flex items-baseline space-x-5">
                <p class="text-base font-semibold pb-1">Midweek Service</p>
                <!-- <span class="text-xs text-gray-400">from 500</span> -->
              </div>
              <h4 class="text-sm text-gray-400">Starts in 12 mins</h4>
            </div>
            <ClockIcon class="h-8 w-8 text-gray-500" />
          </div>
        </div>
        <div class="flex-1 flex-col">
          <h4 class="text-2xl font-bold">Service Attendance Summary</h4>
          <div class="flex item-center justify-between py-6">
            <div class="flex items-start space-x-3">
              <div
                class="bg-white border border-gray-300 px-3 py-3 text-sm font-medium text-gray-500 rounded-md shadow-sm"
              >
                Dec 7, 2021 - Dec 2, 2021
              </div>
              <div
                class="bg-white border border-gray-300 px-4 py-3 text-sm font-medium text-gray-500 rounded-md shadow-sm"
              >
                Youth Week Service
              </div>
            </div>

            <div class="flex items-center space-x-5">
              <div class="flex">
                <span
                  id="badge-dismiss-dark"
                  class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded"
                >
                  Month - July
                  <button
                    type="button"
                    class="inline-flex items-center p-1 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900"
                    data-dismiss-target="#badge-dismiss-dark"
                    aria-label="Remove"
                  >
                    <svg
                      class="w-2 h-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Remove badge</span>
                  </button>
                </span>
                <span
                  id="badge-dismiss-dark"
                  class="inline-flex items-center px-2 py-1 mr-2 text-sm font-medium text-gray-800 bg-gray-100 rounded"
                >
                  2 members
                  <button
                    type="button"
                    class="inline-flex items-center p-1 ml-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900"
                    data-dismiss-target="#badge-dismiss-dark"
                    aria-label="Remove"
                  >
                    <svg
                      class="w-2 h-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Remove badge</span>
                  </button>
                </span>
              </div>
              <CalendarIcon
                class="h-10 w-10 bg-gray-50 rounded-full px-1 py-2 shadow-md"
              />
              <AdjustmentsHorizontalIcon
                class="h-10 w-10 bg-gray-50 rounded-full px-1 py-2 shadow-md"
              />
            </div>
          </div>
          <VueApexCharts
            height="300"
            :options="chart.chartOptions"
            :series="chartData.series"
          />
          <!-- tables -->
          <div class="flex space-x-8 mt-6">
            <div class="flex-1">
              <!-- header -->
              <div class="flex items-start justify-between px-4 border-b pb-5">
                <div class="flex flex-col">
                  <h4 class="text-2xl font-semibold">Recent Checkins</h4>
                  <p class="text-sm text-gray-500">
                    Members Attendancce Checkins
                  </p>
                </div>
                <div class="flex flex-col">
                  <div>...</div>
                  <p class="text-sm">updated 2 mins ago</p>
                </div>
              </div>
              <!-- end of header -->
              <div class="px-4 divide-y">
                <div class="flex items-start justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DevicePhoneMobileIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Zaire Mango</h4>
                      <p class="text-sm text-gray-400">Mobile</p>
                    </div>
                  </div>
                  <div class="text-sm">
                    <p>Sun Apr 30 2023</p>
                    <p class="text-gray-400">17.233.74.227</p>
                  </div>
                </div>

                <div class="flex items-start justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DevicePhoneMobileIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Zaire Mango</h4>
                      <p class="text-sm text-gray-400">Mobile</p>
                    </div>
                  </div>
                  <div class="text-sm">
                    <p>Sun Apr 30 2023</p>
                    <p class="text-gray-400">17.233.74.227</p>
                  </div>
                </div>

                <div class="flex items-start justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DevicePhoneMobileIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Zaire Mango</h4>
                      <p class="text-sm text-gray-400">Mobile</p>
                    </div>
                  </div>
                  <div class="text-sm">
                    <p>Sun Apr 30 2023</p>
                    <p class="text-gray-400">17.233.74.227</p>
                  </div>
                </div>
                <div class="flex items-start justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DeviceTabletIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Zaire Mango</h4>
                      <p class="text-sm text-gray-400">Mobile</p>
                    </div>
                  </div>
                  <div class="text-sm">
                    <p>Sun Apr 30 2023</p>
                    <p class="text-gray-400">17.233.74.227</p>
                  </div>
                </div>
                <div class="flex items-start justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <ComputerDesktopIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Zaire Mango</h4>
                      <p class="text-sm text-gray-400">Mobile</p>
                    </div>
                  </div>
                  <div class="text-sm">
                    <p>Sun Apr 30 2023</p>
                    <p class="text-gray-400">17.233.74.227</p>
                  </div>
                </div>
                <div class="flex items-start justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DeviceTabletIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Zaire Mango</h4>
                      <p class="text-sm text-gray-400">Mobile</p>
                    </div>
                  </div>
                  <div class="text-sm">
                    <p>Sun Apr 30 2023</p>
                    <p class="text-gray-400">17.233.74.227</p>
                  </div>
                </div>
                <div class="flex items-start justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DeviceTabletIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Zaire Mango</h4>
                      <p class="text-sm text-gray-400">Mobile</p>
                    </div>
                  </div>
                  <div class="text-sm">
                    <p>Sun Apr 30 2023</p>
                    <p class="text-gray-400">17.233.74.227</p>
                  </div>
                </div>
                <div class="flex items-start justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DeviceTabletIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Zaire Mango</h4>
                      <p class="text-sm text-gray-400">Mobile</p>
                    </div>
                  </div>
                  <div class="text-sm">
                    <p>Sun Apr 30 2023</p>
                    <p class="text-gray-400">17.233.74.227</p>
                  </div>
                </div>
                <div class="flex items-start justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DeviceTabletIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Zaire Mango</h4>
                      <p class="text-sm text-gray-400">Mobile</p>
                    </div>
                  </div>
                  <div class="text-sm">
                    <p>Sun Apr 30 2023</p>
                    <p class="text-gray-400">17.233.74.227</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col w-2/4">
              <div class="flex items-end justify-between border-b pb-5">
                <div class="flex flex-col">
                  <h4 class="text-2xl font-semibold">Service Stats</h4>
                  <p class="text-sm text-gray-500">
                    Service statistics this month
                  </p>
                </div>
                <div class="flex">
                  <p class="text-sm text-gray-400">updated 3 days ago</p>
                </div>
              </div>
              <!-- stats cards -->
              <div class="flex flex-col divide-y">
                <div class="pt-4">
                  <h4 class="font-medium">Gender Attendance Distribution</h4>
                  <VueApexCharts
                    height="300"
                    :options="pie.chartOptions"
                    :series="pieData.series"
                  />
                </div>
                <div class="flex items-center justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DevicePhoneMobileIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Overall Attendance</h4>
                      <div class="flex items-center space-x-1 text-xs">
                        <div
                          class="flex items-center text-red-500 font-semibold"
                        >
                          <ArrowSmallDownIcon class="h-4 w-4" />
                          <span>1.5%</span>
                        </div>
                        <span class="text-gray-400">vs Last Month</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="sm:w-20 lg:w-40 bg-gray-200 rounded-full h-1 mb-4"
                  >
                    <div
                      class="bg-blue-600 h-1 rounded-full dark:bg-green-500"
                      style="width: 40%"
                    ></div>
                  </div>
                  <div class="flex flex-col items-end">
                    <h4 class="text-xl font-semibold">137</h4>
                    <span class="text-gray-400 text-xs">out of 300</span>
                  </div>
                </div>
                <div class="flex items-center justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DevicePhoneMobileIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Total Absentees</h4>
                      <div class="flex items-center space-x-1 text-xs">
                        <div
                          class="flex items-center text-green-500 font-semibold"
                        >
                          <ArrowSmallUpIcon class="h-4 w-4" />
                          <span>2.5%</span>
                        </div>
                        <span class="text-gray-400">vs Last Month</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="sm:w-20 lg:w-40 bg-gray-200 rounded-full h-1 mb-4"
                  >
                    <div
                      class="bg-blue-600 h-1 rounded-full dark:bg-red-500"
                      style="width: 60%"
                    ></div>
                  </div>
                  <div class="flex flex-col items-end">
                    <h4 class="text-xl font-semibold">97</h4>
                    <span class="text-gray-400 text-xs">out of 300 </span>
                  </div>
                </div>
                <div class="flex items-center justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DevicePhoneMobileIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Service recurring</h4>
                      <p class="text-xs text-gray-400">Ocurrences per month</p>
                    </div>
                  </div>

                  <div class="flex flex-col items-end">
                    <h4 class="text-xl font-semibold">3</h4>
                    <span class="text-gray-400 text-xs">out of 3 times</span>
                  </div>
                </div>
                <div class="flex items-center justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DevicePhoneMobileIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Total Expected Attendance</h4>
                      <p class="text-xs text-gray-400">
                        Expected Attendance for the month
                      </p>
                    </div>
                  </div>

                  <div class="flex flex-col items-end">
                    <h4 class="text-xl font-semibold">600</h4>
                    <span class="text-gray-400 text-xs"
                      >out of 600 head count</span
                    >
                  </div>
                </div>
              </div>
              <!-- end stats cards -->
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script setup>
import {
  HomeIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  QrCodeIcon,
  BuildingOffice2Icon,
  Cog8ToothIcon,
  ArrowRightOnRectangleIcon,
  PlusCircleIcon,
  InformationCircleIcon,
  CalendarIcon,
  ChevronDownIcon,
  BellIcon,
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
  XCircleIcon,
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
  ArrowSmallUpIcon,
  ArrowSmallDownIcon,
  ClockIcon,
} from "@heroicons/vue/24/outline";
import { reactive } from "vue";
import VueApexCharts from "vue3-apexcharts";

const pieData = reactive({
  series: [
    {
      name: "Male",
      data: [44, 53],
    },
    {
      name: "Female",
      data: [76, 67],
    },
  ],
});
const pie = reactive({
  chartOptions: {
    chart: {
      type: "area",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },
    xaxis: {
      categories: ["Apr", "May"],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  },
});
const chartData = reactive({
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 90, 91, 98, 94],
    },
  ],
});
const chart = reactive({
  chartOptions: {
    chart: {
      animations: {
        enabled: true,
      },
      type: "bar",
      stacked: false,
      fontFamily: '"Inter", sans-serif',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },
  },
});
</script>
