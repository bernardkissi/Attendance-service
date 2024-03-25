<script setup>
import BaseLayout from '@/Layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout title="Attendance">
    <template #sidenav> </template>
    <template #content>
      <div class="overflow-x-auto">
        <table class="table-fixed">
          <thead>
            <tr>
              <th class="bg-gray-100"></th>
              <th :colspan="13" class="w-full bg-gray-100 py-2 text-center">
                Months
              </th>
            </tr>
            <tr class="divide-x divide-gray-100">
              <!-- First column (User) -->
              <th class="sticky left-0 w-1/2 bg-gray-100 px-4 py-2">Members</th>
              <th class="bg-gray-50 px-4 py-2">Counts</th>
              <!-- Subsequent columns (Dates) -->
              <th class="bg-gray-50 px-4 py-2">Jan</th>
              <th class="bg-gray-50 px-4 py-2">Feb</th>
              <th class="bg-gray-50 px-4 py-2">Mar</th>
              <th class="bg-gray-50 px-4 py-2">Apr</th>
              <th class="bg-gray-50 px-4 py-2">May</th>
              <th class="bg-gray-50 px-4 py-2">Jun</th>
              <th class="bg-gray-50 px-4 py-2">Jul</th>
              <th class="bg-gray-50 px-4 py-2">Aug</th>
              <th class="bg-gray-50 px-4 py-2">Sep</th>
              <th class="bg-gray-50 px-4 py-2">Oct</th>
              <th class="bg-gray-50 px-4 py-2">Nov</th>
              <th class="bg-gray-50 px-4 py-2">Dec</th>
              <!-- Add more date columns as needed -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(n, index) in 20"
              :key="index"
              class="divide-x divide-y divide-gray-100"
            >
              <!-- First column (User) content -->
              <td
                class="sticky left-0 w-1/2 bg-gray-100 px-4 py-2 text-center text-sm font-semibold"
              >
                567898
              </td>
              <td class="bg-gray-50 px-4 py-2 text-sm">7/12</td>
              <!-- Subsequent columns (Attendance) content -->
              <td class="bg-white px-4 py-2">
                <div class="flex flex-shrink-0 space-x-1">
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-red-400"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <td class="bg-white px-4 py-2">
                <div class="flex space-x-1">
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-red-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <td class="bg-white px-4 py-2">
                <div class="flex space-x-1">
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-red-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <td class="bg-white px-4 py-2">
                <div class="flex space-x-1">
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-red-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <td class="bg-white px-4 py-2">
                <div class="flex space-x-1">
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <td class="bg-white px-4 py-2">
                <div class="flex space-x-1">
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="red-500 h-2 w-2 rounded-full"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <td class="bg-white px-4 py-2">
                <div class="flex space-x-1">
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <td class="bg-white px-4 py-2">
                <div class="flex space-x-1">
                  <span class="h-2 w-2 rounded-full bg-red-500"></span>
                  <span class="h-2 w-2 rounded-full bg-red-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <td class="bg-white px-4 py-2">
                <div class="flex space-x-1">
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <td class="bg-white px-4 py-2">
                <div class="flex space-x-1">
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <td class="bg-white px-4 py-2">
                <div class="flex space-x-1">
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <td class="bg-white px-4 py-2">
                <div class="flex space-x-1">
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                  <span class="h-2 w-2 rounded-full bg-green-500"></span>
                </div>
              </td>
              <!-- Add more attendance data for User 1 -->
            </tr>
            <!-- Add more rows for other users -->
          </tbody>
        </table>
      </div>
    </template>
  </BaseLayout>
</template>
