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
      {
        path: '/button',
        name: 'button',
        component: () => import('@/components/SomeButton.vue'),
      },
      {
        path: '/form',
        name: 'authForm',
        component: () => import('@/views/AuthForm.vue'),
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('@/components/DataTable.vue'),
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('@/views/Test.vue'),
      },
      {
        path: '/pdf',
        name: 'pdf',
        component: () => import('@/components/ExportPDF.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
