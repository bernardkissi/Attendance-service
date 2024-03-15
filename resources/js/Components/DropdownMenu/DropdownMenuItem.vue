<script setup>
import { PlusIcon } from '@heroicons/vue/24/solid'

defineProps({
  name: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  icon: {
    type: Function,
    required: false,
    default: PlusIcon,
  },
})
</script>

<template>
  <li>
    <Link
      as="button"
      :href="link"
      class="group flex w-full items-center space-x-2 px-4 py-2 hover:bg-gray-100"
    >
      <component :is="icon" class="h-5 w-5 text-blue-400"></component>
      <span>{{ name }}</span>
    </Link>
  </li>
</template>
