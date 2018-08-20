import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ideas from '@/components/Idea/Ideas'
import CreateIdea from '@/components/Idea/CreateIdea'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Idea from '@/components/Idea/Idea'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'Home',
          component: Home
      },
      {
          path: '/ideas',
          name: 'Ideas',
          component: Ideas
      },
      {
          path: '/idea/new',
          name: 'CreateIdea',
          component: CreateIdea
      },
      {
          path: '/ideas/:id',
          name: 'Idea',
          props: true,
          component: Idea
      },
      {
          path: '/profile',
          name: 'Profile',
          component: Profile
      },
      {
          path: '/signin',
          name: 'Signin',
          component: Signin
      },
  ]
})
