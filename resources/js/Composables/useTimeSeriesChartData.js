import { ref, toValue } from 'vue'

// { identifier: 'recorded_at', keys: ['value'] }
export function useTimeSeriesChartData(data, options) {
  const series = ref(null)
  const chartKeys = ref(null) 

  const extractCheckInsChartData = () => {
    let chartSeries = []
    let chartLabels = []

    options.keys.map((key) => {
      let values = []
      const labels = []
      
      toValue(data).map((checkIn) => {
        const value = extractKeyFromObject(checkIn, key)
        values.push({data: value[key], label: checkIn[options.identifier]})
        labels.push(checkIn[options.identifier])
      })
      
      const accumulatedData = accumulator(values)

      const accumulatedValues = Object.values(accumulatedData)
      const accumulatedLabels = Object.keys(accumulatedData)

      // debug
      console.log(accumulatedValues)
      console.log(accumulatedLabels)

      chartLabels = [...chartLabels, ...accumulatedLabels ]
      chartSeries = [...chartSeries, { data: accumulatedValues, name: key }]
    })

    series.value = chartSeries
    chartKeys.value = chartLabels
  }

  // Create an object to store the sums for each label
  const accumulator = (values) => {
    return values.reduce((acc, { data, label }) => {
      // Use the label as the key in the accumulator object
      acc[label] = (acc[label] || 0) + data
      return acc
    }, {})
  }

  const extractKeyFromObject = (obj, key) => {
    const extractedValue = {}
    if (Object.hasOwn(obj, key)) {
      extractedValue[key] = obj[key]
    }
    return extractedValue
  }

  return {
    extractCheckInsChartData,
    series,
    chartKeys,
  }
}
