import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../page/home/index.vue'
import Product from '../page/product/index.vue'
import ProductDetails from '../page/productDetails/index.vue'

Vue.use(VueRouter)

const product = [
  {
    path: '/product', component: Product,
  },
  {
    path: '/product/details', component: ProductDetails
  },
]

const home = [
  { path: '/home', component: Home },
  { path: '/', redirect: '/home' },
]
const routes = [
  ...product, ...home
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router