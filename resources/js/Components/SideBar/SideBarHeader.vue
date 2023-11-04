<script setup>
// imports
import { BuildingOffice2Icon, PlusIcon } from '@heroicons/vue/24/outline'

defineProps({
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <div
    class="flex items-center justify-between border-b border-dashed border-gray-300 pb-4"
  >
    <div class="flex items-center space-x-2">
      <BuildingOffice2Icon class="h-8 w-8 text-blue-500" />
      <h4 class="text-xl font-semibold">{{ name }}</h4>
    </div>
    <PlusIcon class="mt-1 h-4 w-4 text-gray-500" />
  </div>
</template>
