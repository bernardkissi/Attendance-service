<script setup>
defineProps({
  headType: {
    type: String,
    default: 'value',
  },
})
</script>

<template>
  <th
    v-if="headType === 'value'"
    class="text-medium whitespace-nowrap px-4 py-3 font-bold text-gray-900"
  >
    <slot />
  </th>

  <th v-else class="sticky inset-y-0 start-0 px-4 py-3">
    <label for="SelectAll" class="sr-only">Select All</label>

    <input
      id="SelectAll"
      type="checkbox"
      class="h-5 w-5 rounded border-gray-300"
    />
    <!-- <slot /> -->
  </th>
</template>
