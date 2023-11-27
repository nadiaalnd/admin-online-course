import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/',
      component: () => import('../layouts/default.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('../pages/dashboard.vue'),
        },
        {
          path: 'management-class',
          component: () => import('../pages/management-class.vue'),
        },
        {
          path: '/management-lesson',
          component: () => import('../pages/management-lesson.vue'),
        },
        {
          path: 'detail',
          component: () => import('../views/management-content/lesson/DetailLesson.vue'),
        },
        {
          path: 'create',
          component: () => import('../views/management-content/lesson/AddDetailLesson.vue'),
        },
        {
          path: 'management-users',
          component: () => import('../pages/management-user.vue'),
        },
        {
          path: 'account-settings',
          component: () => import('../pages/template/account-settings.vue'),
        },
        {
          path: 'typography',
          component: () => import('../pages/template/typography.vue'),
        },
        {
          path: 'icons',
          component: () => import('../pages/template/icons.vue'),
        },
        {
          path: 'cards',
          component: () => import('../pages/template/cards.vue'),
        },
        {
          path: 'tables',
          component: () => import('../pages/template/tables.vue'),
        },
        {
          path: 'form-layouts',
          component: () => import('../pages/template/form-layouts.vue'),
        },
      ],
    },
    {
      path: '/',
      component: () => import('../layouts/blank.vue'),
      children: [
        {
          path: 'login',
          component: () => import('../pages/template/login.vue'),
        },
        {
          path: 'register',
          component: () => import('../pages/template/register.vue'),
        },
        {
          path: '/:pathMatch(.*)*',
          component: () => import('../pages/[...all].vue'),
        },
      ],
    },
  ],
})

export default router
