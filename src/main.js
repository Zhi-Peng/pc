import Vue from 'vue'
import ElementUi from 'element-ui'
import chart from 'echarts'
import router from './router'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$chart = chart
Vue.use(ElementUi)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
