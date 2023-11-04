<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    class="block rounded-t-lg bg-slate-50 px-4 py-2 text-center font-medium text-gray-700 dark:bg-gray-800 dark:text-white"
  >
    {{ title }}
  </div>
</template>
