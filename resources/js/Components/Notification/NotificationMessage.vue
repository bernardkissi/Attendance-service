<script setup>
import { EnvelopeIcon } from '@heroicons/vue/24/outline'

defineProps({
  time: {
    type: String,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <a href="#" class="flex px-4 py-3 hover:bg-neutral-50 dark:hover:bg-gray-700">
    <div class="flex-shrink-0">
      <EnvelopeIcon class="h-8 w-8"></EnvelopeIcon>
    </div>
    <div class="w-full pl-3">
      <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
        <span class="font-semibold text-gray-900 dark:text-white">
          New message from {{ sender }}
        </span>
        <div>{{ message }}</div>
      </div>
      <div class="text-xs text-blue-600 dark:text-blue-500">
        {{ time }}
      </div>
    </div>
  </a>
</template>
