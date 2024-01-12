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
      <section
        class="flex space-x-8 divide-x divide-dashed divide-gray-100 px-8"
      >
        <div class="flex w-64 flex-col pb-8 pt-2">
          <!-- content side section -->
          <slot name="sidenav"></slot>
          <!-- end of content side section -->
        </div>
        <div class="relative flex-1 flex-col space-y-8 px-3 pt-8">
          <!-- main content section -->
          <slot name="content"></slot>
          <!-- end of main content section -->
        </div>
      </section>
    </main>
  </div>
</template>
