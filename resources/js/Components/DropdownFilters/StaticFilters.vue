<script setup>
import { ref } from 'vue'
import TextFilters from '@/Components/DropdownFilters/TextFilters.vue'
import { members as memberApi } from '@/Utils/api'

const gender = ref(false)
const members = ref(false)

// const selectedMember = ref(null)
</script>
<template>
  <div>
    <ul
      class="divide-y divide-gray-100 p-3 text-sm text-gray-700 dark:text-gray-200"
      aria-labelledby="dropdownHelperButton"
    >
      <li>
        <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <div class="flex h-5 items-center">
            <input
              id="helper-checkbox-1"
              v-model="gender"
              aria-describedby="helper-checkbox-text-1"
              type="checkbox"
              value=""
              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
            />
          </div>
          <div class="ms-2 text-sm">
            <label
              for="helper-checkbox-1"
              class="font-medium text-gray-900 dark:text-gray-300"
            >
              <div>Gender</div>
              <p
                id="helper-checkbox-text-1"
                class="text-xs font-normal text-gray-500 dark:text-gray-300"
              >
                Filter by attendance gender.
              </p>
            </label>
          </div>
        </div>
      </li>
      <li>
        <div class="flex rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <div class="flex h-5 items-center">
            <input
              id="helper-checkbox-2"
              v-model="members"
              aria-describedby="helper-checkbox-text-2"
              type="checkbox"
              value=""
              class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-700"
            />
          </div>
          <div class="ms-2 text-sm">
            <label
              for="helper-checkbox-2"
              class="font-medium text-gray-900 dark:text-gray-300"
            >
              <div>Member</div>
              <p
                id="helper-checkbox-text-2"
                class="text-xs font-normal text-gray-500 dark:text-gray-300"
              >
                Filter by a specific member.
              </p>
            </label>
          </div>
        </div>
        <TextFilters v-if="members" :data="memberApi"></TextFilters>
      </li>
    </ul>
  </div>
</template>
