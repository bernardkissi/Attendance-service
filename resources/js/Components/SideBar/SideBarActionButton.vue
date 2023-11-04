<script setup>
defineProps({
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
  <button
    class="flex w-48 items-center space-x-2 rounded border border-dashed border-gray-400 bg-white px-2 py-3 hover:border-gray-600"
  >
    <component :is="icon" class="h-6 w-6 text-gray-400" />
    <span>{{ name }}</span>
  </button>
</template>
