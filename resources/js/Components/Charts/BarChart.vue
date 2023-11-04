<script setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  chartData: {
    type: Array,
    required: false,
    default: () => [],
  },
  seriesTitle: {
    type: String,
    required: true,
  },
})
const chartObject = ref(null)
const data = reactive({
  series: props.chartData,
})
const chart = reactive({
  options: {
    chart: {
      animations: {
        enabled: true,
      },
      type: 'bar',
      stacked: false,
      fontFamily: '"Inter", sans-serif',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
      ],
    },
    yaxis: {
      title: {
        text: 'Members',
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + ' Members'
        },
      },
    },
  },
})

onMounted(() => {
  populateChart()
})

onUnmounted(() => {
  chartObject.value.destroy()
})

const populateChart = () => {
  let mapData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  props.chartData.values.map(
    (point) => (mapData[point.month - 1] = point.value),
  )
  data.series.value = [{ data: mapData, name: props.title }]
}
</script>
<template>
  <VueApexCharts
    ref="chartObject"
    height="300"
    :options="chart.options"
    :series="data.series"
  />
</template>
