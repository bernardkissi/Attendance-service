<script setup>
import { computed } from 'vue'

const color = computed(() => (props.status === 'active' ? 'green' : 'red'))

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  icon: {
    type: Function,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="mt-8 flex items-center justify-between rounded-md border px-6 py-4 shadow-sm"
  >
    <div class="flex flex-col items-start">
      <div class="flex items-baseline space-x-5">
        <p :class="`text-${color}-600`" class="pb-1 text-sm font-semibold">
          {{ title }}
        </p>
      </div>
      <h4 class="text-4xl font-bold">{{ value }}</h4>
      <div class="mt-2 flex space-x-1 rounded-md text-xs">
        <span class="text-gray-500">{{ name }} {{ color }}</span>
      </div>
    </div>

    <component
      :is="icon"
      :class="`bg-${color}-50 text-${color}-500`"
      class="h-10 w-10 animate-pulse rounded-full bg-green-50 px-2 py-2"
    />
  </div>
</template>
