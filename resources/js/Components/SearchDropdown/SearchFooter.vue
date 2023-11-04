<script setup>
import { EyeIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <Link
    href="#"
    class="block rounded-b-lg bg-gray-50 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
  >
    <div class="inline-flex items-center">
      <EyeIcon class="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400"></EyeIcon>
      View all
    </div>
  </Link>
</template>
