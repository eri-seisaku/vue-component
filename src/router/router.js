import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/Layout.vue'),
    children: [
      {
        path: '',
        name: 'upload',
        component: () => import('@/views/upload/ParentUpload.vue'),
      },
      {
        path: '/upload',
        name: 'dragUpload',
        component: () => import('@/components/upload/ChildByReffect.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
