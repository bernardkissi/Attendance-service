<script setup>
import { computed, toRefs, watch, onMounted } from 'vue'
import { useCountdown } from '@/Composables/useCountdown.js'
import { useServiceState } from '@/Composables/useServiceState.js'
const emit = defineEmits(['tick', 'start', 'finished', 'cancelled'])

import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  startDateTime: {
    type: Date,
    required: true,
  },
  endDateTime: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  qrcode: {
    type: String,
    required: true,
  },
  startImmediately: {
    type: Boolean,
    default: true,
  },

  tick: {
    type: Number,
    default: 1000,
  },
})

onMounted(() => {
  if (props.startImmediately) {
    run()
  }
})

const { tick, startDateTime, endDateTime, startImmediately } = toRefs(props)
const hasEnded = computed(() => props.startDateTime >= props.endDateTime)
const serviceState = computed(() => (!hasEnded.value ? 'live' : 'ended'))
const { bgColor, textColor } = useServiceState(serviceState)

const {
  run,
  cancel,
  isRunning,
  remainingHours,
  remainingMinutes,
  remainingSeconds,
} = useCountdown(startDateTime, endDateTime, tick, emit)

watch([tick, startDateTime, endDateTime, startImmediately], () => {
  if (isRunning.value || startImmediately.value) {
    cancel()
    run()
  }
})
</script>

<template>
  <div class="mt-5 flex flex-col divide-y rounded-md border shadow-sm">
    <div id="header" class="px-6 py-4">
      <div class="flex items-center justify-between">
        <span class="pt-1 text-sm font-semibold">{{ name }}</span>
        <div
          :class="textColor"
          class="relative flex items-center space-x-2 text-sm font-semibold"
        >
          <div class="relative flex h-2 w-2">
            <span
              :class="[serviceState === 'live' ? 'animate-ping' : '', bgColor]"
              class="absolute inline-flex h-full w-full rounded-full text-xs"
            ></span>
            <span
              :class="bgColor"
              class="relative h-2 w-2 rounded-full text-xs"
            ></span>
          </div>
          <!-- <span>{{ serviceState }}</span> -->
        </div>
      </div>
      <span class="text-xs text-gray-500">{{
        startDateTime.toDateString()
      }}</span>
      <div :class="textColor" class="text-sm font-bold">
        {{ serviceState }}
      </div>
    </div>
    <!-- <div class="container mx-auto px-6 py-4">
      <img :src="qrcode" alt="qrcode" class="h-32 w-32" />
    </div> -->
    <div
      id="footer"
      class="flex items-center justify-between bg-gray-50 px-6 py-4"
    >
      <div class="flex items-center space-x-1 text-sm">
        <span class="text-gray-400">{{
          hasEnded ? 'Expired' : '&#128338; '
        }}</span>
        <span v-if="!hasEnded" class="text-xs font-medium text-gray-700"
          >{{ `${remainingHours}h` }} : {{ `${remainingMinutes}m` }} :
          {{ `${remainingSeconds}s` }}</span
        >
      </div>
      <Link :href="name" class="text-sm text-blue-400">
        <ArrowTopRightOnSquareIcon class="h-5 w-5"></ArrowTopRightOnSquareIcon>
      </Link>
    </div>
  </div>
</template>
