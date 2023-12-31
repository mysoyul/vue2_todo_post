import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/MyHome.vue'
import Posts from '../views/MyPosts.vue';
import PostNew from '../views/PostNew.vue';
import PostDetail from '../views/PostDetail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyAbout.vue')
  },
  {
    path: '/posts', component: Posts,
    children: [
      { path: 'new', component: PostNew },
      { path: ':id', component: PostDetail, name: 'post' }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
