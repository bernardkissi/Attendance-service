<script setup>
import BaseLayout from '@/Layouts/BaseLayout.vue'
import StatsCard from '@/Components/Cards/StatsCard.vue'
import NoticeCard from '@/Components/Cards/NoticeCard.vue'

// utilities
import PrimaryButton from '@/Components/Button/PrimaryButton.vue'

// icon imports
import {
  ExclamationCircleIcon,
  CheckBadgeIcon,
  ClockIcon,
  CalendarIcon,
  QrCodeIcon,
} from '@heroicons/vue/24/outline'
</script>
<template>
  <BaseLayout title="Services - Sunday Service">
    <template #sidenav>
      <!-- successful checkin card -->
      <StatsCard
        :icon="CheckBadgeIcon"
        title="Total Attendance"
        value="2"
        color="green"
      ></StatsCard>
      <!-- end card -->
      <!-- pending checkin card -->
      <StatsCard
        :icon="ExclamationCircleIcon"
        title="Total Absence"
        value="3"
        color="pink"
      ></StatsCard
      ><StatsCard
        :icon="ExclamationCircleIcon"
        title="Total Occurences"
        value="5"
        color="gray"
      ></StatsCard>
      <!-- end card -->
      <div class="mt-8 flex items-center justify-between rounded pb-6">
        <div class="flex items-center space-x-2">
          <CalendarIcon class="h-5 w-5" />
          <span class="text-base font-bold">Upcoming</span>
        </div>
        <a href="" class="text-sm text-blue-500">view</a>
      </div>

      <!-- upcoming service card -->
      <NoticeCard
        title="Havlia Praise Service"
        name="starts in 9 mins"
        :icon="ClockIcon"
      ></NoticeCard>
    </template>
    <template #content>
      <div class="flex items-end justify-end space-x-3">
        <PrimaryButton selector="filter-button">Filter By</PrimaryButton>
        <PrimaryButton selector="demo-button" class="bg-gray-800 text-white">
          <QrCodeIcon class="h-5 w-5 text-white" />
          <span>Create Qrcode</span>
        </PrimaryButton>
      </div>
    </template>
  </BaseLayout>
</template>
