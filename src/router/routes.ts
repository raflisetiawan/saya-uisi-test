import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/home/IndexPage.vue'),
        name: 'HomePage',
      },
    ],
  },
  {
    path: '/study-history',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/study-history/IndexPage.vue'),
        name: 'StudyHistoryPage',
      },
    ],
  },
  {
    path: '/bill-list',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/bill-list/IndexPage.vue'),
        name: 'BillListPage',
      },
    ],
  },
  {
    path: '/list-of-class-session',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/list-of-class-sessions/IndexPage.vue'),
        name: 'ListOfClassSessions',
      },
    ],
  },
  {
    path: '/signin',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/auth/SignInPage.vue'),
        name: 'SignInPage',
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
