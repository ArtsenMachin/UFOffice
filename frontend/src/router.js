import Vue from 'vue'
import Router from 'vue-router'
import Lending from '@/views/Lending'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
      {
        path:'/',
        component: Lending,
        
      },
      {
        path:"/sign_in",
        component: ()=> import('@/components/additional_modules/Signin')
      },
      {
        path:"/login",
        component: ()=> import('@/components/additional_modules/Login') 
      },     
      {
        name:'officeMenu',
        path:'/office_menu',
        component: ()=> import('@/views/Office_menu'),
      },
      {
        path:'/office/:id',
        component: ()=> import('@/views/Office'),
        children:[
          {
            path: 'gameoffice',
            component: ()=> import('@/components/office/GameOffice') 
          },
          {
            path: 'team',
            component: ()=> import('@/components/office/Team') 
          },
          {
            path: 'task',
            component: ()=> import('@/components/office/Task') 
          }
        ]
      },
      {
        path:'/liderboard/:id',
        component: ()=> import('@/views/Liderboard') 
      },
      {
        path: "*",
        component: ()=> import('@/views/Not_found'),
      }
    ]
  })
  