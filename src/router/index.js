import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '@/components/subComponents/AppMain'
import home from '@/views/home'
import login from '@/views/login'
import AIface from '@/views/AIface'
import watchList from '@/views/watchList'
import watchM from '@/views/watchM'
import bigScreen from '@/views/bigScreen'
import EnterIn from '@/views/EnterIn'
import mapDisplay from '@/views/mapDisplay'
import faceM from '@/views/faceM'
import carIn from '@/views/carIn'

let routers=[
  {
    path:'/login',
    component:login,
  },
  {
    path:'/bigScreen',
    component:bigScreen,
  },
  {
    path:'/mapDisplay',
    component:mapDisplay,
  },
  // {
  //   path:'/EnterIn',
  //   component:EnterIn,
  // },
  {
    path:'/',
    component:AppMain,
    redirect:'/EnterIn',
     children: [
       {path:'/EnterIn',
        component:EnterIn,
       },
       {path:'/AIface',
        component:AIface,
       },
       {path:'/carIn',
        component:carIn,
       },
       {path:'/faceM',
        component:faceM,
       },
       {path:'/watchList',
        component:watchList,
       },
       {path:'/watchM',
        component:watchM,
       }
     ]
  },
]

export default routers;
