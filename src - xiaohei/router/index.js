import Vue from 'vue'
import Router from 'vue-router'

import Index from '../view/index/index'
import Manage from '../view/manage/index'

import axios from 'axios'
import qs from 'qs'

Vue.use(Router)
Vue.prototype.$http = axios
Vue.prototype.$qs = qs

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Manage',
      name: 'Manage',
      component: Manage
    }
  ]
})
