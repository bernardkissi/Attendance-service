import { ref, toValue } from 'vue'
import { intervalToDuration } from 'date-fns'

export function useCountdown(startDateTime, endDateTime, tick, emit) {
  const remainingDays = ref(0)
  const remainingHours = ref(0)
  const remainingMinutes = ref(0)
  const remainingSeconds = ref(0)
  const currentDateTime = ref(null)

  const isRunning = ref(false)

  let tickTimeout = null

  const run = async () => {
    if (!isRunning.value) {
      emit('start')
    }

    isRunning.value = true

    if (!startDateTime) {
      return
    }

    if (toValue(startDateTime) >= toValue(endDateTime)) {
      emit('finished')
      isRunning.value = false
      return
    }

    getCurrentDate()

    const result = intervalToDuration({
      start: currentDateTime.value,
      end: toValue(endDateTime),
    })

    const { days, hours, minutes, seconds } = result

    remainingDays.value = days
    remainingHours.value = hours
    remainingMinutes.value = minutes
    remainingSeconds.value = seconds

    if (isCountdownCompleted()) {
      emit('finished')
      isRunning.value = false
      return
    }

    tickTimeout = setTimeout(() => {
      run()
    }, tick.value)
  }

  const isCountdownCompleted = () => {
    const values = [
      remainingDays.value,
      remainingHours.value,
      remainingMinutes.value,
      remainingSeconds.value,
    ]
    const sum = values.reduce((acc, current) => (acc += current), 0)
    return sum === 0
  }

  const cancel = () => {
    clearTimeout(tickTimeout)
    isRunning.value = false
    emit('cancelled')
  }

  const getCurrentDate = () => {
    currentDateTime.value = new Date()
  }

  return {
    run,
    cancel,
    isRunning,
    remainingDays,
    remainingHours,
    remainingMinutes,
    remainingSeconds,
  }
}
