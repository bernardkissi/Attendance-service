<script setup>
import { onUnmounted, reactive, ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const props = defineProps({
  chartData: {
    type: Array,
    default: () => [],
  },
  seriesTitle: {
    type: String,
    required: true,
  },
  seriesCategories: {
    type: Array,
    default: () => [
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
    ],
  },
})
const chartObject = ref(null)
// chart data
const chartSeries = computed(() => props.chartData)
const seriesCategories = computed(() => props.seriesCategories)

// chart configurations
const chart = reactive({
  options: {
    chart: {
      animations: {
        enabled: true,
      },
      type: 'bar',
      stacked: false,
      fontFamily: '"Public Sans", sans-serif',
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
    },
    xaxis: {
      categories: seriesCategories,
    },
    yaxis: {
      title: {
        text: 'Members',
      },
    },
    legend: {
      floating: false,
      position: 'bottom',
      horizontalAlign: 'center',
      offsetX: 0,
      offsetY: 3,
      fontSize: '13px',
      fontFamily: '"Public Sans", sans-serif',
      labels: {
        colors: 'bg-green-100',
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

onUnmounted(() => {
  console.log('chart', chartObject.value)
})
</script>

<template>
  <VueApexCharts
    ref="chartObject"
    class="z-10"
    height="350"
    :options="chart.options"
    :series="chartSeries"
  />
</template>
