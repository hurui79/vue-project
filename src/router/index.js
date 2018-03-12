import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/view/demo'
import index from '@/view/index'
import login from '@/view/login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        title: 'HelloWorld'
      }
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo,
      meta: {
        title: 'demo'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登陆'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (window.localStorage.getItem('Token')) {
        next();
    }
    else {
        next({
            path: '/login',
            query: {redirect: to.fullPath}
        })
    }
  }
  else {
      next();
  }
})

export default router
