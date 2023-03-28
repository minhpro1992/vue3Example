import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/todos',
      name: 'todo',
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/products',
      name: 'Product',
      component: import('../pages/SearchCompositionAPI.vue')
      // component: () => import('../pages/AllProducts.vue')
    },
    {
      path: '/products/:pid',
      name: 'Product detail',
      component: () => import('../pages/ProductDetails.vue'),
      // component: () => import('../pages/ProductDetails.vue'),
      props: true
    },
    {
      path: '/products/add',
      name: 'Add product',
      component: () => import('../pages/AddProduct.vue')
      // component: () => import('../pages/AddProduct.vue')
    }
  ]
})

export default router
