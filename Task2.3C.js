import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import the components for your routes
import Home from './components/Home.vue'; // Import your Home component
import About from './components/About.vue'; // Import your About component

const routes = [
  { path: './', component: Home }, // Define the component for the '/' route
  { path: './about', component: About }, // Define the component for the '/about' route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
