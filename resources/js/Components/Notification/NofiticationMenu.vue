<script setup>
import { onMounted } from 'vue'
import { Dropdown } from 'flowbite'

onMounted(() => {
  const targetEl = document.getElementById(props.target)
  const triggerEl = document.getElementById(props.triggerEl)

  if (targetEl) {
    const dropdown = new Dropdown(targetEl, triggerEl)
    dropdown.hide()
  }
})
const props = defineProps({
  target: {
    type: String,
    required: true,
  },
  triggerEl: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div
    :id="target"
    class="z-20 hidden w-full max-w-sm divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-700 dark:bg-gray-800"
    aria-labelledby="dropdownNotificationButton"
  >
    <slot></slot>
  </div>
</template>
