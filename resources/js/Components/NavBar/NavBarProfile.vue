<script setup>
import DropdownMenu from '@/Components/DropdownMenu/DropdownMenu.vue'
import DropdownMenuList from '@/Components/DropdownMenu/DropdownMenuList.vue'
import DropdownMenuItem from '@/Components/DropdownMenu/DropdownMenuItem.vue'

import { ChevronDownIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div>
    <div class="flex items-center space-x-3">
      <img
        src="https://eu.ui-avatars.com/api/?background=random&name=Bernard+Owiredu"
        class="h-8 w-8 rounded-full"
      />
      <span class="text-sm">Bernard Owiredu</span>
      <!-- trigger button -->
      <button
        id="dropdownButton"
        data-dropdown-offset-skidding="-80"
        type="button"
      >
        <ChevronDownIcon class="h-4 w-4 font-medium text-gray-400" />
      </button>
      <!-- end trigger button -->
    </div>
    <!-- trigger-el is the id of the trigger button -->
    <DropdownMenu target="profile" trigger-el="dropdownButton">
      <DropdownMenuList>
        <template #header>
          <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div class="truncate font-medium">Administrator</div>
          </div>
        </template>
        <DropdownMenuItem name="Account" link="/account"></DropdownMenuItem>
        <DropdownMenuItem name="Settings" link="/settings"></DropdownMenuItem>
        <DropdownMenuItem name="Branches" link="/branches"></DropdownMenuItem>
        <template #footer>
          <div class="py-2">
            <a
              href="#"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >Sign out</a
            >
          </div>
        </template>
      </DropdownMenuList>
    </DropdownMenu>
  </div>
</template>
