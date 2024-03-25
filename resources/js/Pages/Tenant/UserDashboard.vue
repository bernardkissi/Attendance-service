<script setup>
// library imports
import { ref, onMounted } from 'vue'

// component imports
import BaseLayout from '@/Layouts/BaseLayout.vue'
import LiveDetailCard from '@/Components/Cards/LiveDetailCard.vue'
import StatsCard from '@/Components/Cards/StatsCard.vue'
import NoticeCard from '@/Components/Cards/NoticeCard.vue'
import BarChart from '@/Components/Charts/BarChart.vue'

import SearchFilterDropdown from '@/Components/SearchDropdown/SearchFilterDropdown.vue'
import TextFilters from '@/Components/DropdownFilters/TextFilters.vue'
import DateFilters from '@/Components/DropdownFilters/DateFilters.vue'
import StaticFilters from '@/Components/DropdownFilters/StaticFilters.vue'

//Table component
import Table from '@/Components/Tables/BaseTable.vue'
import TableHeader from '@/Components/Tables/TableHeader.vue'
import TableHead from '@/Components/Tables/TableHead.vue'
import TableCaption from '@/Components/Tables/TableCaption.vue'
import TableRow from '@/Components/Tables/TableRow.vue'
import TableBody from '@/Components/Tables/TableBody.vue'
import TableCell from '@/Components/Tables/TableCell.vue'

import DropdownMenu from '@/Components/DropdownMenu/DropdownMenu.vue'
import DropdownMenuList from '@/Components/DropdownMenu/DropdownMenuList.vue'
import DropdownMenuItem from '@/Components/DropdownMenu/DropdownMenuItem.vue'

// demo api
import { serviceApi, attendanceApi, genderStatisticsApi } from '@/Utils/api'

// composables
import { useSeriesChartData } from '@/Composables/useSeriesChartData'
import { useSelectedService } from '@/Composables/useSelectedService'

// For Demo purposes
const startDate = new Date()
const endDate = new Date('2024-02-28T11:59:30')

// icon imports
import {
  ExclamationCircleIcon,
  XCircleIcon,
  CheckBadgeIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  CalendarDaysIcon,
  ArrowSmallUpIcon,
  ClockIcon,
  ChartBarIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/vue/24/outline'

import { useElementVisibility } from '@vueuse/core'

const chartData = ref([])
const statsData = ref([])
const labels = ref([])

const filter = ref(null)
const targetIsVisible = useElementVisibility(filter)

const dateFilterDropdown = ref(null)
const dateFilterDropdownVisible = useElementVisibility(dateFilterDropdown)

const closeButton = ref(false)

const data = ref(attendanceApi)
const stats = ref(genderStatisticsApi)

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
  <BaseLayout title="Dashboard">
    <template #sidenav>
      <!-- Live Service -->
      <LiveDetailCard
        name="Sunday Service"
        :start-date-time="startDate"
        :end-date-time="endDate"
        status="Live"
        qrcode="images/qrcode.png"
        :start-immediately="true"
        :tick="1000"
      ></LiveDetailCard>
      <!-- End of Service -->

      <!-- card heading -->
      <div class="-pb-2 mt-8 flex items-center justify-between rounded">
        <div class="flex items-center space-x-2">
          <CalendarDaysIcon class="h-5 w-5" />
          <span class="text-base font-bold">Live Updates</span>
        </div>
        <a href="" class="text-sm text-blue-500">view</a>
      </div>
      <!-- end of heading -->

      <!-- successful checkin card -->
      <StatsCard
        :icon="CheckBadgeIcon"
        title="Checked In"
        value="45"
        color="green"
      ></StatsCard>
      <!-- end card -->
      <!-- pending checkin card -->
      <StatsCard
        :icon="ExclamationCircleIcon"
        title="Not Checked In"
        value="10"
        color="gray"
      ></StatsCard>
      <!-- end card -->
      <!-- failed checkin card -->
      <StatsCard
        :icon="XCircleIcon"
        title="CheckIn Failed"
        value="10"
        color="pink"
      ></StatsCard>
      <!-- end card -->
      <div class="mt-8 flex items-center justify-between rounded pb-6">
        <div class="flex items-center space-x-2">
          <CalendarDaysIcon class="h-5 w-5" />
          <span class="text-base font-bold">Upcoming</span>
        </div>
        <a href="" class="text-sm text-blue-500">view</a>
      </div>

      <!-- upcoming service card -->
      <NoticeCard
        title="Havlia Praise"
        name="starts in 9 mins"
        :icon="ClockIcon"
      ></NoticeCard>
      <!-- end of card -->
    </template>
    <template #content>
      <!-- Analytics Filters -->
      <div class="flex items-center justify-between px-5 py-1">
        <div>
          <h4 class="text-xl font-bold">Attendance Summary</h4>
          <span class="text-sm text-gray-500"
            >Entire year's attendance analysis for a service</span
          >
        </div>
        <!-- chart filters -->
        <div class="flex items-center space-x-5">
          <div class="flex items-start space-x-3">
            <button
              id="staticFilter"
              type="button"
              class="relative rounded-md border border-gray-300 px-4 py-3"
            >
              <AdjustmentsHorizontalIcon class="h-5 w-5" />
              <span
                class="absolute right-0 top-0 -mr-1 -mt-2 h-auto w-auto rounded-full bg-pink-500 px-2 py-1 text-[0.6rem] text-white"
                >3</span
              >
            </button>
            <SearchFilterDropdown
              size="w-64"
              target="static"
              trigger-el="staticFilter"
            >
              <StaticFilters></StaticFilters>
            </SearchFilterDropdown>
            <button
              id="filterDate"
              type="button"
              class="flex items-center space-x-2 rounded-md border border-gray-300 bg-white px-3 py-3 text-sm font-medium text-gray-500 shadow-sm"
            >
              <CalendarDaysIcon class="h-4 w-4"></CalendarDaysIcon>
              <span class="text-sm">Dec 7, 2021 - Dec 2, 2021</span>
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
              <span class="text-sm">{{
                selectedService ?? 'Select Service'
              }}</span>
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
        </div>
        <!-- end of chart filters -->
      </div>
      <!-- end of filters -->

      <!-- chart -->
      <BarChart :chart-data="chartData" series-title="Demo Test"></BarChart>
      <!-- end of chart -->

      <!--Tables Sections -->
      <div class="flex items-start justify-between space-x-5">
        <!-- table-analytics -->
        <div class="w-1/2">
          <Table>
            <TableCaption>
              <div class="flex items-center justify-between space-x-5">
                <div>
                  <span>Monthly Service Statistics</span>
                  <p class="text-sm font-normal text-gray-500">
                    Service statistics for the current month.
                  </p>
                </div>

                <div>
                  <EllipsisHorizontalIcon
                    class="h-8 w-8 rounded-md border border-gray-100 px-1 py-1 hover:bg-gray-50 hover:text-gray-400"
                  ></EllipsisHorizontalIcon>
                </div>
              </div>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead class="flex items-center space-x-1">
                  <span>Metrics: </span>
                  <span
                    class="rounded-lg bg-amber-50 px-2 py-1 text-xs font-bold text-amber-500"
                  >
                    Sunday Service</span
                  >
                </TableHead>
                <TableHead>Values</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <!-- <TableRow>
                <TableCell :col="2"> -->
              <!-- chart -->
              <!-- <BarChart
                    :chart-data="statsData"
                    :series-categories="labels"
                    series-title="Demo Test"
                  ></BarChart> -->
              <!-- end of chart -->
              <!-- </TableCell>
              </TableRow> -->
              <TableRow>
                <TableCell class="flex items-center space-x-3">
                  <ChartBarIcon class="h-6 w-6 text-gray-400"></ChartBarIcon>
                  <div class="flex flex-col">
                    <span class="font-semibold">Monthly Attendance</span>
                    <div class="flex items-center space-x-1 text-xs">
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
                    <span class="text-xs text-gray-400">out of 245</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="flex items-center space-x-3">
                  <ChartBarIcon class="h-6 w-6 text-gray-400"></ChartBarIcon>
                  <div class="flex flex-col">
                    <span class="font-semibold">Monthly Absentees</span>
                    <div class="flex items-center space-x-1 text-xs">
                      <div
                        class="flex items-start font-semibold text-green-500"
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
                    <span class="text-xs text-gray-400">out of 245</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="flex items-center space-x-3">
                  <ChartBarIcon class="h-6 w-6 text-gray-400"></ChartBarIcon>
                  <div class="flex flex-col">
                    <span class="font-semibold"
                      >Monthly Service Recurrence</span
                    >
                    <span class="text-xs text-gray-400"
                      >Number of times service occurred</span
                    >
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold">3 times</span>
                    <span class="text-xs text-gray-400">out of 3 times</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="flex items-center space-x-3">
                  <ChartBarIcon class="h-6 w-6 text-gray-400"></ChartBarIcon>
                  <div class="flex flex-col">
                    <span class="font-semibold"
                      >Monthly Expected Attendance</span
                    >
                    <span class="text-xs text-gray-400"
                      >Recurring attendance count 3</span
                    >
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold">245 counts</span>
                    <span class="text-xs text-gray-400"
                      >56 count per service</span
                    >
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <!-- table-history-->
        <div class="w-1/2">
          <Table>
            <TableCaption>
              <div class="flex items-center justify-between space-x-5">
                <div>
                  <span>Recent Services Attendance</span>
                  <p class="text-sm font-normal text-gray-500">
                    History of the recent services.
                  </p>
                </div>

                <div>
                  <button
                    id="tableDropdown"
                    type="button"
                    class="text-lg hover:text-gray-400"
                  >
                    <EllipsisHorizontalIcon
                      class="h-8 w-8 rounded-md border border-gray-100 px-1 py-1 hover:bg-gray-50 hover:text-gray-400"
                    ></EllipsisHorizontalIcon>
                  </button>
                  <DropdownMenu target="tableStats" trigger-el="tableDropdown">
                    <DropdownMenuList>
                      <template #header>
                        <div
                          class="bg-gray-50 px-4 py-3 text-sm text-gray-900 dark:text-white"
                        >
                          <div class="truncate font-medium">
                            Sort Services By
                          </div>
                        </div>
                      </template>
                      <DropdownMenuItem
                        name="Latest"
                        link="/account"
                      ></DropdownMenuItem>
                      <DropdownMenuItem
                        name="Oldest"
                        link="/settings"
                      ></DropdownMenuItem>
                      <DropdownMenuItem
                        name="Active"
                        link="/settings"
                      ></DropdownMenuItem>
                    </DropdownMenuList>
                  </DropdownMenu>
                </div>
              </div>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Services</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell class="flex items-center space-x-3">
                  <CalendarDaysIcon
                    class="h-6 w-6 text-gray-400"
                  ></CalendarDaysIcon>
                  <div class="flex flex-col">
                    <span class="font-semibold">Koninonia Service</span>
                    <div class="text-sws flex items-center space-x-1">
                      <span class="text-gray-400"
                        >c9ccf79d-3a70-4811-a070-3b6df63b4bf2</span
                      >
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold text-green-500"
                      >Running</span
                    >
                    <span class="text-xs text-gray-400">12.04.2024</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell class="flex items-center space-x-3">
                  <CalendarDaysIcon
                    class="h-6 w-6 text-gray-400"
                  ></CalendarDaysIcon>
                  <div class="flex flex-col">
                    <span class="font-semibold">Havila Praise Week</span>
                    <div class="flex items-center space-x-1 text-xs">
                      <span class="text-gray-400"
                        >c9ccf79d-3a70-4811-a070-3b6df63b4bf2</span
                      >
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold text-red-500"
                      >Ended</span
                    >
                    <span class="text-xs text-gray-400">11.04.2024</span>
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
                    <div class="flex items-center space-x-1 text-xs">
                      <span class="text-gray-400"
                        >c9ccf79d-3a70-4811-a070-3b6df63b4bf2</span
                      >
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold text-red-500"
                      >Ended</span
                    >
                    <span class="text-xs text-gray-400">09.01.2024</span>
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
                    <div class="flex items-center space-x-1 text-xs">
                      <span class="text-gray-400"
                        >c9ccf79d-3a70-4811-a070-3b6df63b4bf2</span
                      >
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div class="flex flex-col">
                    <span class="text-sm font-semibold text-red-500"
                      >Ended</span
                    >
                    <span class="text-xs text-gray-400">09.01.2024</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <!-- end of service history -->
      </div>
      <!-- end of tables section -->
    </template>
  </BaseLayout>
</template>
