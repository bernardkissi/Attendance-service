<script setup>
// import { Link } from '@inertiajs/vue3'
defineProps({
  link: {
    type: String,
    default: '#', //TODO: make this required
  },
})
</script>

<template>
  <!-- <Link :href="link" as="tr" class="cursor-pointer hover:bg-slate-50"> -->
  <tr class="cursor-pointer hover:bg-gray-50">
    <slot />
  </tr>

  <!-- </Link> -->
</template>
