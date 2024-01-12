<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: Function,
    required: true,
  },
  color: {
    type: String,
    default: () => 'gray',
  },
  title: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  hasTrends: {
    type: Boolean,
    default: false,
  },
  trend: {
    type: Object,
    default: () => {},
  },
})

const theme = computed(() => `text-${props.color}-500`)
const themeBackground = computed(() => `bg-${props.color}-50`)
</script>
<template>
  {{ theme }} {{ themeBackground }}
  <div
    class="mt-8 flex items-center justify-between rounded-md border px-6 py-4 shadow-sm"
  >
    <div class="flex flex-col items-start">
      <div class="flex items-baseline space-x-5">
        <p class="pb-1 text-sm font-semibold text-gray-600">
          {{ props.title }}
        </p>
      </div>
      <h4 class="text-4xl font-bold" :class="theme">{{ props.value }}</h4>
      <p v-if="props.hasTrends" class="flex space-x-1 pt-2 text-xs">
        <component
          :is="props.trend.icon"
          class="h-4 w-4 text-green-600"
        ></component>
        <span class="text-green-600">{{ props.trend.value }}</span>
        <span class="text-gray-500">{{ props.trend.text }} </span>
      </p>
    </div>

    <component
      :is="props.icon"
      class="h-10 w-10 rounded-full px-2 py-2"
      :class="[themeBackground, theme]"
    />
  </div>
</template>
