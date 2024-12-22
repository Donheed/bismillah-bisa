import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import RulesPage from '../views/RulesPage.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginPage, // Halaman login
  },
  {
    path: '/rules', // Halaman aturan
    name: 'rules',
    component: RulesPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
