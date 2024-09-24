<template>
  <main>
    <div id="App" class="bull-coin-app">
      <!-- Header Section -->
      
      
       <router-view/>
      <!-- Bottom Navigation -->
      <footer class="nav-bar">
        <router-link to="/Home" class="nav-item"> 
          <img src="../src/assets/home.png" alt="Home">
          <span class="nav-title">Home</span>
        </router-link>
        <router-link to="/leaderboard" class="nav-item">
          <img src="../src/assets/money.png" alt="Leaderboard">
          <span class="nav-title">Leaderboard</span>
        </router-link>
        <router-link to="/tasks" class="nav-item">
          <img src="../src/assets/friends.png" alt="Tasks">
          <span class="nav-title">Tasks</span>
        </router-link>
        <router-link to="/connectwallet" class="nav-item">
          <img src="../src/assets/wallet.png" alt="Wallet">
          <span class="nav-title">Wallet</span>
        </router-link>
      </footer>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      user: null,
      totalScore: 0,
    };
  },
  async created() {
    try {
      this.user = await this.getUserProfile();
      this.totalScore = this.user.totalScore || 0;
    } catch (error) {
      console.error('Failed to load user profile:', error);
    }
  },
  methods: {
    async getUserProfile() {
      try {
        const response = await axios.get('https://api.example.com/user/profile', {
          headers: {
            Authorization: `Bearer ${this.getAuthToken()}`,
          },
        });
        return {
          username: response.data.username,
          profilePic: response.data.profilePic,
          totalScore: response.data.totalScore || 0,
        };
      } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
      }
    },
    getAuthToken() {
      return localStorage.getItem('authToken');
    },
    // Navigate to Game Page
    goToGamePage() {
      console.log('Navigating to game page');
      this.$router.push('/Home'); // Update to correct path
    },
  },
};
</script>

<style scoped>
/* Overall App Styling */
.bull-coin-app {
  font-family: 'Roboto', sans-serif;
  background-color: black;
  color: rgb(245, 243, 243);
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0% 0px 0px 0px;
}

/* Header Styling */
.app-header {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: black;
}

.app-header h1 {
  font-size: 1.5em;
  margin: 0;
}

.menu-icon {
  font-size: 1.5em;
  cursor: pointer;
}

/* Action Section */
.action-section {
  margin-top: 20px;
}



/* Bottom Navigation Bar */
.nav-bar {
  display: flex;
  justify-content: space-around;
  background-color: black;
  padding: 0px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); /* Added shadow for separation */
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none; /* Remove underline */
  color: rgb(245, 243, 243); /* Text color */
  font-size: 0.8em; /* Adjusted font size */
}

.nav-item img {
  width: 30px;
  height: 30px;
}

.nav-title {
  margin-top: 4px; /* Space between icon and title */
}
</style>
