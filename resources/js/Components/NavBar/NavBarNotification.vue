<script setup>
import NofiticationMenu from '../Notification/NofiticationMenu.vue'
import NotifcationHeader from '../Notification/NotifcationHeader.vue'
import NotificationFooter from '../Notification/NotificationFooter.vue'
import NotificationList from '../Notification/NotificationList.vue'
import NotificationMessage from '../Notification/NotificationMessage.vue'

import { BellIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div>
    <button id="notifications" class="relative flex" type="button">
      <BellIcon class="h-6 w-6 text-gray-500" />
      <span
        class="absolute right-1 top-0 h-2 w-2 animate-ping rounded-full bg-pink-500 opacity-75"
      ></span>
      <span
        class="absolute right-1 top-0 h-2 w-2 rounded-full bg-pink-500"
      ></span>
    </button>

    <!-- Dropdown menu -->
    <NofiticationMenu target="dropdownNotification" trigger-el="notifications">
      <NotifcationHeader title="Notifications"></NotifcationHeader>
      <NotificationList>
        <NotificationMessage
          time="3 seconds ago"
          sender="GraceFields"
          message="Hello welcome you to church !"
        ></NotificationMessage>
        <NotificationMessage
          time="3 seconds ago"
          sender="System"
          message="Hello welcome you to church !"
        ></NotificationMessage>
        <NotificationMessage
          time="3 seconds ago"
          sender="System"
          message="300 members attendded church service today"
        ></NotificationMessage>
      </NotificationList>
      <NotificationFooter></NotificationFooter>
    </NofiticationMenu>
  </div>
</template>
