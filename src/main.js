import Vue from 'vue'
import App from './app.vue'
import Routers from './router/index'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(iView)

new Vue({
  el: '#app',
  router: Routers,
  render: h => h(App)
})
