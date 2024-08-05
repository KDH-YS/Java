import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/root/HomeView.vue'
import BasicView from '@/views/BasicView.vue'
import ExamView from '@/views/firstweek/ExamView.vue'
import TestView from '@/views/TestView.vue'
import TestView1 from '@/views/firstweek/TestView1.vue'
import TestView2 from '@/views/firstweek/TestView2.vue'
import TestView3 from '@/views/firstweek/TestView3.vue'
import TestView4 from '@/views/firstweek/TestView4.vue'
import TestView5 from '@/views/firstweek/TestView5.vue'
import TestView6 from '@/views/firstweek/TestView6.vue'
import DeepView from '@/views/firstweek/DeepView.vue'
import DeepView2 from '@/views/firstweek/DeepView2.vue'
import CalculatorView1 from '../views/CalculatorView1.vue'
import CalculatorView2 from '../views/CalculatorView2.vue'
import CalculatorView3 from '../views/CalculatorView3.vue'
import CalculatorView4 from '../views/CalculatorView4.vue'
import MixView from '@/views/MixView.vue'
import UserView from '@/views/UserView.vue'
import MemberView from '@/views/MemberView.vue'

const routes = [
  {
    path: '/member',
    name: 'MemberView',
    component: MemberView
  },
  {
    path: '/user',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/mixin',
    name: 'MixView',
    component: MixView
  },
  {
    path: '/test',
    name: 'TestView',
    component: TestView
  },
  {
    path: '/test6',
    name: 'TestView6',
    component: TestView6
  },
  {
    path: '/test5',
    name: 'TestView5',
    component: TestView5
  },
  {
    path: '/test4',
    name: 'TestView4',
    component: TestView4
  },
  {
    path: '/test3',
    name: 'TestView3',
    component: TestView3
  },
  {
    path: '/test2',
    name: 'TestView2',
    component: TestView2
  },
  {
    path: '/exam',
    name: 'ExamView',
    component: ExamView
  },
  {
    path: '/basic',
    name: 'BasicView',
    component: BasicView
  },
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/App/test1',
    name: 'TestView1',
    component: TestView1
  },
  {
    path: '/deep',
    name: 'DeepView',
    component: DeepView
  },
  {
    path: '/deep2',
    name: 'DeepView2',
    component: DeepView2
  },
  {
    path: '/about',
    name: 'AboutView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/root/AboutView.vue')
  },
  {
    path: '/calculator1',
    name: 'calculator1',
    component: CalculatorView1
  },
  {
    path: '/calculator2',
    name: 'calculator2',
    component: CalculatorView2
  },
  {
    path: '/calculator3',
    name: 'calculator3',
    component: CalculatorView3
  },
  {
    path: '/calculator4',
    name: 'calculator4',
    component: CalculatorView4}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
