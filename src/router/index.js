import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Class from '@/pages/Class'
import Notes from '@/pages/Notes'
import Lab from '@/pages/Lab'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/comp1511',
      name: 'Class',
      component: Class
    },
    {
      path: '/comp1511/:week',
      name: 'Lab',
      component: Lab,
      props: (route) => ({
         week: route.params.week
      })
    },
    {
      path: '/notes',
      name: 'Notes',
      component: Notes
    },
  ]
})
