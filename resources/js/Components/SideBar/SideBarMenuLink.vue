<script setup>
import { Link } from '@inertiajs/vue3'

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
    required: true,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  hasCounter: {
    type: Boolean,
    default: false,
  },
  counter: {
    type: Number,
    required: false,
  },
})
</script>

<template>
  <li>
    <Link
      v-if="!hasCounter"
      :href="link"
      :class="{
        'animate-in slide-in-from-top-[1px] -ml-2 rounded-md bg-white px-2 py-[4px] transition-transform delay-100 duration-700':
          isActive,
      }"
      class="group flex items-center space-x-3"
    >
      <component
        :is="icon"
        :class="[isActive ? ' text-blue-500' : 'text-gray-400']"
        class="h-6 w-6 group-hover:text-blue-500 group-hover:transition-colors group-hover:duration-75"
      />
      <span
        :class="{
          'text-blue-500': isActive,
        }"
        class="group-hover:text-blue-500 group-hover:transition-colors group-hover:duration-75"
        >{{ name }}</span
      >
    </Link>
    <Link
      v-else
      :href="link"
      class="group flex items-center justify-between space-x-3"
      :class="{
        'animate-in slide-in-from-top-[1px] -ml-2 rounded-md bg-white px-2 py-[2px] shadow-sm transition-transform delay-100 duration-700':
          isActive,
      }"
    >
      <div class="flex items-center space-x-3">
        <component
          :is="icon"
          class="h-6 w-6 text-gray-400 group-hover:text-blue-500 group-hover:transition-colors group-hover:duration-75"
        />
        <span
          class="group-hover:text-blue-500 group-hover:transition-colors group-hover:duration-75"
          >{{ name }}</span
        >
      </div>
      <div class="rounded-full bg-white px-[9px] py-[2px] text-xs font-bold">
        {{ counter }}
      </div>
    </Link>
  </li>
</template>
