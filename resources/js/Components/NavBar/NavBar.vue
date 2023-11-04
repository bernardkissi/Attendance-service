<script setup>
import NavBarNotification from './NavBarNotification.vue'
import NavBarProfile from './NavBarProfile.vue'
import NavBarSearch from './NavBarSearch.vue'

defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <header
    class="flex items-center justify-between border-b border-dashed border-gray-200 px-8 py-4"
  >
    <h4 class="text-xl font-semibold">{{ name }}</h4>
    <!-- search  -->
    <NavBarSearch></NavBarSearch>
    <div class="flex items-center space-x-6">
      <!-- current date -->
      <span class="text-sm">Sunday, 7 November 2023</span>
      <!-- notification -->
      <NavBarNotification></NavBarNotification>
      <!-- user profile -->
      <NavBarProfile></NavBarProfile>
      <!-- end profile -->
    </div>
  </header>
</template>
