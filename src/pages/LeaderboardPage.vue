<template>
  <div class="leaderboard-container">
    <h2>🏆 Leaderboard 🏆</h2>
    <div class="ranks">
      <div class="tier gold">
        <h3>Gold Tier</h3>
        <ul>
          <li v-for="(player, index) in goldPlayers" :key="index">
            {{ player.username }} - <span class="score">{{ player.score }} points</span>
          </li>
        </ul>
      </div>
      <div class="tier silver">
        <h3>Silver Tier</h3>
        <ul>
          <li v-for="(player, index) in silverPlayers" :key="index">
            {{ player.username }} - <span class="score">{{ player.score }} points</span>
          </li>
        </ul>
      </div>
      <div class="tier bronze">
        <h3>Bronze Tier</h3>
        <ul>
          <li v-for="(player, index) in bronzePlayers" :key="index">
            {{ player.username }} - <span class="score">{{ player.score }} points</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeaderboardPage',
  data() {
    return {
      goldPlayers: [],
      silverPlayers: [],
      bronzePlayers: []
    };
  },
  async created() {
    const response = await fetch('/api/leaderboard');
    const players = await response.json();

    this.goldPlayers = players.filter(player => player.score >= 1000);
    this.silverPlayers = players.filter(player => player.score >= 500 && player.score < 1000);
    this.bronzePlayers = players.filter(player => player.score >= 100 && player.score < 500);
  }
};
</script>

<style scoped>
.leaderboard-container {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background: #f5f5f5; /* Light background for the container */
  padding: 20px;
  border-radius: 10px; /* Rounded corners for the container */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  max-width: 800px; /* Constrain width for better readability */
  margin: auto; /* Center horizontally */
}

h2 {
  color: #00796b; /* Dark teal for the title */
  font-size: 2.5em;
  margin-bottom: 20px;
}

.ranks {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.tier {
  background: #ffffff; /* White background for each tier */
  border-radius: 8px; /* Rounded corners for each tier */
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.tier h3 {
  color: #004d40; /* Darker color for tier headings */
  font-size: 1.8em;
  margin-bottom: 10px;
}

.tier ul {
  list-style: none;
  padding: 0;
}

.tier li {
  font-size: 1.2em;
  margin-bottom: 8px;
  color: #333; /* Darker color for text */
}

.tier li .score {
  font-weight: bold;
}

.gold {
  border: 2px solid #ffd700; /* Gold border for Gold Tier */
}

.silver {
  border: 2px solid #c0c0c0; /* Silver border for Silver Tier */
}

.bronze {
  border: 2px solid #cd7f32; /* Bronze border for Bronze Tier */
}
</style>
