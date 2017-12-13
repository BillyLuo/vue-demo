import Vue from 'vue'
import Router from 'vue-router'
const Login = () => import('@/components/Login');
const Register = () =>  import('@/components/register/Register');
const Home = () => import('@/components/home/Home');
const Body = () => import ('@/components/home/children/Body');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      component:Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path:'/home',
      name:'Home',
      component:Home,
      children:[
        {path:'body',name:'Body',component:Body}
      ]
    }
  ]
})
