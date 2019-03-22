import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from 'src/layouts/AppLayout'
import NotFound from 'src/layouts/NotFound'
import { Home, About, Skills, Works } from 'src/pages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          component: Home,
          meta: { title: 'Home' }
        },
        {
          path: 'about',
          component: About,
          meta: { title: 'About' }
        },
        {
          path: 'skills',
          component: Skills,
          meta: { title: 'Skills' }
        },
        {
          path: 'works',
          component: Works,
          meta: { title: 'Works' }
        }
      ]
    },
    {
      path: '*',
      component: NotFound,
      meta: { title: 'NotFound' }
    }
  ]
})
