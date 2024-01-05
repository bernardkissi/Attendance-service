<script setup>
import { ref } from 'vue'
import Datepicker from 'vue3-datepicker'
import { CalendarIcon } from '@heroicons/vue/24/outline'

const startDate = ref(new Date())
const endDate = ref(new Date())
</script>

<template>
  <div>
    <div class="p-3">
      <div class="flex flex-col items-center space-y-2">
        <!-- start date input form -->
        <div class="relative">
          <div
            class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
          ></div>
          <span class="text-xs font-semibold">Start Date</span>
          <Datepicker
            v-model="startDate"
            class="relative rounded-md border border-gray-300 bg-gray-50 px-4 ps-10 text-sm"
          />
          <CalendarIcon class="absolute mx-4 -mt-[27px] h-4 w-4"></CalendarIcon>
        </div>

        <!-- end date input form -->
        <div class="relative">
          <div
            class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
          ></div>
          <span class="text-xs font-semibold">End Date</span>
          <Datepicker
            v-model="endDate"
            class="relative rounded-md border border-gray-300 bg-gray-50 px-4 ps-10 text-sm"
          />
          <CalendarIcon class="absolute mx-4 -mt-[27px] h-4 w-4"></CalendarIcon>
        </div>
      </div>

      <!-- apply button -->
      <div class="flex items-center justify-end">
        <button
          class="mx-2 my-2 rounded bg-red-400 px-2 py-1 text-xs text-white"
        >
          Clear
        </button>
        <button
          class="my-2 mr-2 rounded bg-gray-600 px-2 py-1 text-xs text-white"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>
