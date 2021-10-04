import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import Login from '@/views/login/login'
import Register from '@/views/register'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login', // 路由名称
    component: Login, // 组件对象
    meta: { requiresAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { requiresAuth: true }
  },
  {
    path: '/main',
    name: '/main',
    meta: { requiresAuth: false },
    component: Main,
    redirect: '/course-scheduling',
    children: [
      {
        path: '/course-scheduling',
        component: () => import('@/views/course-scheduling/CourseScheduling.vue')
      },
      {
        path: '/course-scheduling-list',
        component: () => import('@/views/course-scheduling-list/CourseSchedulingList.vue')
      },
      {
        path: '/classroom',
        component: () => import('@/views/classroom/Classroom.vue')
      },
      {
        path: '/course',
        component: () => import('@/views/course/Course.vue')
      },
      {
        path: '/teacher',
        component: () => import('@/views/teacher/Teacher.vue')
      },
      {
        path: '/report',
        component: () => import('@/views/report/Report.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
