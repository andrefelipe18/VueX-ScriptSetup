import { onMounted } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { Index, ListaItens } from '@/components'

const routes: Array<RouteRecordRaw> = [
  {
      path: '/',
      component: Index,
      children: [
          {
              path: 'profissionais/:tipo',
              name: 'profissionais',
              props: true,
              components: {
                  profissionais: ListaItens
              }
          },
          {
              path: 'equipamentos/:tipo',
              name: 'equipamentos',
              props: true,
              components: {
                  equipamentos: ListaItens
              }
          }
      ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
