import Vue from 'vue'
import Router from 'vue-router'
import Lending from '@/views/Lending'

Vue.use(Router)

export default new Router({
    mode:'history',
    routes:[
      {
        path:'/',
        component: Lending
      },
      {
        path:'/office/:id',
        component: ()=> import('@/views/Office'),
        children: [
          { 
            path: '',  
            component: ()=> import('@/components/office/Team') 
          }
        ]
      }
    ]
  })
  