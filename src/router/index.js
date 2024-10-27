import Qr1 from '@/components/qr1.vue'
import Qr3 from '@/components/qr3.vue'
import Tickets from '@/components/tickets.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/tickets', name: 'Tickets', component: Tickets },
  { path: '/qr1', name: 'Qr1', component: Qr1 },
  { path: '/', name: 'Qr3', component: Qr3 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
