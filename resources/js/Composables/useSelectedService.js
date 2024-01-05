import { ref } from 'vue'

const selectedService = ref(null)

export function useSelectedService() {
  const setService = (service) => {
    selectedService.value = service
    console.log(selectedService)
  }

  return {
    selectedService,
    setService,
  }
}
