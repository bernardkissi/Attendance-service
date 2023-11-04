import { toValue, ref } from 'vue'

export function useServiceState(status) {
  const bgColor = ref(null)
  const textColor = ref(null)

  if (toValue(status) === 'live') {
    bgColor.value = 'bg-green-500'
    textColor.value = 'text-green-500'
  }

  if (toValue(status) === 'ended') {
    bgColor.value = 'bg-red-500'
    textColor.value = 'text-red-500'
  }

  return {
    bgColor,
    textColor,
  }
}
