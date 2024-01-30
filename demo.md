<script setup>
import { ref, onMounted } from 'vue'

import SideBar from '@/Components/SideBar/SideBar.vue'
import NavBar from '@/Components/NavBar/NavBar.vue'
import LiveDetailCard from '@/Components/Cards/LiveDetailCard.vue'
import LiveCard from '@/Components/Cards/LiveCard.vue'
import StatsCard from '@/Components/Cards/StatsCard.vue'
import BarChart from '@/Components/Charts/BarChart.vue'

import SearchFilterDropdown from '@/Components/SearchDropdown/SearchFilterDropdown.vue'
import TextFilters from '@/Components/DropdownFilters/TextFilters.vue'
import DateFilters from '@/Components/DropdownFilters/DateFilters.vue'
import StaticFilters from '@/Components/DropdownFilters/StaticFilters.vue'

import { useSeriesChartData } from '@/Composables/useSeriesChartData'
import { useSelectedService } from '@/Composables/useSelectedService'
import { serviceApi, attendanceApi, genderStatisticsApi } from '@/Utils/api'

import Table from '@/Components/Tables/BaseTable.vue'
import TableHeader from '@/Components/Tables/TableHeader.vue'
import TableHead from '@/Components/Tables/TableHead.vue'
import TableCaption from '@/Components/Tables/TableCaption.vue'
import TableRow from '@/Components/Tables/TableRow.vue'
import TableBody from '@/Components/Tables/TableBody.vue'
import TableCell from '@/Components/Tables/TableCell.vue'
// import TableAction from '@/Components/Tables/TableAction.vue'

// import DropdownMenu from '@/Components/DropdownMenu/DropdownMenu.vue'
// import DropdownMenuList from '@/Components/DropdownMenu/DropdownMenuList.vue'
// import DropdownMenuItem from '@/Components/DropdownMenu/DropdownMenuItem.vue'

// import Datepicker from 'flowbite-datepicker/Datepicker'

import {
  UsersIcon,
  ArrowTrendingUpIcon,
  PaperAirplaneIcon,
  AdjustmentsHorizontalIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  CalendarDaysIcon,
  DeviceTabletIcon,
  ArrowSmallUpIcon,
  // MagnifyingGlassIcon,
  // FunnelIcon,
} from '@heroicons/vue/24/outline'
import { useElementVisibility } from '@vueuse/core'

const chartData = ref([])
const statsData = ref([])
const labels = ref([])

// const chartLabel = computed(() => chartLabels.value.map((key) => key))

const filter = ref(null)
const targetIsVisible = useElementVisibility(filter)

const dateFilterDropdown = ref(null)
const dateFilterDropdownVisible = useElementVisibility(dateFilterDropdown)

const closeButton = ref(false)

const data = ref(attendanceApi)
const stats = ref(genderStatisticsApi)

const startDate = new Date()
const endDate = new Date('2024-01-09T11:59:30')

const { selectedService } = useSelectedService()
const closeFilter = () => {
  closeButton.value = !closeButton.value
}

const onInitBaseChart = () => {
  const { extractMonthlyChartData, series } = useSeriesChartData(data, {
    identifier: 'month',
    keys: ['attendance', 'absence'],
  })
  extractMonthlyChartData()
  chartData.value = series.value
}

const onInitStatsChart = () => {
  const { extractMonthlyChartData, statsSeries, chartKeys } =
    useSeriesChartData(stats, {
      identifier: 'month',
      keys: ['male', 'female'],
    })
  extractMonthlyChartData()
  console.log('keyz', chartKeys)
  statsData.value = statsSeries.value
  labels.value = chartKeys.value
}

onMounted(() => {
  onInitBaseChart()
  onInitStatsChart()
  console.log(
    'lables',
    labels.value.map((key) => key),
  )
})
</script>
<template>
  <div class="flex min-h-screen w-full bg-gray-100 px-2 py-6">
    <!-- sidebar -->
    <SideBar></SideBar>
    <!-- end sidebar -->
    <main
      class="flex-1 flex-col overflow-x-hidden rounded-md bg-white shadow-md"
    >
      <!-- navbar -->
      <NavBar name="Dashboard"></NavBar>
      <!-- end navbar -->
      <section
        class="flex space-x-8 divide-x divide-dashed divide-gray-100 px-8"
      >
        <div class="flex w-64 flex-col pb-8 pt-2">
          <StatsCard
            :icon="UsersIcon"
            title="Success Checkins"
            value="45 M"
            color="pink"
            :has-trends="true"
            :trend="{
              icon: ArrowTrendingUpIcon,
              value: '12%',
              text: 'since last week',
            }"
          ></StatsCard>
          <StatsCard
            :icon="ArrowTrendingUpIcon"
            title="Success Checkins"
            value="45 M"
            color="blue"
          ></StatsCard>
          <!-- live card -->
          <LiveDetailCard
            name="Sunday Service"
            :start-date-time="startDate"
            :end-date-time="endDate"
            status="live"
            qrcode="images/qrcode.png"
            :start-immediately="true"
            :tick="1000"
          ></LiveDetailCard>
          <!-- end -->
          <!-- live card -->
          <LiveCard
            name="Children's service"
            title="Ended Service"
            value="0 M"
            status="active"
            :icon="PaperAirplaneIcon"
          ></LiveCard>
          <!-- end live card -->
          <slot name="side-content"></slot>
        </div>
        <div class="relative flex-1 flex-col space-y-8 px-3 pt-8">
          <div class="item-center flex justify-between px-5 py-1">
            <div>
              <h4 class="text-xl font-bold">Attendance Summary</h4>
              <span class="text-gray-500"
                >Entire year's attendance analysis for a service</span
              >
            </div>

            <div class="flex items-center space-x-5">
              <div class="flex items-start space-x-3">
                <button
                  id="filterDate"
                  type="button"
                  class="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-3 py-3 text-sm font-medium text-gray-500 shadow-sm"
                >
                  <CalendarDaysIcon class="h-4 w-4"></CalendarDaysIcon>
                  <span>Dec 7, 2021 - Dec 2, 2021</span>
                  <ChevronDownIcon
                    v-if="!dateFilterDropdownVisible"
                    class="h-4 w-4"
                  ></ChevronDownIcon>
                  <ChevronUpIcon v-else class="h-4 w-4"></ChevronUpIcon>
                </button>
                <SearchFilterDropdown
                  ref="dateFilterDropdown"
                  size="w-64"
                  target="dateFilter"
                  trigger-el="filterDate"
                >
                  <DateFilters></DateFilters>
                </SearchFilterDropdown>
                <button
                  id="filterSearch"
                  type="button"
                  class="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-500 shadow-sm"
                >
                  <span>{{ selectedService ?? 'Select Service' }}</span>
                  <ChevronDownIcon
                    v-if="!targetIsVisible"
                    class="h-4 w-4"
                  ></ChevronDownIcon>
                  <ChevronUpIcon v-else class="h-4 w-4"></ChevronUpIcon>
                </button>
                <SearchFilterDropdown
                  ref="filter"
                  size="w-64"
                  target="filter"
                  trigger-el="filterSearch"
                  :close="closeButton"
                >
                  <TextFilters
                    :data="serviceApi"
                    @close-filter="closeFilter"
                  ></TextFilters>
                </SearchFilterDropdown>
              </div>
              <button id="staticFilter" class="relative">
                <AdjustmentsHorizontalIcon
                  class="relative h-10 w-10 rounded-full bg-gray-50 px-1 py-2 shadow-md"
                />
                <span
                  class="absolute right-0 top-0 h-2 w-2 rounded-full bg-pink-500"
                ></span>
              </button>
              <SearchFilterDropdown
                class="absolute inset-y-0 right-10 mr-2"
                size="w-64"
                target="static"
                trigger-el="staticFilter"
              >
                <StaticFilters></StaticFilters>
              </SearchFilterDropdown>
            </div>
          </div>
          <!-- chart -->
          <BarChart :chart-data="chartData" series-title="Demo Test"></BarChart>
          <!-- end of chart -->
          <div class="flex items-start justify-between space-x-8">
            <!-- table demo -->
            <Table class="flex-1">
              <TableCaption>
                <div class="flex items-center justify-between space-x-5">
                  <div>
                    <span>Recent Services Attendance</span>
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
                  <TableHead>Service</TableHead>
                  <TableHead>Details</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell class="flex items-center space-x-3">
                    <CalendarDaysIcon
                      class="h-6 w-6 text-gray-400"
                    ></CalendarDaysIcon>
                    <div class="flex flex-col">
                      <span class="font-semibold">Midweek Service</span>
                      <span class="text-sm text-gray-400"
                        >c9ccf79d-3a70-4811-a070-3b6df63b4bf2</span
                      >
                    </div>
                  </TableCell>
                  <TableCell>
                    <div class="flex flex-col">
                      <span class="text-sm font-semibold text-green-500"
                        >Completed</span
                      >
                      <span class="text-sm text-gray-500"
                        >Sun Apr 30 2023 00:1:34</span
                      >
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="flex items-center space-x-3">
                    <CalendarDaysIcon
                      class="h-6 w-6 text-gray-400"
                    ></CalendarDaysIcon>
                    <div class="flex flex-col">
                      <span class="font-semibold">Midweek Service</span>
                      <span class="text-sm text-gray-400"
                        >b2ba1349-e128-44e7-ac10-4fd6beda2112</span
                      >
                    </div>
                  </TableCell>
                  <TableCell>
                    <div class="flex flex-col">
                      <span class="text-sm text-red-500">Failed</span>
                      <span class="text-sm text-gray-500">Sun Apr 30 2023</span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="flex items-center space-x-3">
                    <CalendarDaysIcon
                      class="h-6 w-6 text-gray-400"
                    ></CalendarDaysIcon>
                    <div class="flex flex-col">
                      <span class="font-semibold">Midweek Service</span>
                      <span class="text-sm text-gray-400"
                        >b2ba1349-e128-44e7-ac10-4fd6beda2112</span
                      >
                    </div>
                  </TableCell>
                  <TableCell>
                    <div class="flex flex-col">
                      <span class="text-sm text-yellow-500">Cancelled</span>
                      <span class="text-sm text-gray-500">Sun Apr 30 2023</span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="flex items-center space-x-3">
                    <CalendarDaysIcon
                      class="h-6 w-6 text-gray-400"
                    ></CalendarDaysIcon>
                    <div class="flex flex-col">
                      <span class="font-semibold">Sunday Service</span>
                      <span class="text-sm text-gray-400"
                        >d3deb692-47a6-4dcb-8f56-4d74d72816c9</span
                      >
                    </div>
                  </TableCell>
                  <TableCell>
                    <div class="flex flex-col">
                      <span class="text-sm text-yellow-500">Cancelled</span>
                      <span class="text-sm text-gray-500">Sun Apr 30 2023</span>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell class="flex items-center space-x-3">
                    <CalendarDaysIcon
                      class="h-6 w-6 text-gray-400"
                    ></CalendarDaysIcon>
                    <div class="flex flex-col">
                      <span class="font-semibold">Midweek Service</span>
                      <span class="text-sm text-gray-400"
                        >762fff17-6322-4459-b6f3-79fd475305f6</span
                      >
                    </div>
                  </TableCell>
                  <TableCell>
                    <div class="flex flex-col">
                      <span class="text-sm text-yellow-500">Cancelled</span>
                      <span class="text-sm text-gray-500">Sun Apr 30 2023</span>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <div class="w-2/4 py-3">
              <Table>
                <TableCaption>
                  <div class="flex items-center justify-between space-x-5">
                    <div>
                      <span>Monthly Service Statistics</span>
                      <p class="py-2 text-base font-normal text-gray-500">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Perspiciatis asperiores maxime veritatis dolorem
                      </p>
                    </div>

                    <div>
                      <span>...</span>
                    </div>
                  </div>
                </TableCaption>
                <TableBody>
                  <TableRow>
                    <TableCell :col="2" class="overflow-x">
                      <!-- chart -->
                      <BarChart
                        :chart-data="statsData"
                        :series-categories="labels"
                        series-title="Demo Test"
                      ></BarChart>
                      <!-- end of chart -->
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="flex items-center space-x-3">
                      <DeviceTabletIcon
                        class="h-6 w-6 text-gray-400"
                      ></DeviceTabletIcon>
                      <div class="flex flex-col">
                        <span class="font-semibold">Monthly Attendance</span>
                        <div class="flex items-start space-x-1 text-sm">
                          <div
                            class="flex items-center font-semibold text-green-500"
                          >
                            <ArrowSmallUpIcon class="h-4 w-4" />
                            <span>2.5%</span>
                          </div>
                          <span class="text-gray-400"
                            >more than previous Month</span
                          >
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div class="flex flex-col">
                        <span class="text-sm font-semibold">137 members</span>
                        <span class="text-sm text-gray-400">Expected 245</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="flex items-center space-x-3">
                      <DeviceTabletIcon
                        class="h-6 w-6 text-gray-400"
                      ></DeviceTabletIcon>
                      <div class="flex flex-col">
                        <span class="font-semibold">Monthly Absentees</span>
                        <div class="flex items-center space-x-1 text-sm">
                          <div
                            class="flex items-start font-semibold text-red-500"
                          >
                            <ArrowSmallUpIcon class="h-4 w-4" />
                            <span>2.5%</span>
                          </div>
                          <span class="text-gray-400"
                            >less than previous month</span
                          >
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div class="flex flex-col">
                        <span class="text-sm font-semibold">37 members</span>
                        <span class="text-sm text-gray-400">out of 245</span>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="flex items-center space-x-3">
                      <DeviceTabletIcon
                        class="h-6 w-6 text-gray-400"
                      ></DeviceTabletIcon>
                      <div class="flex flex-col">
                        <span class="font-semibold"
                          >Monthly Service Recurrence</span
                        >
                        <span class="text-sm text-gray-400"
                          >Number of times service occurred</span
                        >
                      </div>
                    </TableCell>
                    <TableCell>
                      <div class="flex flex-col">
                        <span class="text-sm font-semibold">3 times</span>
                        <span class="text-sm text-gray-400"
                          >out of 3 times</span
                        >
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell class="flex items-center space-x-3">
                      <DeviceTabletIcon
                        class="h-6 w-6 text-gray-400"
                      ></DeviceTabletIcon>
                      <div class="flex flex-col">
                        <span class="font-semibold"
                          >Monthly Expected Attendance</span
                        >
                        <span class="text-sm text-gray-400"
                          >Each member should attended service 3 times</span
                        >
                      </div>
                    </TableCell>
                    <TableCell>
                      <div class="flex flex-col">
                        <span class="text-sm font-semibold">245 counts</span>
                        <span class="text-sm text-gray-400"
                          >56 count per service</span
                        >
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>

          <!-- end of demo -->
          <slot name="main-content"></slot>
        </div>
      </section>
    </main>
  </div>
</template>

_____________^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^________________________________________________________________________________________________________


<template>
  <div class="flex min-h-screen w-full bg-gray-100 px-2 py-6">
    <aside class="relative w-64 px-6 py-4">
      <div
        class="flex items-center justify-between border-b border-dashed border-gray-300 pb-4"
      >
        <div class="flex items-center space-x-2">
          <BuildingOffice2Icon class="h-8 w-8 text-blue-500" />
          <h4 class="text-xl font-semibold">Attendanc</h4>
        </div>
        <ChevronDownIcon class="mt-1 h-4 w-4 text-gray-500" />
      </div>
      <ul class="flex flex-col items-start space-y-5 pt-8">
        <li class="flex items-center space-x-3">
          <HomeIcon class="h-6 w-6 text-gray-400" />
          <span>Dasboard</span>
        </li>
        <li class="flex w-full items-center justify-between">
          <div class="flex items-center space-x-3">
            <CalendarIcon class="h-6 w-6 text-gray-400" />
            <span>Services</span>
          </div>
          <div class="rounded-full bg-white px-3 py-1 text-xs font-bold">7</div>
        </li>
        <li class="flex items-center space-x-3">
          <UsersIcon class="h-6 w-6 text-gray-400" />
          <span>Members</span>
        </li>
        <li
          class="flex w-full items-center space-x-3 rounded-md bg-white px-2 py-2 font-medium"
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
      <h4 class="mb-4 mt-12 text-xs font-bold text-gray-400">ACTIONS</h4>
      <div
        class="flex w-48 items-center space-x-2 rounded border border-dashed border-gray-400 px-2 py-3 hover:border-gray-600"
      >
        <PlusCircleIcon class="h-6 w-6 text-gray-400" />
        <span>Create Qrcode</span>
      </div>
      <div class="absolute bottom-10 mb-10 h-10">
        <div class="flex items-center space-x-2 pb-4 text-sm">
          <InformationCircleIcon class="h-6 w-6" />
          <span>Help & Getting Started</span>
        </div>
        <div class="w-48 border-b border-dashed border-gray-300"></div>
        <ul class="flex flex-col space-y-3 pt-5">
          <li class="flex w-full items-center justify-between">
            <div class="flex items-center space-x-3">
              <Cog8ToothIcon class="h-6 w-6 text-gray-400" />
              <span>Settings</span>
            </div>
            <div
              class="rounded-full bg-white px-3 py-1 text-xs font-bold shadow-sm"
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
    <main class="flex-1 flex-col rounded-md bg-white shadow-md">
      <header
        class="flex items-center justify-between border-b border-dashed border-gray-200 px-8 py-4"
      >
        <h4 class="text-xl font-semibold">Dashboard</h4>
        <div class="flex items-center space-x-6">
          <MagnifyingGlassIcon class="h-6 w-6 text-gray-500" />
          <span class="text-sm">Sunday, 7 November 2023</span>
          <div class="relative">
            <BellIcon class="h-6 w-6 text-gray-500" />
            <div
              class="absolute right-1 top-0 h-2 w-2 rounded-full bg-red-500"
            ></div>
          </div>
          <div class="flex items-center space-x-3">
            <img
              src="https://eu.ui-avatars.com/api/?background=random&name=Bernard+Kissi"
              class="h-8 w-8 rounded-full"
            />
            <span class="text-sm">Bernard Kissi</span>
            <ChevronDownIcon class="h-4 w-4 font-medium text-gray-400" />
          </div>
        </div>
      </header>
      <section class="flex space-x-8 px-8 pt-8">
        <div class="flex w-64 flex-col">
          <div
            class="mb-8 flex w-64 flex-col items-center rounded bg-black p-4 shadow-sm"
          >
            <div class="flex items-center justify-between space-x-8 pb-2">
              <span class="text-sm font-semibold text-white"
                >24, April 2023</span
              >
              <div
                class="flex items-center space-x-2 text-sm font-semibold text-green-600"
              >
                <div class="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Live</span>
              </div>
            </div>
            <img src="images/qrcode.png" alt="qrcode" class="h-48 w-48" />
            <div class="pt-2 text-center">
              <p class="text-sm font-bold text-white">General Sunday Service</p>
              <p class="text-sm font-medium text-gray-300">
                Expires after 4 hours
              </p>
              <p class="text-sm text-blue-400">http://sigmund.name</p>
            </div>
          </div>
          <div
            class="flex items-center justify-center space-x-2 rounded border border-dashed border-gray-300 px-2 py-3 hover:border-gray-600"
          >
            <ArrowSmallDownIcon class="h-6 w-6 text-gray-400" />
            <span>Download Qrcode</span>
          </div>
          <div class="mt-8 flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <div class="relative h-4 w-4 rounded-full bg-green-200">
                <div
                  class="absolute inset-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-green-500"
                ></div>
              </div>
              <span class="text-lg font-medium">Live</span>
            </div>

            <span class="text-sm text-gray-500">View Live</span>
          </div>
          <div class="mt-6 flex flex-col space-y-4">
            <div
              class="flex items-center justify-between rounded border px-6 py-4 shadow-sm"
            >
              <div class="flex flex-col items-start">
                <div class="flex items-baseline space-x-5">
                  <p class="pb-1 text-sm">Live Checkins</p>
                  <!-- <span class="text-xs text-gray-400">from 500</span> -->
                </div>
                <h4 class="text-2xl font-semibold">345</h4>
              </div>
              <CheckCircleIcon class="h-12 w-12 text-green-500" />
            </div>
            <div
              class="flex items-center justify-between rounded border px-6 py-4 shadow-sm"
            >
              <div class="flex flex-col items-start">
                <div class="flex items-baseline space-x-5">
                  <p class="pb-1 text-sm">Failed Checkins</p>
                  <!-- <span class="text-xs text-gray-400">from 500</span> -->
                </div>
                <h4 class="text-2xl font-semibold">26</h4>
              </div>
              <XCircleIcon class="h-12 w-12 text-red-300" />
            </div>
            <div
              class="flex items-center justify-between rounded border px-6 py-4 shadow-sm"
            >
              <div class="flex flex-col items-start">
                <div class="flex items-baseline space-x-5">
                  <p class="pb-1 text-sm">Pending Checkins</p>
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
            class="mt-8 flex items-center justify-between rounded pb-4 shadow-sm"
          >
            <div class="flex items-center space-x-2">
              <CalendarIcon class="h-5 w-5" />
              <span class="text-lg font-medium">Upcoming</span>
            </div>

            <span class="text-sm text-gray-500">View</span>
          </div>
          <div
            class="flex items-center justify-between rounded border px-6 py-4"
          >
            <div class="flex flex-col items-start">
              <div class="flex items-baseline space-x-5">
                <p class="pb-1 text-base font-semibold">Midweek Service</p>
                <!-- <span class="text-xs text-gray-400">from 500</span> -->
              </div>
              <h4 class="text-sm text-gray-400">Starts in 12 mins</h4>
            </div>
            <ClockIcon class="h-8 w-8 text-gray-500" />
          </div>
        </div>
        <div class="flex-1 flex-col">
          <h4 class="text-2xl font-bold">Service Attendance Summary</h4>
          <div class="item-center flex justify-between py-6">
            <div class="flex items-start space-x-3">
              <div
                class="rounded-md border border-gray-300 bg-white px-3 py-3 text-sm font-medium text-gray-500 shadow-sm"
              >
                Dec 7, 2021 - Dec 2, 2021
              </div>
              <div
                class="rounded-md border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-500 shadow-sm"
              >
                Youth Week Service
              </div>
            </div>

            <div class="flex items-center space-x-5">
              <div class="flex">
                <span
                  id="badge-dismiss-dark"
                  class="mr-2 inline-flex items-center rounded bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800"
                >
                  Month - July
                  <button
                    type="button"
                    class="ml-2 inline-flex items-center rounded-sm bg-transparent p-1 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                    data-dismiss-target="#badge-dismiss-dark"
                    aria-label="Remove"
                  >
                    <svg
                      class="h-2 w-2"
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
                  class="mr-2 inline-flex items-center rounded bg-gray-100 px-2 py-1 text-sm font-medium text-gray-800"
                >
                  2 members
                  <button
                    type="button"
                    class="ml-2 inline-flex items-center rounded-sm bg-transparent p-1 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                    data-dismiss-target="#badge-dismiss-dark"
                    aria-label="Remove"
                  >
                    <svg
                      class="h-2 w-2"
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
                class="h-10 w-10 rounded-full bg-gray-50 px-1 py-2 shadow-md"
              />
              <AdjustmentsHorizontalIcon
                class="h-10 w-10 rounded-full bg-gray-50 px-1 py-2 shadow-md"
              />
            </div>
          </div>
          <VueApexCharts
            height="300"
            :options="chart.chartOptions"
            :series="chartData.series"
          />
          <!-- tables -->
          <div class="mt-6 flex space-x-8">
            <div class="flex-1">
              <!-- header -->
              <div class="flex items-start justify-between border-b px-4 pb-5">
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
              <div class="divide-y px-4">
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

            <div class="flex w-2/4 flex-col">
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
                          class="flex items-center font-semibold text-red-500"
                        >
                          <ArrowSmallDownIcon class="h-4 w-4" />
                          <span>1.5%</span>
                        </div>
                        <span class="text-gray-400">vs Last Month</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="mb-4 h-1 rounded-full bg-gray-200 sm:w-20 lg:w-40"
                  >
                    <div
                      class="h-1 rounded-full bg-blue-600 dark:bg-green-500"
                      style="width: 40%"
                    ></div>
                  </div>
                  <div class="flex flex-col items-end">
                    <h4 class="text-xl font-semibold">137</h4>
                    <span class="text-xs text-gray-400">out of 300</span>
                  </div>
                </div>
                <div class="flex items-center justify-between py-3">
                  <div class="flex items-center space-x-5">
                    <DevicePhoneMobileIcon class="h-6 w-6" />
                    <div class="flex flex-col">
                      <h4 class="font-medium">Total Absentees</h4>
                      <div class="flex items-center space-x-1 text-xs">
                        <div
                          class="flex items-center font-semibold text-green-500"
                        >
                          <ArrowSmallUpIcon class="h-4 w-4" />
                          <span>2.5%</span>
                        </div>
                        <span class="text-gray-400">vs Last Month</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="mb-4 h-1 rounded-full bg-gray-200 sm:w-20 lg:w-40"
                  >
                    <div
                      class="h-1 rounded-full bg-blue-600 dark:bg-red-500"
                      style="width: 60%"
                    ></div>
                  </div>
                  <div class="flex flex-col items-end">
                    <h4 class="text-xl font-semibold">97</h4>
                    <span class="text-xs text-gray-400">out of 300 </span>
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
                    <span class="text-xs text-gray-400">out of 3 times</span>
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
                    <span class="text-xs text-gray-400"
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
} from '@heroicons/vue/24/outline'
import { reactive } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const pieData = reactive({
  series: [
    {
      name: 'Male',
      data: [44, 53],
    },
    {
      name: 'Female',
      data: [76, 67],
    },
  ],
})
const pie = reactive({
  chartOptions: {
    chart: {
      type: 'area',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '30%',
        endingShape: 'rounded',
      },
    },
    xaxis: {
      categories: ['Apr', 'May'],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
})
const chartData = reactive({
  series: [
    {
      name: 'Net Profit',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: 'Revenue',
      data: [76, 85, 101, 98, 87, 90, 91, 98, 94],
    },
  ],
})
const chart = reactive({
  chartOptions: {
    chart: {
      animations: {
        enabled: true,
      },
      type: 'bar',
      stacked: false,
      fontFamily: '"Inter", sans-serif',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    yaxis: {
      title: {
        text: '$ (thousands)',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return '$ ' + val + ' thousands'
        },
      },
    },
  },
})
</script>




<!-- <Table>
            <TableCaption>
              <div class="flex items-center justify-between space-x-5">
                <div>
                  <span>Monthly Service Statistics</span>
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
            <TableBody>
              <TableRow>
                <TableCell :col="2">
                  <!-- chart -->
                  <BarChart
                    :chart-data="statsData"
                    :series-categories="labels"
                    series-title="Demo Test"
                  ></BarChart>
                  <!-- end of chart -->
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="flex items-center space-x-3">
                  <DeviceTabletIcon
                    class="h-6 w-6 text-gray-400"
                  ></DeviceTabletIcon>
                  <div class="flex flex-col">
                    <span class="font-semibold">Monthly Attendance</span>
                    <div class="flex items-start space-x-1 text-sm">
                      <div
                        class="flex items-center font-semibold text-green-500"
                      >
                        <ArrowSmallUpIcon class="h-4 w-4" />
                        <span>2.5%</span>
                      </div>
                      <span class="text-gray-400"
                        >more than previous Month</span
                      >
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold">137 members</span>
                    <span class="text-sm text-gray-400">Expected 245</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="flex items-center space-x-3">
                  <DeviceTabletIcon
                    class="h-6 w-6 text-gray-400"
                  ></DeviceTabletIcon>
                  <div class="flex flex-col">
                    <span class="font-semibold">Monthly Absentees</span>
                    <div class="flex items-center space-x-1 text-sm">
                      <div class="flex items-start font-semibold text-red-500">
                        <ArrowSmallUpIcon class="h-4 w-4" />
                        <span>2.5%</span>
                      </div>
                      <span class="text-gray-400"
                        >less than previous month</span
                      >
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold">37 members</span>
                    <span class="text-sm text-gray-400">out of 245</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="flex items-center space-x-3">
                  <DeviceTabletIcon
                    class="h-6 w-6 text-gray-400"
                  ></DeviceTabletIcon>
                  <div class="flex flex-col">
                    <span class="font-semibold"
                      >Monthly Service Recurrence</span
                    >
                    <span class="text-sm text-gray-400"
                      >Number of times service occurred</span
                    >
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold">3 times</span>
                    <span class="text-sm text-gray-400">out of 3 times</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="flex items-center space-x-3">
                  <DeviceTabletIcon
                    class="h-6 w-6 text-gray-400"
                  ></DeviceTabletIcon>
                  <div class="flex flex-col">
                    <span class="font-semibold"
                      >Monthly Expected Attendance</span
                    >
                    <span class="text-sm text-gray-400"
                      >Each member should attended service 3 times</span
                    >
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold">245 counts</span>
                    <span class="text-sm text-gray-400"
                      >56 count per service</span
                    >
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table> -->



          <!-- history -->


          <Table>
            <TableCaption>
              <div class="flex items-center justify-between space-x-5">
                <div>
                  <span>Recent Services Attendance</span>
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
                <TableHead>Service</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell class="flex items-center space-x-3">
                  <CalendarDaysIcon
                    class="h-6 w-6 text-gray-400"
                  ></CalendarDaysIcon>
                  <div class="flex flex-col">
                    <span class="font-semibold">Midweek Service</span>
                    <span class="text-sm text-gray-400"
                      >c9ccf79d-3a70-4811-a070-3b6df63b4bf2</span
                    >
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex flex-col">
                    <span class="text-sm font-bold text-yellow-500"
                      >Cancelled</span
                    >
                    <span class="text-sm text-gray-500">Sun Apr 30 2023</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>