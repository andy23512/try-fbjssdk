import 'normalize.css/normalize.css'
import '@/global.sass'

import Vue from 'vue'
import axios from 'axios'

import App from '@/App.vue'
import store from '@/store'

Vue.config.productionTip = false
Vue.http = axios
Vue.prototype.$http = axios

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
