<template>
  <div class="flex w-full min-h-screen bg-gray-100">
    <aside class="relative w-64 bg-gray-100 px-6 py-4">
      <div
        class="flex items-center justify-between pb-4 border-b border-dashed border-gray-300"
      >
        <div class="flex items-center space-x-2">
          <BuildingOffice2Icon class="h-8 w-8 text-blue-500" />
          <h4 class="text-xl font-semibold">Attendanc</h4>
        </div>
        <span class="text-xs">v0.1.1</span>
      </div>
      <ul class="flex flex-col items-start space-y-5 pt-12">
        <li class="flex items-center space-x-3">
          <HomeIcon class="h-6 w-6 text-gray-400" />
          <span>Dasboard</span>
        </li>
        <li class="flex items-center justify-between w-full">
          <div class="flex items-center space-x-3">
            <CalendarIcon class="h-6 w-6 text-gray-400" />
            <span>Services</span>
          </div>
          <div class="text-xs font-bold bg-white rounded-full px-3 py-1">7</div>
        </li>
        <li class="flex items-center space-x-3">
          <UsersIcon class="h-6 w-6 text-gray-400" />
          <span>Members</span>
        </li>
        <li
          class="flex items-center space-x-3 py-2 rounded-md bg-white w-full font-medium"
        >
          <ClipboardDocumentCheckIcon class="h-6 w-6 text-gray-700" />
          <span>Attendance</span>
        </li>
        <li class="flex items-center space-x-3">
          <ChartBarIcon class="h-6 w-6 text-gray-400" />
          <span>Reports</span>
        </li>
        <li class="flex items-center space-x-3">
          <QrCodeIcon class="h-6 w-6 text-gray-400" />
          <span>Qrcode Manager</span>
        </li>
      </ul>
      <h4 class="text-xs font-bold mt-12 text-gray-400 mb-4">ACTIONS</h4>
      <div
        class="flex items-center w-48 space-x-2 border border-dashed border-gray-400 rounded py-3 px-2 hover:border-gray-600"
      >
        <PlusCircleIcon class="h-6 w-6 text-gray-400" />
        <span>Create Qrcode</span>
      </div>
      <div class="absolute bottom-10 h-16 mb-10">
        <div class="flex items-center space-x-2 text-sm pb-4">
          <InformationCircleIcon class="h-6 w-6" />
          <span>Help & Getting Started</span>
        </div>
        <div class="border-b border-dashed border-gray-300 w-48"></div>
        <ul class="flex flex-col space-y-3 pt-5">
          <li class="flex items-center justify-between w-full">
            <div class="flex items-center space-x-3">
              <Cog8ToothIcon class="h-6 w-6 text-gray-400" />
              <span>Settings</span>
            </div>
            <div
              class="text-xs font-bold bg-white rounded-full px-3 py-1 shadow-sm"
            >
              1
            </div>
          </li>
          <li class="flex items-center space-x-3">
            <ArrowRightOnRectangleIcon class="h-6 w-6 text-gray-400" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </aside>
    <main class="flex-1 bg-white rounded-md"></main>
  </div>
</template>
<script setup>
import {
  HomeIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  QrCodeIcon,
  BuildingOffice2Icon,
  Cog8ToothIcon,
  ArrowRightOnRectangleIcon,
  PlusCircleIcon,
  InformationCircleIcon,
  CalendarIcon,
} from "@heroicons/vue/24/outline";
</script>
