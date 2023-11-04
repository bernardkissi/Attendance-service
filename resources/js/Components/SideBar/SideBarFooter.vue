<script setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div class="absolute bottom-10 mb-2">
    <div class="flex items-center space-x-2 text-sm pb-4">
      <InformationCircleIcon class="h-6 w-6" />
      <span>Help & Getting Started</span>
    </div>

    <div class="border-b border-dashed border-gray-300 w-48"></div>
    <ul class="flex flex-col space-y-3 pt-5">
      <slot></slot>
    </ul>
  </div>
</template>
