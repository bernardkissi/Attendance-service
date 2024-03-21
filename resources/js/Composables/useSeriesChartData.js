import { ref, toValue } from 'vue'

// { identifier: 'month', keys: ['attendance', 'absence] }
export function useSeriesChartData(data, options) {
  const series = ref(null)
  const statsSeries = ref(null)
  const chartKeys = ref(null) 

  const extractMonthlyChartData = () => {
    let chartSeries = []
    let chartLabels = []

    options.keys.map((key) => {
      let values = Array(12).fill(0)
      const labels = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ]
      let chartlblKeys = []
      toValue(data).map((point) => {
        const value = extractKeyFromObject(point, key)
        values[point[options.identifier] - 1] = value[key]
        chartlblKeys[point[options.identifier] - 1] =
          labels[point[options.identifier] - 1]
      })
      chartLabels = [...chartLabels, ...chartlblKeys]
      chartSeries = [...chartSeries, { data: values, name: key }]
    })

    series.value = chartSeries
    statsSeries.value = chartSeries.map((obj) => ({
      ...obj,
      data: obj.data.filter((num) => num !== 0),
    }))
    chartKeys.value = [...new Set(chartLabels)].filter(
      (value) => value !== undefined,
    )
  }

  const extractKeyFromObject = (obj, key) => {
    const extractedValue = {}
    if (Object.hasOwn(obj, key)) {
      extractedValue[key] = obj[key]
    }
    return extractedValue
  }

  return {
    extractMonthlyChartData,
    series,
    statsSeries,
    chartKeys,
  }
}
