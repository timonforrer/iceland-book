import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueFire from 'vuefire'
import './registerServiceWorker'

import LoggedIn from '@/layouts/LoggedIn'
import NotLoggedIn from '@/layouts/NotLoggedIn.vue'

Vue.component('logged-in-layout', LoggedIn)
Vue.component('not-logged-in-layout', NotLoggedIn)

Vue.config.productionTip = false

Vue.use(VueFire)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
