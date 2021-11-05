import Vue from 'vue';
import Router from 'vue-router';

import Lending from '../templates/LendingPage.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Lending',
      component: Lending,
    },
    {
      path: '/office',
      component: () => import('../templates/OfficePage.vue'),
      children: [
        {
          path: '',
          component: () => import('../OfficeComponents/Organizm/OfficeMenu.vue'),
        },
        {
          path: '/gameoffice',
          component: () => import('../OfficeComponents/Organizm/GameOffice.vue'),
        },
        {
          path: '/team',
          component: () => import('../OfficeComponents/Organizm/TeamPage.vue'),
        },
        {
          path: '/task',
          component: () => import('../OfficeComponents/Organizm/TaskPage.vue'),
        },
        {
          path: '/leaderboard',
          component: () => import('../OfficeComponents/Organizm/LiderBoard.vue'),
        },
        {
          path: '/ability',
          component: () => import('../OfficeComponents/Organizm/AbilityPage.vue'),
        },
        {
          path: '*',
          component: () => import('../templates/NotFound.vue'),
        },
      ],
    },
    {
      path: '*',
      component: () => import('../templates/NotFound.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && !localStorage.getItem('token')) {
    next({ name: 'Lending' });
  } else next();
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === from.fullPath) {
    next(false);
  } else next();
});

export default router;
