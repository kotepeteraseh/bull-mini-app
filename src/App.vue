<template>
  <div id="app">
    <header>
      <h1>Bull Coin</h1>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <nav>
        <router-link to="/Home">Home</router-link>
        <router-link to="/leaderboard">Leaderboard</router-link>
        <router-link to="/tasks">Invite</router-link>
      </nav>
    </footer>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',
  mounted() {
    this.giveReward();
  },
  methods: {
    ...mapActions(['giveReward']),
  },
};
</script>

<style scoped>
#app {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

header {
  background-color: #4CAF50;
  color: white;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

header h1 {
  margin: 0;
  font-size: 2em;
}

main {
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
}

footer {
  background-color: #4CAF50;
  padding: 15px;
  text-align: center;
  color: white;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
}

nav {
  display: flex;
  justify-content: center;
  gap: 15px;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

nav a:hover {
  color: #e1f5fe;
}

nav a.router-link-exact-active {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 600px) {
  header h1 {
    font-size: 1.5em;
  }

  nav {
    flex-direction: column;
  }

  nav a {
    margin-bottom: 10px;
  }

  footer {
    padding: 10px;
  }
}
</style>
