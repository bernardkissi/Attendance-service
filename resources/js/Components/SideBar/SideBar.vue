<script setup>
import SideBarHeader from './SideBarHeader.vue'
import SideBarFooter from './SideBarFooter.vue'
import SideBarActionButton from './SideBarActionButton.vue'
import SideBarMenuLink from './SideBarMenuLink.vue'
import SideBarMenuList from './SideBarMenuList.vue'

import {
  InformationCircleIcon,
  HomeIcon,
  CalendarIcon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  QrCodeIcon,
  ArrowRightOnRectangleIcon,
  Cog8ToothIcon,
} from '@heroicons/vue/24/outline'
import { reactive } from 'vue'

const menuItems = reactive({
  values: [
    {
      name: 'Dashboard',
      link: '/dashboard',
      icon: HomeIcon,
    },
    {
      name: 'Services',
      link: '/services',
      icon: CalendarIcon,
    },
    {
      name: 'Members',
      link: '/members',
      icon: UsersIcon,
    },
    {
      name: 'Attendance',
      link: '/attendance',
      icon: ClipboardDocumentCheckIcon,
    },
    {
      name: 'Reports',
      link: '/reports',
      icon: ChartBarIcon,
      hasCounter: true,
      counter: 1,
    },
    {
      name: 'Qrcode Manager',
      link: '/qrcode-manager',
      icon: QrCodeIcon,
    },
  ],
})
</script>

<template>
  <aside class="relative w-64 px-6 py-4">
    <!-- SideBar Header -->
    <SideBarHeader name="Attendanc"></SideBarHeader>
    <!-- End SideBar Header -->

    <!-- Main Sidebar Items -->
    <SideBarMenuList>
      <SideBarMenuLink
        v-for="(item, index) in menuItems.values"
        :key="index"
        :name="item.name"
        :link="item.link"
        :icon="item.icon"
        :is-active="$page.url === item.link ?? false"
        :has-counter="item.hasCounter ?? false"
        :counter="item.hasCounter ? item.counter : 0"
      ></SideBarMenuLink>
    </SideBarMenuList>
    <!-- Main Sidebar Items -->

    <h4 class="mb-4 mt-12 text-xs font-bold text-gray-400">ACTIONS</h4>
    <!-- Action Button -->
    <SideBarActionButton
      name="Create Qrcode"
      :icon="InformationCircleIcon"
    ></SideBarActionButton>
    <!-- End Action Button -->

    <!-- Bottom SideBar Items -->
    <SideBarFooter name="hello">
      <SideBarMenuLink
        name="Settings"
        link="/"
        :icon="Cog8ToothIcon"
        :has-counter="true"
        :counter="4"
      ></SideBarMenuLink>
      <SideBarMenuLink
        name="Logout"
        link="/"
        :icon="ArrowRightOnRectangleIcon"
      ></SideBarMenuLink>
    </SideBarFooter>
    <!-- End Bottom Sidebar Items -->
  </aside>
</template>
