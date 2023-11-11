import { ref, toValue } from 'vue'
import { useYear } from './useYear'

export function useSeriesChartData(data, keys, label) {
  const series = ref(null)

  const extractMonthlyChartData = () => {
    let values = Array(12).fill(0)

    toValue(data).map((point) => {
      const value = extractKeysFromObject(point, keys)
      values[value[keys[0]] - 1] = value[keys[1]]
    })

    series.value = [{ data: values, name: label }]
  }

  const extractYearlyChartData = () => {
    const { previousYears } = useYear(5)
    let values = Array(previousYears.length).fill(0)

    toValue(data).map((point) => {
      const value = extractKeysFromObject(point, keys)
      values[value[keys[0]]] = value[keys[1]]
    })

    series.value = [{ data: values, name: label }]
  }

  const extractKeysFromObject = (obj, keysToExtract) => {
    const extractedValues = {}

    for (const key of keysToExtract) {
      if (Object.hasOwn(obj, key)) {
        extractedValues[key] = obj[key]
      }
    }

    return extractedValues
  }
  return {
    extractMonthlyChartData,
    extractYearlyChartData,
    series,
  }
}
