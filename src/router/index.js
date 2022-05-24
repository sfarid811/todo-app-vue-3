import { createRouter, createWebHashHistory } from 'vue-router'
import Todo from '../views/Todo.vue'

const routes = [

  {
    path: '/todo',
    name: 'Todo',
    component: Todo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
