import Vue from 'vue'
import VueRouter from 'vue-router'
import warehouse from '../views/warehouse.vue'
import AisleDetails from '../views/aisleDetails.vue'
import flightData from '../views/flightData.vue'
import discrepancyAnalysis from '../views/discrepancyAnalysis.vue'
import reports from '../views/reports.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: warehouse
  },
  {
    path: '/warehouse',
    name: 'warehouse',
    component: warehouse
  },
  {
    path: "/warehouse/:aisleId",
    name: "AisleDetails",
    component: AisleDetails,
  },
  {
    path: "/flight-data",
    name: "flightData",
    component: flightData,
  },
  {
    path: "/discrepancy-analysis",
    name: "discrepancyAnalysis",
    component: discrepancyAnalysis,
  },
  {
    path: "/reports",
    name: "reports",
    component: reports,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
