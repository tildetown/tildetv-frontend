import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Videos from '@/components/Videos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Videos
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    },
    {
      path: '/videos-by-tag',
      name: 'Video Tag List',
      redirect: '/videos',
      children: [
        {
          path: ':tag',
          name: 'Videos By Tag',
          redirect: '/videos'
        }
      ]
    }
  ]
})
