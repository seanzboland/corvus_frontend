import Vue from 'vue'
import VueRouter from 'vue-router'
import warehouse from '../views/warehouse.vue'
import productDetails from '../views/productDetails.vue'
import flightData from '../views/flightData.vue'
import discrepancyAnalysis from '../views/discrepancyAnalysis.vue'

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
    path: "/warehouse/:productId",
    name: "productDetails",
    component: productDetails,
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
