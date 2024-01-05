<script setup>
import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

import { useSelectedService } from '@/Composables/useSelectedService'
const { setService } = useSelectedService()

const emit = defineEmits(['closeFilter'])

const service = ref(null)

const selectService = (value) => {
  setService(value)
  emit('closeFilter')
}

defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div>
    <div class="p-3">
      <label for="input-group-search" class="sr-only">Search </label>
      <div class="relative">
        <div
          class="rtl:inset-r-0 pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
        >
          <MagnifyingGlassIcon class="h-5 w-5"></MagnifyingGlassIcon>
        </div>
        <input
          id="input-group-search"
          v-model="service"
          type="text"
          class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search user"
        />
      </div>
    </div>
    <ul
      class="h-48 divide-y divide-gray-100 overflow-y-auto px-3 pb-3 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownSearchButton"
    >
      <li v-for="item in data" :key="item.id">
        <div
          class="flex items-center rounded ps-2 hover:bg-gray-100 dark:hover:bg-gray-600"
          @click="selectService(item.name)"
        >
          <label
            for="checkbox-item-11"
            class="ms-2 w-full rounded py-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >{{ item.name }}</label
          >
        </div>
      </li>
    </ul>
  </div>
</template>
