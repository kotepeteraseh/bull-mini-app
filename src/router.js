import { createRouter, createWebHistory } from 'vue-router';
 // Import your pages/components
 import HomePage from  './pages/Home.vue'
import GamePage from './pages/GamePage.vue';
import LeaderboardPage from './pages/LeaderboardPage.vue'
import TasksPage from './pages/TasksPage.vue'
import ConnectWallet from './pages/ConnectWallet.vue';


const routes = [
  
  { path: '/Home', component: HomePage },
  { path: '/', component: HomePage },
  {path : '/game', component: GamePage},
  {path : '/leaderboard', component: LeaderboardPage},
  {path: '/tasks', component: TasksPage},
  {path: '/connectwallet', component: ConnectWallet}
];

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for HTML5 history mode
  routes,
});

export default router;
