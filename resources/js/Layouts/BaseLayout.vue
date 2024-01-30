<script setup>
import SideBar from '@/Components/SideBar/SideBar.vue'
import NavBar from '@/Components/NavBar/NavBar.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex min-h-screen w-full bg-gray-100 px-2 py-6">
    <!-- sidebar -->
    <SideBar></SideBar>
    <!-- end sidebar -->
    <main
      class="flex-1 flex-col overflow-x-hidden rounded-md bg-white shadow-md"
    >
      <!-- navbar -->
      <NavBar :name="title"></NavBar>
      <!-- end navbar -->
      <section class="flex space-x-4 px-4">
        <div class="flex w-1/5 flex-col px-2 pb-8 pt-2">
          <!-- content side section -->
          <slot name="sidenav"></slot>
          <!-- end of content side section -->
        </div>
        <div class="flex w-4/5 flex-col space-y-8 px-2 py-8">
          <!-- main content section -->
          <slot name="content"></slot>
          <!-- end of main content section -->
        </div>
      </section>
    </main>
  </div>
</template>
