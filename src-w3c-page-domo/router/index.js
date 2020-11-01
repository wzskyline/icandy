import Vue from 'vue';
import VueRouter from 'vue-router'; 
Vue.use(VueRouter);
 
function view(name) {
  name = !name.startsWith('/') ? '/' + name : name;
  return function(resolve) { require(['@/views' + name], resolve); };
}

const routes = [
  { path: '*', redirect: '/' }, 
  { path: '/Home1', name: 'Home1',component: view('/Home1.vue') },
  { path: '/Home2', name: 'Home2',component: view('/Home2.vue') },
  { path: '/Home3', name: 'Home3',component: view('/Home3.vue') },
  { path: '/home', name: 'List',component: view('/List.vue') },
  { path: '/', name: 'Detail',component: view('/Detail.vue') },
];

const router = new VueRouter({ mode: 'hash', routes });

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
} 
export default router;
