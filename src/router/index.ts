import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/home.vue';
import Detail from '../views/detail.vue';
import Text from '../views/text.vue'

// 这里定义路由
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }, {
    path: '/detail',
    name: 'detail',
    component: Detail
  }, {
    path: '/text',
    name: 'text',
    component: Text
  }]
});

export default router;