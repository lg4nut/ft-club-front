import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/h',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/',
      component:()=>import('@/components/index5'),
      name:'inplay'
    },
    {
      path:'/regis',
      component:()=>import('@/components/registerForm'),
      name:'regis'
    },
  ]
})

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
