import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from '@/routers'

Vue.config.productionTip = false


Vue.prototype.$apiUrl = 'https://api.tissini.app/api/v1/'
Vue.prototype.$apiUrlV2 = 'https://api.tissini.app/api/v2/'
Vue.prototype.$apiUrlBase = 'https://api.tissini.app'

new Vue({
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
