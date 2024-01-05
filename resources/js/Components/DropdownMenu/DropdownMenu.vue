<script setup>
import { onMounted } from 'vue'
import { Dropdown } from 'flowbite'

onMounted(() => {
  const targetEl = document.getElementById(props.target)
  const triggerEl = document.getElementById(props.triggerEl)

  const options = {
    placement: 'bottom',
    offsetSkidding: -80,
    offsetDistance: 20,
  }

  if (targetEl) {
    const dropdown = new Dropdown(targetEl, triggerEl, options)
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
    :id="props.target"
    class="z-20 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
  >
    <slot></slot>
  </div>
</template>
