import { createRouter, createWebHistory } from 'vue-router';
 // Import your pages/components
import GamePage from './pages/GamePage.vue';
import LeaderboardPage from './pages/LeaderboardPage.vue'
import TasksPage from './pages/TasksPage.vue'

const routes = [
  
  { path: '/Home', component: GamePage },
  {path : '/leaderboard', component: LeaderboardPage},
  {path: '/tasks', component: TasksPage}
];

const router = createRouter({
  history: createWebHistory(), // Use createWebHistory for HTML5 history mode
  routes,
});

export default router;
