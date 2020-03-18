import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import ViewCourses from '../views/ViewCourses.vue'
import CreateCourse from '../views/CreateCourse.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/courses',
    component: ViewCourses,
  },
  {
    path: '/new',
    component: CreateCourse,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
