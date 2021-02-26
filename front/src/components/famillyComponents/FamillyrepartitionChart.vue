<template>
  <div style="max-height: 70vh">
    <h4>Répartition des achats par familles</h4>
    <canvas id="doughnut-chart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js'
const famillyService = require('../../services/familleService')
export default {
  name: 'FamillyrepartitionChart',
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: [],
            data: [],
            backgroundColor: ['#FA3C2F', '#F72FA3', '#D629A0', '#CF29D6', '#B439ED', '#7029D6', '#4B2FF7', '#2B66FA']
          }
        ],
        option: {
          height: 500
        }
      }
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    loadData () {
      famillyService.getFamillyChart().then((response) => {
        response.forEach((item) => {
          this.data.datasets[0].data.push(item.count)
          this.data.datasets[0].label.push(item.famille)
          this.data.labels.push(item.famille)
        })
        this.createChart('doughnut-chart')
      })
    },
    createChart (chartId) {
      const ctx = document.getElementById(chartId)
      const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: this.data
      })
      return myChart
    }
  }
}
</script>

<style scoped>

</style>
