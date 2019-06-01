import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/vue.css'
import './plugins/element.js'
import tab from '@/utils/tab'
import moment from 'moment'

// 设置使用中文
moment.locale('zh-cn')

Vue.config.productionTip = false
Vue.prototype.$tab = tab
Vue.prototype.$moment = moment
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
