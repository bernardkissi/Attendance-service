<script setup></script>

<template>
  <div
    class="flex items-center justify-between border border-gray-100 px-4 py-3"
  >
    <slot name="search"></slot>
    <div class="flex items-center space-x-2">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
