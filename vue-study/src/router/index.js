import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/pages/index'//首页
import Other from '@/pages/other'//其他
import Detail from '@/pages/Detail'//详情页
import myInfo from '@/pages/myInfo'//我的信息页
import About from '@/pages/about'//相关页
import List from '@/pages/List'//列表页
import Apple from '@/components/Apple'//Apple
import Orange from '@/components/Orange'//Orange
import Banana from '@/components/Banana'//Banana
import Cart from '@/components/Cart'//Cart

Vue.use(VueRouter)

export default new  VueRouter({
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: 'apple',
          component: Apple
        },
        {
          path: 'orange',
          component: Orange
        },
        {
          path: 'banana',
          component: Banana
        },
        {
          path: 'cart',
          component: Cart
        }
      ]
    },
    {
      path: '/other',
      component: Other
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/myInfo',
      component: myInfo
    },
    {
      path: '/list',
      component: List
    },
    {
      path: '/about',
      component: About
    }

  ]
})
