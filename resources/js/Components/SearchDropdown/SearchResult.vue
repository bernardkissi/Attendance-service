<script setup>
defineProps({
  sender: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <Link
    href="/services"
    class="flex px-4 py-2 hover:bg-neutral-50 dark:hover:bg-gray-700"
  >
    <div class="w-full pl-3">
      <div class="mb-1.5 text-sm text-gray-500 dark:text-gray-400">
        <span class="font-semibold text-gray-900 dark:text-white">
          New message from {{ sender }}
        </span>
        <div>{{ message }}</div>
      </div>
    </div>
  </Link>
</template>
