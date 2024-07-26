import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BasicView from '../views/BasicView.vue';
import PropsView from '../views/PropsView.vue';
import EmitView from '../views/EmitView.vue';
import SlotView from '../views/SlotView.vue';
import BindSyncView from '../views/BindSyncView.vue';

// http://192.168.100.107:8082/
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/basic', name: 'Basic', component: BasicView },
  { path: '/props', name: 'Props', component: PropsView },
  { path: '/emit', name: 'Emit', component: EmitView },
  { path: '/slot', name: 'Slot', component: SlotView },
  { path: '/bind-sync', name: 'BindSync', component: BindSyncView },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
