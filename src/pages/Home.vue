
   <template>
     <section class="reward-banner">
        <div class="banner-content">
          <img src="/path-to-star-icon.png" alt="Rewards" />
          <p>Compete for rewards</p>
          <button class="open-btn">Open</button>
        </div>
      </section>
  
      <!-- Profile Section -->
      <section class="profile-section">
        <img src="/path-to-user-icon.png" alt="User Profile" class="profile-pic">
        <h2>{{ username }}</h2>
        <p class="coin-balance">₿ {{ totalCoins }}</p>
      </section>


   </template> <!-- Reward Banner -->
   
   <script>
   import axios from 'axios';
   
   export default {
     name: 'HomePage',
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
  color: white;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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

/* Reward Banner Styling */
.reward-banner {
  background-color: #333;
  padding: 15px;
  border-radius: 10px;
  margin: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reward-banner img {
  width: 40px;
  height: 40px;
}

.open-btn {
  background-color: white;
  color: black;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
}

/* Profile Section */
.profile-section {
  margin-top: 20px;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.coin-balance {
  font-size: 2em;
  margin: 10px 0;
}

/* Farming Action Section */
.action-section {
  margin-top: 20px;
}

.action-btn {
  background-color: white;
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2em;
}
</style>