<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: Function,
    required: true,
  },
})
</script>
<template>
  <div
    class="flex items-center justify-between space-x-2 rounded-md border px-4 py-4 shadow-sm"
  >
    <div class="flex flex-col items-start">
      <div class="flex items-baseline space-x-5">
        <p class="pb-1 text-sm font-bold text-gray-800">
          {{ props.title }}
        </p>
        <!-- <span class="text-xs text-gray-400">from 500</span> -->
      </div>
      <h4 class="inline-flex flex-wrap text-sm text-gray-400">
        {{ props.name }}
      </h4>
    </div>

    <component
      :is="icon"
      class="h-10 w-10 rounded-full bg-gray-50 px-2 py-2 text-gray-500"
    />
  </div>
</template>
