import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Videos from '@/components/Videos'
import Video from '@/components/Video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    },
    {
      path: '/videos/:id',
      name: 'Video',
      component: Video
    },
    {
      path: '/videos-by-tag',
      redirect: '/videos'
    }
  ]
})
