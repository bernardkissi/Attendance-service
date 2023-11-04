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
      :href="link"
      class="group flex items-center space-x-2 px-4 py-2 hover:bg-gray-100"
    >
      <!-- <component :is="icon" class="h-6 w-6 text-gray-400"></component> -->
      <span>{{ name }}</span>
    </Link>
  </li>
</template>
