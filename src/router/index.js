import Vue from 'vue'
import VueRouter from 'vue-router'
import Characters from '../components/Characters'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import LogOut from '../components/LogOut';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'characters',
    component: Characters
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogOut
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
