<script setup>
import { onMounted, ref, watch, computed } from 'vue'
import { Dropdown } from 'flowbite'

const demo = ref(null)
const closeFilter = computed(() => props.close)

onMounted(() => {
  const targetEl = document.getElementById(props.target)
  const triggerEl = document.getElementById(props.triggerEl)

  const options = {
    placement: 'top',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    onHide: () => {
      console.log('dropdown has been hidden')
    },
    onShow: () => {
      console.log('dropdown has been shown')
    },
    onToggle: () => {
      console.log('dropdown has been toggled')
    },
  }

  if (targetEl) {
    demo.value = new Dropdown(targetEl, triggerEl, options)
    demo.value.hide()
  }
})

watch(closeFilter, () => {
  console.log('closing')
  demo.value.hide()
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
  active: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: 'w-full',
  },
  close: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    :id="target"
    :class="props.size"
    class="z-20 hidden max-w-sm rounded-lg bg-white shadow-lg"
    aria-labelledby="dropdownNotificationButton"
  >
    <slot></slot>
  </div>
</template>
