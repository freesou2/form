import Vue from 'vue'
import Router from 'vue-router'
import lazyLoading from '@/router/lazyLoading'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: lazyLoading('index')
    },
    {
      path: '/customeForm',
      name: 'customeForm',
      component: lazyLoading('customeForm')
    }
  ]
})
