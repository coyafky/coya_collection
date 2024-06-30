import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import showAllwebsite from '@/views/showAllwebsite.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
   
  },
  {
    path: '/embed/:id', // 动态路由参数
    name: 'Embed',
    component: () => import('../views/Embed.vue'), // 使用异步组件
  },

  {
    path: '/showAllwebsite',
    name: 'ShowAllWebsite',
    component: showAllwebsite,

  },
  {
    path:'/userlog',
    name:'Userlog',
    component:()=>import('../views/userlog.vue')
  }
  
  // 其他路由配置...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;