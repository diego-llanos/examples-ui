import { lazy } from 'react';

const pages: any = {
  APP_MAIN: {
    path: '/main',
    component: lazy(() => import('./examples/Drop')),
  },
  APP_DEMO: {
    path: '/cart',
    component: lazy(() => import('./examples/Demo2')),
  },
  APP_CUSTOMER: {
    path: '/customer',
    component: lazy(() => import('./examples/Customer')),
  },
  APP_TABLE: {
    path: '/table',
    component: lazy(() => import('./examples/Table')),
  },
};

export default pages;
