<script setup>
import { ref, computed } from 'vue'

import BaseLayout from '@/Layouts/BaseLayout.vue'
import StatsCard from '@/Components/Cards/StatsCard.vue'
// import LiveDetailCard from '@/Components/Cards/LiveDetailCard.vue'

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
} from '@heroicons/vue/24/outline'

const data = ref(churchServicesAPI)
const selectedServices = ref([])

// computed properties
const disableOptions = computed(() => {
  return selectedServices.value.length === 0 ? true : false
})

const toggle = () => {
  const { toggleAllCheckBoxes, selectedCheckedBoxes } =
    useSelectCheckBoxes(data)
  toggleAllCheckBoxes()
  console.log(selectedCheckedBoxes.value)
  selectedServices.value = selectedCheckedBoxes.value
}
</script>

<template>
  <BaseLayout title="Services">
    <template #sidenav>
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
        <button
          id="staticFilter"
          type="button"
          class="flex items-center space-x-3 rounded-md bg-gray-800 px-4 py-3 text-white"
        >
          <PlusIcon class="h-4 w-4 text-white"></PlusIcon>
          <span>Create Service</span>
        </button>
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
            <TableCell cell-type="checkbox" @click="toggle"></TableCell>
            <TableHead>Service Name</TableHead>
            <TableHead>Recurring On</TableHead>
            <TableHead>Commence On</TableHead>
            <TableHead>Ends On</TableHead>
            <TableHead>Status</TableHead>
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
              <EllipsisHorizontalIcon class="h-6 w-6"></EllipsisHorizontalIcon>
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
