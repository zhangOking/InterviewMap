import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Main',
    component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue'),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/Main/About.vue')
      },
      {
        path: 'FE',
        component: () => import(/* webpackChunkName: "fe" */ '../views/Main/FE.vue')
      }
    ]
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import(/* webpackChunkName: "content" */ '../views/Content.vue')
  },
  {
    path: '/editcontent',
    name: 'Editcontent',
    component: () => import(/* webpackChunkName: "editcontent" */ '../views/EditContent.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
