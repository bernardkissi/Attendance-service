<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  selectedTab: {
    type: String,
    default: '',
  },
})
defineEmits(['setActive'])
</script>

<template>
  <li class="px-1" role="presentation">
    <button
      type="button"
      role="tab"
      class="inline-block rounded-t-lg border-b-2 p-4 text-base capitalize transition duration-150 ease-in-out hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
      :class="{
        'border-blue-600 font-semibold text-blue-600 ': selectedTab == name,
        'border-transparent': selectedTab != name,
      }"
      @click="$emit('setActive', name)"
    >
      {{ name }}
    </button>
  </li>
</template>
