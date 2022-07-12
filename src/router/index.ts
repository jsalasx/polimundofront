import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue';
import  Ticket  from '../views/Ticket.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Ticket/',
    name: 'Ticket',
    component: Ticket
   
}
  
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router