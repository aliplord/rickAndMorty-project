import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Home from '../components/Home.vue';
import CharacterDetail from '../components/CharacterDetail.vue';
import Saves from '../components/Saves.vue';
import Profile from '../components/Profile.vue';
import Series from '../components/Series.vue';
import Location from '../components/Location.vue';

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/home', name: 'Home', component: Home },
  { path: '/saves', name: 'Saves', component: Saves },
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/series', name: 'Series', component: Series },
  { path: '/location', name: 'Location', component: Location },
  { path: '/character/:id', name: 'CharacterDetail', component: CharacterDetail, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
