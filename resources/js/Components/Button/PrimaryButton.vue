<script setup>
defineProps({
  selector: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <button
    :id="selector"
    class="flex items-center space-x-3 rounded-md border border-gray-200 px-4 py-3"
  >
    <slot />
  </button>
</template>
