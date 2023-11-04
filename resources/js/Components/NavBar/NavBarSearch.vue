<script setup>
import SearchDropdown from '../SearchDropdown/SearchDropdown.vue'
import SearchList from '../SearchDropdown/SearchList.vue'
import SearchResult from '../SearchDropdown/SearchResult.vue'

import { ref } from 'vue'
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const input = ref(null)
// const searchActive = computed(() => !!input.value && input.value.focus)
</script>

<template>
  <div>
    <!-- {{ searchActive }} -->
    <input
      id="search"
      ref="searchInput"
      v-model="input"
      class="form-input relative w-80 rounded-md border border-slate-200 bg-neutral-50 px-10 text-sm focus:border-gray-400 focus:bg-white focus:ring-0"
      type="text"
      placeholder="Search members, or services"
    />
    <MagnifyingGlassIcon
      class="absolute -mt-[1.8rem] ml-3 h-5 w-5 text-gray-500"
    />
  </div>
  <!-- Dropdown menu -->
  <SearchDropdown target="searchDropdown" trigger-el="search">
    <SearchList>
      <SearchResult
        sender="GraceFields"
        message="Hello welcome you to church !"
      ></SearchResult>
      <SearchResult
        sender="GraceFields"
        message="Hello welcome you to church !"
      ></SearchResult>
      <SearchResult
        sender="GraceFields"
        message="Hello welcome you to church !"
      ></SearchResult>
    </SearchList>
  </SearchDropdown>
</template>
