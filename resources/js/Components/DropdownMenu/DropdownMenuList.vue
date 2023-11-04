<script setup></script>

<template>
  <slot name="header"></slot>
  <ul
    class="py-2 text-sm text-gray-700 dark:text-gray-200"
    aria-labelledby="dropdownDefaultButton"
  >
    <slot></slot>
  </ul>
  <slot name="footer"></slot>
</template>
