import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/load'

Vue.config.productionTip = false

window.addEventListener('DOMContentLoaded', () => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})

