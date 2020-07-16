<template>
  <b-container id="reports-page" class="reports-page pb-5">
    <b-row class="header">
      <b-col cols="12">
        <h1 class="heading text-capitalize mr-3 mb-4">Reports</h1>
      </b-col>
    </b-row>
    <ReportDetails />
    <b-row>
      <b-col cols="12">
        <div class="errors-over-time chart-wrapper p-3">
          <h5 class="chart-title mb-3">Errors over time</h5>
          <BarChart :height="250" :chartData="barChartData" :options="barChartOptions" />
        </div>
      </b-col>
      <b-col cols="12" sm="6" md="8" class="mt-3">
        <div class="discrepancies-over-time chart-wrapper p-3">
          <h5 class="chart-title mb-3">Discrepancies over time</h5>
          <LineChart :height="250" :chartData="lineChartData" :options="lineChartOptions" />
        </div>
      </b-col>
      <b-col cols="12" sm="6" md="4" class="mt-3">
        <div class="wall-cycle-count chart-wrapper p-3">
          <h5 class="chart-title mb-3">Wall-to-wall cycle count</h5>
          <PieChart :height="250" :chartData="pieChartData" :options="pieChartOptions" />
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ReportDetails from "@/components/ReportDetails";
import BarChart from "@/components/BarChart";
import PieChart from "@/components/PieChart";
import LineChart from "@/components/LineChart";

export default {
  name: "reports",
  components: {
    ReportDetails,
    BarChart,
    PieChart,
    LineChart
  },
  data() {
    return {
      barChartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: " errors over time",
            data: [12, 15, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            barThickness: 10
          }
        ]
      },
      barChartOptions: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        },
        legend: {
          display: false
        },
        maintainAspectRatio: false
      },
      pieChartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: " errors over time",
            data: [12, 15, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ]
          }
        ]
      },
      pieChartOptions: {
        legend: {
          display: false
        },
        maintainAspectRatio: false
      },
      lineChartData: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: " errors over time",
            data: [4, 2, 6, 3, 7, 5],
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: false
          }
        ]
      },
      lineChartOptions: {
        legend: {
          display: false
        },
        maintainAspectRatio: false
      }
    };
  }
};
</script>

<style lang="scss" >
#reports-page {
  padding-top: 30px;
  .chart-wrapper {
    &.errors-over-time {
      margin-top: 30px;
    }
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    .chart-title {
      font-weight: 600;
    }
  }
}
</style>