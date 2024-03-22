<script setup>
import { ref, computed, onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

import BaseLayout from '@/Layouts/BaseLayout.vue'
import StatsCard from '@/Components/Cards/StatsCard.vue'
import NoticeCard from '@/Components/Cards/NoticeCard.vue'
import LiveDetailCard from '@/Components/Cards/LiveDetailCard.vue'

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
// import TableFooter from '@/Components/Tables/TableFooter.vue'

import { churchServicesAPI } from '@/Utils/api'

// composables
import { useSelectCheckBoxes } from '@/Composables/useSelectCheckBoxes'

// icon imports
import {
  ExclamationCircleIcon,
  PlusIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  CheckBadgeIcon,
  EllipsisHorizontalIcon,
  TrashIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  CalendarIcon,
  PencilSquareIcon,
  EyeIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

// For Demo purposes
const startDate = new Date()
const endDate = new Date('2024-02-28T11:59:30')

const data = ref(churchServicesAPI)
const selectedServices = ref([])
const service_type = ref('time_bound')

// computed properties
const disableOptions = computed(() => {
  return selectedServices.value.length === 0 ? true : false
})

const toggle = () => {
  const { toggleAllCheckBoxes, selectedCheckedBoxes } =
    useSelectCheckBoxes(data)
  toggleAllCheckBoxes()
  selectedServices.value = selectedCheckedBoxes.value
}

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <BaseLayout title="Services">
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
      <!-- successful checkin card -->
      <StatsCard
        :icon="CheckBadgeIcon"
        title="Active Services"
        value="2"
        color="green"
      ></StatsCard>
      <!-- end card -->
      <!-- pending checkin card -->
      <StatsCard
        :icon="ExclamationCircleIcon"
        title="Ended Services"
        value="3"
        color="pink"
      ></StatsCard
      ><StatsCard
        :icon="ExclamationCircleIcon"
        title="Upcoming Services"
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
      <div class="flex items-end justify-end space-x-3">
        <div class="relative flex space-x-2">
          <input
            type="text"
            placeholder="Search service eg. Midweek"
            class="relative w-64 rounded-md border border-gray-200 px-8 py-[0.9rem] text-sm placeholder-gray-400"
          />
          <MagnifyingGlassIcon
            class="absolute inset-x-0 top-0 mt-4 h-5 w-5 text-gray-400"
          ></MagnifyingGlassIcon>
        </div>
        <button
          id="actionDropdown"
          :disabled="disableOptions"
          :class="{ 'border-gray-100 bg-gray-100': disableOptions }"
          class="flex items-center space-x-3 rounded-md border border-gray-200 px-4 py-3"
        >
          <span class="flex items-center space-x-1">
            <span>Actions</span>
            <span
              v-if="!disableOptions"
              class="rounded-full bg-gray-800 px-2 py-1 text-xs text-white"
              >{{ selectedServices.length }}</span
            >
          </span>
          <ChevronDownIcon class="h-4 w-4"></ChevronDownIcon>
        </button>
        <!-- dropdown trigger for the actions -->
        <DropdownMenu target="action" trigger-el="actionDropdown">
          <DropdownMenuList>
            <template #header>
              <div
                class="bg-gray-50 px-4 py-3 text-sm text-gray-900 dark:text-white"
              >
                <div class="truncate font-medium">Actions</div>
              </div>
            </template>
            <DropdownMenuItem
              :icon="PauseCircleIcon"
              name="Pause"
              link="/account"
            ></DropdownMenuItem>
            <DropdownMenuItem
              :icon="PlayCircleIcon"
              name="Activate"
              link="/settings"
            ></DropdownMenuItem>
            <DropdownMenuItem
              :icon="TrashIcon"
              name="Delete"
              link="/settings"
            ></DropdownMenuItem>
          </DropdownMenuList>
        </DropdownMenu>
        <!-- end of trigger -->

        <!-- Offcanvas Start -->
        <button
          id="staticFilter"
          type="button"
          class="flex items-center space-x-3 rounded-md bg-gray-800 px-4 py-3 text-white"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          <PlusIcon class="h-4 w-4 text-white"></PlusIcon>
          <span>Create Service</span>
        </button>

        <div
          id="drawer-right-example"
          class="fixed right-0 top-0 z-40 h-screen w-[35%] translate-x-full overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
          tabindex="-1"
          aria-labelledby="drawer-right-label"
        >
          <div class="border-b border-dashed">
            <h5
              id="drawer-right-label"
              class="mb-4 inline-flex items-center text-lg font-semibold text-gray-700 dark:text-gray-400"
            >
              <div class="flex items-center">
                <span>Create Service</span>
              </div>
            </h5>
            <button
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              class="absolute end-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <XMarkIcon class="h-4 w-4 text-gray-950" />
              <span class="sr-only">Close menu</span>
            </button>
          </div>

          <div class="mt-4 flex flex-col gap-10">
            <div class="flex flex-col gap-4">
              <div class="flex items-end gap-3">
                <div class="flex w-2/3 flex-col gap-2">
                  <label for="name" class="text-sm"> Name </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Koinonia service"
                    class="relative w-full rounded-md border border-gray-200 px-8 py-[0.9rem] text-sm placeholder-gray-400"
                  />
                </div>
                <div class="flex w-1/3 flex-col gap-2">
                  <label for="service_type">Service Type</label>
                  <select
                    name="service_type"
                    id="service_type"
                    v-model="service_type"
                    class="rounded-md border border-gray-200 px-8 py-[0.9rem] text-sm text-gray-400"
                  >
                    <option value="time_bound">Time bound</option>
                    <option value="recurring">Recurring</option>
                    <option value="one_time">One Time</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-col items-start gap-2">
                <label for="description" class="text-sm"> Description </label>
                <textarea
                  id="description"
                  type="text"
                  placeholder="Koinonia service which is held every sunday evening"
                  class="relative w-full rounded-md border border-gray-200 px-8 py-[0.9rem] text-sm placeholder-gray-400"
                />
              </div>
            </div>

            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-3">
                <div
                  v-if="service_type != 'recurring'"
                  class="flex w-full flex-col gap-2"
                >
                  <label for="start_date" class="text-sm"> Start date </label>
                  <input
                    id="start_date"
                    type="date"
                    class="relative w-full rounded-md border border-gray-200 px-8 py-[0.9rem] text-sm placeholder-gray-400"
                  />
                </div>
                <div v-else class="flex w-full flex-col gap-2">
                  <label for="day" class="text-sm"> Day </label>
                  <select
                    name="day"
                    id="day"
                    class="w-[50%] rounded-md border border-gray-200 px-8 py-[0.9rem] text-sm text-gray-400"
                  >
                    <option value="sunday">Sunday</option>
                    <option value="monday">Monday</option>
                    <option value="tuesday">Tuesday</option>
                    <option value="wednesday">Wednesday</option>
                    <option value="thursday">Thursday</option>
                    <option value="friday">Friday</option>
                    <option value="saturday">Saturday</option>
                  </select>
                </div>

                <div
                  v-if="service_type != 'recurring'"
                  class="flex w-full flex-col gap-2"
                >
                  <label for="end_date" class="text-sm"> End date </label>
                  <input
                    id="end_date"
                    type="date"
                    class="relative w-full rounded-md border border-gray-200 px-8 py-[0.9rem] text-sm placeholder-gray-400"
                  />
                </div>
                <div v-else></div>
              </div>
              <div class="flex items-center gap-3">
                <div class="flex w-full flex-col gap-2">
                  <label for="start_time" class="text-sm"> Start time </label>
                  <input
                    id="start_time"
                    type="time"
                    class="relative w-full rounded-md border border-gray-200 px-8 py-[0.9rem] text-sm placeholder-gray-400"
                  />
                </div>
                <div class="flex w-full flex-col gap-2">
                  <label for="end_time" class="text-sm"> End time </label>
                  <input
                    id="end_time"
                    type="time"
                    class="relative w-full rounded-md border border-gray-200 px-8 py-[0.9rem] text-sm placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="absolute bottom-4 end-2.5 flex w-full gap-4 pl-5">
            <button
              type="button"
              data-drawer-hide="drawer-right-example"
              aria-controls="drawer-right-example"
              class="flex w-full items-center justify-center rounded-md border border-gray-200 bg-gray-100 px-4 py-3 text-green-950"
            >
              Cancel
            </button>
            <button
              class="flex w-full items-center justify-center rounded-md border border-gray-200 bg-green-300 px-4 py-3 text-green-950"
            >
              Save
            </button>
          </div>
        </div>
        <!-- Offcanvas End -->
      </div>
      <!-- Services Table -->
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
            <TableCell cell-type="checkbox" @change="toggle"></TableCell>
            <TableHead>Service Name</TableHead>
            <TableHead>Recurring On</TableHead>
            <TableHead>Commence On</TableHead>
            <TableHead>Ends On</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <!-- Actual table content -->
          <TableRow
            v-for="service in churchServicesAPI"
            :key="service.id"
            :class="{}"
          >
            <TableCell
              v-model="selectedServices"
              cell-type="checkbox"
              :value-data="service.id"
            ></TableCell>
            <TableCell>
              <span class="font-semibold">{{ service.name }}</span>
              <p class="text-sm text-gray-400">{{ service.type }}</p>
            </TableCell>
            <TableCell>{{ service.recurring_day ?? '--' }}</TableCell>
            <TableCell>
              <span>{{ service.startDate ?? '--' }}</span>
              <p class="text-sm text-gray-400">{{ service.startTime }}</p>
            </TableCell>
            <TableCell>
              <span>{{ service.endDate ?? '--' }}</span>
              <p class="text-sm text-gray-400">{{ service.endTime }}</p>
            </TableCell>
            <TableCell
              :class="{
                'text-green-500': service.status == 'Active',
                'text-yellow-500': service.status == 'Paused',
                'text-red-500': service.status == 'Ended',
              }"
              class="text-xs font-bold"
              ><span
                :class="{
                  'bg-green-50': service.status == 'Active',
                  'bg-yellow-50': service.status == 'Paused',
                  'bg-red-50': service.status == 'Ended',
                }"
                class="rounded-md bg-gray-50 px-2 py-1"
                >{{ service.status }}</span
              ></TableCell
            >
            <TableCell>
              <button
                :id="'editServiceDropdown' + service.id"
                type="button"
                class="border-none p-1 hover:rounded-full hover:bg-gray-100 active:bg-slate-200"
              >
                <EllipsisHorizontalIcon
                  class="h-6 w-6"
                ></EllipsisHorizontalIcon>
                <!-- dropdown trigger for the actions -->
                <DropdownMenu
                  :target="'edit' + service.id"
                  :trigger-el="'editServiceDropdown' + service.id"
                >
                  <DropdownMenuList>
                    <!-- <template #header>
                      <div
                        class="bg-gray-50 px-4 py-3 text-sm text-gray-900 dark:text-white"
                      >
                        <div class="truncate font-medium">Actions</div>
                      </div>
                    </template> -->
                    <DropdownMenuItem
                      :icon="EyeIcon"
                      name="View"
                      link="/services/detail"
                    ></DropdownMenuItem>
                    <DropdownMenuItem
                      :icon="PencilSquareIcon"
                      name="Edit"
                      link="/services/detail"
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

      <!-- end of services table -->
    </template>
  </BaseLayout>
</template>
