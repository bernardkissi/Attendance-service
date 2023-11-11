<script setup>
import { onMounted, onUnmounted, reactive, ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

const emit = defineEmits(['init'])

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
const data = computed(() => props.chartData.series)

// chart configurations
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
  initiateChart()
})

onUnmounted(() => {
  chartObject.value.destroy()
})

const initiateChart = () => {
  emit('init')
}
</script>
<template>
  <VueApexCharts
    ref="chartObject"
    height="300"
    :options="chart.options"
    :series="data"
  />
</template>
