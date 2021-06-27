import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import userRouter from './user'

Vue.use(VueRouter)

// const routes = [

// {
//   path: '/about',
//   name: 'About',
//   component: () => import('../views/About.vue')
// }
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    cinemaRouter,
    userRouter,
    {
      path: '/*',
      redirect: '/movie'
    }
  ]
})

export default router
