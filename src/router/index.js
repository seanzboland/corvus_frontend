import Vue from 'vue'
import VueRouter from 'vue-router'
import warehouse from '../views/warehouse.vue'
import productDetails from '../views/productDetails.vue'

Vue.use(VueRouter)

  const routes = [
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
