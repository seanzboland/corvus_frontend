<template>
  <div class="report-details d-flex justify-content-between flex-wrap py-3 px-2 px-md-3 px-lg-4">
    <div class="slots-scanned mb-3 mb-md-0">
      <h5 class="heading mb-2">Slots scanned</h5>
      <div class="this-week d-flex align-items-center mb-2">
        <div class="box mr-2 d-flex align-items-center justify-content-between">
          <h6 class="mb-0 mr-3">this week</h6>
          <h5 class="mb-0">1,091</h5>
        </div>
        <div class="graph">
          <LineChart :height="20" :chartData="lineChartData" :options="lineChartOptions" />
        </div>
      </div>
      <div class="this-month d-flex align-items-center">
        <div class="box mr-2 d-flex align-items-center justify-content-between">
          <h6 class="mb-0 mr-3">this month</h6>
          <h5 class="mb-0">23,112</h5>
        </div>
        <div class="graph">
          <LineChart :height="20" :chartData="lineChartData" :options="lineChartOptions" />
        </div>
      </div>
    </div>
    <div class="discrepancies mb-3 mb-md-0">
      <h5 class="heading mb-2">Discrepancies</h5>
      <div class="this-week d-flex align-items-center mb-2">
        <div class="box mr-2 d-flex align-items-center justify-content-between">
          <h6 class="mb-0 mr-3">this week</h6>
          <h5 class="mb-0">89</h5>
        </div>
        <div class="graph">
          <LineChart :height="20" :chartData="lineChartData" :options="lineChartOptions" />
        </div>
      </div>
      <div class="this-month d-flex align-items-center">
        <div class="box mr-2 d-flex align-items-center justify-content-between">
          <h6 class="mb-0 mr-3">this month</h6>
          <h5 class="mb-0">142</h5>
        </div>
        <div class="graph">
          <LineChart :height="20" :chartData="lineChartData" :options="lineChartOptions" />
        </div>
      </div>
    </div>
    <div class="drone-performance">
      <h5 class="heading mb-2">Drone performance</h5>
      <div class="this-week d-flex align-items-center mb-2">
        <h6 class="mb-0 mr-3">uptime</h6>
        <h5 class="mb-0">30 days, 6 hours</h5>
      </div>
      <div class="this-month d-flex align-items-center">
        <h6 class="mb-0 mr-3">wall-to-wall</h6>
        <h5 class="mb-0">10 days</h5>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "@/components/LineChart";

export default {
  name: "ReportDetails",
  components: {
    LineChart
  },
  data() {
    return {
      lineChartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: " errors over time",
            data: [1, 2, 0, 2.5, 3],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: false,
            lineTension: 0
          }
        ]
      },
      lineChartOptions: {
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          yAxes: [
            {
              ticks: {
                display: false
              },
              gridLines: {
                display: false
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                display: false
              },
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: false
        },
        maintainAspectRatio: false
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.report-details {
  border: 1px solid #b7b7b7;
  border-radius: 2px;
  h5 {
    font-weight: 600;
  }
  .graph {
    width: 100px;
  }
  .box {
    min-width: 140px;
  }
}
</style>