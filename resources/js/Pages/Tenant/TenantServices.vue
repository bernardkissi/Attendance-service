<script setup>
import SideBar from '@/Components/SideBar/SideBar.vue'
import NavBar from '@/Components/NavBar/NavBar.vue'
</script>

<template>
  <div class="flex min-h-screen w-full bg-gray-100 px-2 py-6">
    <SideBar></SideBar>
    <main class="flex-1 flex-col rounded-md bg-white shadow-md">
      <!-- navbar -->
      <NavBar name="Services"></NavBar>
      <!-- end navbar -->
    </main>
  </div>
</template>
