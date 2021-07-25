import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

//挂载路由守卫
router.beforeEach((to, from, next) => {
  //to 将要访问 from 从哪个路径来 next是一个函数表示放行，next('/login')跳转到login
  if(to.path == '/login') return next();
  const tokenStr = window.sessionStorage.getItem("token")
  if(!tokenStr) return next('/login')
  next()
})
export default router
