import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Post from './views/Post.vue'
import Category from './views/Category.vue'
import Example from './components/Example.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/post',//trzeba bedzie link zmienic
      name: 'post',
      component: Post
    },
    {
      path: '/category',//trzeba bedzie link zmienic
      name: 'category',
      component: Category
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/example',//trzeba bedzie link zmienic
      name: 'example',
      component: Example
    },
  ]
})
