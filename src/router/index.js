  import { createRouter, createWebHistory } from 'vue-router'

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'HomeView',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/HomeView.vue')
      },
      {
        path: '/certificate',
        name: 'Certificate',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/CertificateView.vue')
      },
      {
        path: '/resume',
        name: 'Resume',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/ResumeView.vue')
      },
      {
        path: '/admin',
        name: 'Admin',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AdminView.vue')
      }
    ]
  })

  export default router
