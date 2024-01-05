<script setup>
defineProps({
  cellType: {
    type: String,
    default: 'value',
  },
  col: {
    type: Number,
    default: () => 1,
  },
})
</script>

<template>
  <td
    v-if="cellType === 'value'"
    :colspan="col"
    class="whitespace-nowrap px-4 py-4 text-gray-900"
  >
    <slot />
  </td>
  <td v-else class="whitespace-nowrap px-4 py-4 text-gray-900">
    <label for="SelectAll" class="sr-only">Select All</label>

    <input
      id="SelectAll"
      type="checkbox"
      class="h-5 w-5 rounded border-gray-300"
    />
    <slot />
    <!-- <slot /> -->
  </td>
</template>
