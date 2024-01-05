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
const endDate = new Date('2024-01-05T11:59:30')

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
      <section class="flex space-x-8 px-8">
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
        <div class="relative flex-1 flex-col space-y-8 pt-8">
          <div class="item-center flex justify-between px-5 py-1">
            <h4 class="px-5 text-2xl font-bold"></h4>
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
