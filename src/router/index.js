import Vue from 'vue'
import Router from 'vue-router'
import VuePaginate from 'vue-paginate'
import FetchData from 'vue-fetch-data'
import Hello from '@/components/Hello'
import Howto from '@/components/Howto'
import Videos from '@/components/Videos'
import PageNotFound from '@/components/errors/404'

Vue.use(Router)
Vue.use(VuePaginate)
Vue.use(FetchData)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/howto',
      name: 'Howto',
      component: Howto
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
    },
    {
      path: '*',
      name: '404 - Page Not Found',
      component: PageNotFound
    }
  ]
})
