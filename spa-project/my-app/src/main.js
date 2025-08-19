import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/scss/_global.scss'
import './assets/scss/_mixins.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
