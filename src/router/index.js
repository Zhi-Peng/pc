import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const dd = {
  product: [
    'attribute',
    'detail',
    'grouping',
    'setting',
    'specs',
    'unit',
    'upload'
  ],
  takeout: [
    'survey',
    'handle',
    'find',
    'quick',
    'remind',
    'setting',
    'explain',
  ]
}
const routes = [
  {
    path: '/home',
    component: () => import('../page/home/index.vue')
  },
  {
    path: '/',
    redirect: '/home'
  }
]
const routeSetting = () => {
  for (const [key, values] of Object.entries(dd)) {
    for (const item of values) {
      
      routes.push({
        path: `/${key}/${item}`,
        component: () => import(`../page/${key}/${item}/index.vue`)
      })
    }
  }
}
routeSetting()

export default new VueRouter({
  mode: 'history',
  routes
})

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location) {
  return originalPush.call(this, location).catch(err => err)
}
