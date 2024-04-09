import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  routes: [
    {
      path: "/",
      component: () => import('@/layouts/main.vue'),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/pages/index.vue")
        },
        {
          path: "/search",
          name: "search",
          component: () => import("@/pages/search.vue")
        },
        {
          path: "/register",
          name: "register",
          component: () => import("@/pages/register.vue")
        }
      ],
    },
  ],
  history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
