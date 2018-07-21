import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Journey from './views/Journey.vue'
import Downloads from './views/Downloads.vue'
import Login from './views/Login.vue'
import Day from './views/Day.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'logged-in'
      },
      component: Home
    },
    {
      path: '/journey',
      name: 'journey',
      meta: {
        layout: 'logged-in'
      },
      component: Journey
    },
    {
      path: '/journey/:day',
      name: 'day',
      meta: {
        layout: 'logged-in'
      },
      component: Day
    },
    {
      path: '/downloads',
      name: 'downloads',
      meta: {
        layout: 'logged-in'
      },
      component: Downloads
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: 'not-logged-in'
      },
      component: Login
    }
  ]
})
