import { createRouter, createWebHistory } from 'vue-router'
import LayoutContainer from '@/views/layout/LayoutContainer'
import articlemanage from '@/views/article/articlemanage'
import articlechannel from '@/views/article/articlechannel'
import UserProfile from '@/views/user/UserProfile'
import UserAvatar from '@/views/user/UserAvatar'
import Userpassword from '@/views/user/Userpassword'
import LoginPage from '@/views/login/LoginPage'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LayoutContainer',
      component: LayoutContainer,
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: articlemanage
        },
        {
          path: '/article/channel',
          component: articlechannel
        },
        {
          path: '/user/profile',
          component: UserProfile
        },
        {
          path: '/user/avatar',
          component: UserAvatar
        },
        {
          path: '/user/password',
          component: Userpassword
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    }
  ]
})

export default router
