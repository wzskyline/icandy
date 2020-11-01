import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue'; 
Vue.use(VueRouter);
 
function view(name) {
  name = !name.startsWith('/') ? '/' + name : name;
  return function(resolve) {
    require(['@/views' + name], resolve);
  };
}

const routes = [
  { path: '*', redirect: '/' },
  { path: '/home', name: 'home', component: Home },
  { path: '/', name: 'List',component: view('/List.vue') },
  { path: '/Detail', name: 'Detail',component: view('/Detail.vue') },
];

const router = new VueRouter({ mode: 'hash', routes });

// router.beforeEach(async (to, from, next) => {
//   // 全局路由钩子
// });

export default router;
