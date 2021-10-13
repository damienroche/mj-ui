import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import(/* webpackChunkName: "forms" */ '../views/Forms.vue')
  },
  {
    path: '/programmatic',
    name: 'Programmatic',
    component: () => import(/* webpackChunkName: "programmatic" */ '../views/Programmatic.vue')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue')
  },
  {
    path: '/utilities',
    name: 'Utilities',
    component: () => import(/* webpackChunkName: "utilities" */ '../views/Utilities.vue')
  }
];

const router = new VueRouter({
  routes
});

export default router;
