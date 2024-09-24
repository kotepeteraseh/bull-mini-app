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
/* Overall Container Styling */
.leaderboard-container {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background: rgb(18, 1, 1); /* Black background */
  padding: 25px;
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); /* Shadow for depth */
  max-width: 800px;
  margin: auto; /* Center horizontally */
  color: rgb(9, 1, 1); /* White text for contrast */
}

/* Leaderboard Title Styling */
h2 {
  color: #FFD700; /* Gold color for title */
  font-size: 2.5em;
  margin-bottom: 20px;
  text-shadow: 0 3px 10px rgba(255, 215, 0, 0.7); /* Glow effect for title */
}

/* Ranks Section Styling */
.ranks {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Tier Container Styling */
.tier {
  background: #1a1a1a; /* Dark background for tiers */
  border-radius: 15px; /* Rounded corners */
  padding: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3); /* Subtle shadow for depth */
  transition: transform 0.3s ease-in-out; /* Smooth hover effect */
}

.tier:hover {
  transform: translateY(-5px); /* Slight lift on hover */
}

/* Tier Heading Styling */
.tier h3 {
  font-size: 1.8em;
  margin-bottom: 15px;
  color: #FFFFFF; /* White text for contrast */
}

/* Tier List Styling */
.tier ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Tier Item Styling */
.tier li {
  font-size: 1.3em;
  margin-bottom: 10px;
  color: #b3b3b3; /* Light gray text */
  display: flex;
  justify-content: space-between; /* Align items */
}

/* Score Styling */
.tier li .score {
  font-weight: bold;
}

/* Gold Tier Specific Styling */
.gold {
  border: 2px solid #FFD700; /* Gold border */
  color: #FFD700; /* Gold text */
}

/* Silver Tier Specific Styling */
.silver {
  border: 2px solid #C0C0C0; /* Silver border */
  color: #C0C0C0; /* Silver text */
}

/* Bronze Tier Specific Styling */
.bronze {
  border: 2px solid #CD7F32; /* Bronze border */
  color: #CD7F32; /* Bronze text */
}

/* Responsive Design Adjustments */
@media screen and (max-width: 768px) {
  .leaderboard-container {
    padding: 15px; /* Reduce padding */
  }
  h2 {
    font-size: 2em; /* Smaller title font size */
  }
  .tier h3 {
    font-size: 1.5em; /* Smaller tier heading */
  }
  .tier li {
    font-size: 1.1em; /* Smaller list item font size */
  }
}
</style>
