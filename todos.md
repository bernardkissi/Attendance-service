-[x] change field in qrcode table to hold value from sevice table
-[] improve check to factor in if you consider for the meeting or a service.
-[] factor in visitors count
-[] member statistics for each service -[x] Add member
-[] General search
-[] login  
-[] api login
-[] notifications

members data structure

```json
    // members summary
    {
		"id": 3,
		"name": "Ms. Amalia Morissette",
		"identifier": "ad015f57-dd59-49b9-bea5-71c5490a5417",
		"service": "Adom Praise 2023",
		"total_attendance": 1,
		"service_occurence_count": 2,
		"absent_count": 1
	},
    // attendance summary
    {
		"year": 2023,
		"month": "July",
		"service": "Adom Praise 2023",
		"total_attendance": 3,
		"service_occurences_per_month": 2,
		"expected_attendees_per_each_service": 39,
		"expected_attendance_per_month": 78,
		"absentees_per_month": 75
	}
    // qrrcode summarz
    {
		"total_attendances": 3,
		"expected_attendees": 39,
		"total_absentees": 36,
		"qrcode_identifier": "cc2a87ad-0abc-4a50-8b0e-ecc4a4ca3ef5",
		"members": [
			{
				"name": "Ms. Amalia Morissette",
				"recorded_at": "2023-07-18 01:14:09",
				"member_id": "3",
				"member_identifier": "ad015f57-dd59-49b9-bea5-71c5490a5417",
				"device": "web"
			},
			{
				"name": "Miss Bernita Kshlerin I",
				"recorded_at": "2023-07-18 01:14:09",
				"member_id": "8",
				"member_identifier": "28126f98-ca69-455f-a4f2-288efd54eed5",
				"device": "web"
			},
			{
				"name": "Ashton Block",
				"recorded_at": "2023-07-19 00:29:34",
				"member_id": "7",
				"member_identifier": "6be838db-01bf-4d1c-bd29-6dd651d1abb0",
				"device": "web"
			}
		]
	},
    //service summary
    {
		"service_id": 5,
		"service_name": "Adom Praise 2023",
		"total_service_occurrences": 2,
		"month": "July"
	}
```


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

// demo api
import { serviceApi, attendanceApi, genderStatisticsApi } from '@/Utils/api'

// composables
import { useSeriesChartData } from '@/Composables/useSeriesChartData'
import { useSelectedService } from '@/Composables/useSelectedService'

// For Demo purposes
const startDate = new Date()
const endDate = new Date('2024-01-09T11:59:30')

// icon imports
import {
  ExclamationCircleIcon,
  XCircleIcon,
  CheckBadgeIcon,
  CalendarIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  CalendarDaysIcon,
  DeviceTabletIcon,
  ArrowSmallUpIcon,
  ClockIcon,
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
  <BaseLayout title="Dashboard">
    <template #sidenav>
      <!-- Live Service -->
      <LiveDetailCard
        name="Sunday Service"
        :start-date-time="startDate"
        :end-date-time="endDate"
        status="live"
        qrcode="images/qrcode.png"
        :start-immediately="true"
        :tick="1000"
      ></LiveDetailCard>
      <!-- End of Service -->

      <!-- card heading -->
      <div class="-pb-2 mt-8 flex items-center justify-between rounded">
        <div class="flex items-center space-x-2">
          <CalendarIcon class="h-5 w-5" />
          <span class="text-lg font-medium">Live Updates</span>
        </div>
        <span class="text-sm text-gray-500">View</span>
      </div>
      <!-- end of heading -->

      <!-- successful checkin card -->
      <StatsCard
        :icon="CheckBadgeIcon"
        title="Success Checkins"
        value="45 M"
        color="green"
      ></StatsCard>
      <!-- end card -->
      <!-- pending checkin card -->
      <StatsCard
        :icon="ExclamationCircleIcon"
        title="Pending Checkins"
        value="10 M"
        color="gray"
      ></StatsCard>
      <!-- end card -->
      <!-- failed checkin card -->
      <StatsCard
        :icon="XCircleIcon"
        title="Failed Checkins"
        value="10 M"
        color="rose"
      ></StatsCard>
      <!-- end card -->
      <div class="mt-8 flex items-center justify-between rounded pb-6">
        <div class="flex items-center space-x-2">
          <CalendarIcon class="h-5 w-5" />
          <span class="text-lg font-medium">Upcoming</span>
        </div>
        <span class="text-sm text-gray-500">View</span>
      </div>

      <!-- upcoming service card -->
      <NoticeCard
        title="Havlia Praise Service"
        name="starts in 9 mins"
        :icon="ClockIcon"
      ></NoticeCard>
      <!-- end of card -->
    </template>
    <template #content>
      <!-- Analytics Filters -->
      <div class="item-center flex justify-between px-5 py-1">
        <div>
          <h4 class="text-xl font-bold">Attendance Summary</h4>
          <span class="text-gray-500"
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
        </div>
        <!-- end of chart filters -->
      </div>
      <!-- end of filters -->

      <!-- chart -->
      <BarChart :chart-data="chartData" series-title="Demo Test"></BarChart>
      <!-- end of chart -->

      <div class="flex items-start justify-between space-x-8">
        <!-- Service stats table -->
        <div class="w-2/4 py-3">
          <Table>
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
          </Table>
        </div>
        <!-- end of service stats table -->

        <!-- service history tables -->
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
                  <span class="text-sm font-bold text-yellow-500"
                    >Cancelled</span
                  >
                  <span class="text-sm text-gray-500">Sun Apr 30 2023</span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <!-- end of service history -->
      </div>
    </template>
  </BaseLayout>
</template>
