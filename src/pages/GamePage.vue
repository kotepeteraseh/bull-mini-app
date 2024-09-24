<template>
  <div class="game-container">
    <header>
      <h1>Play the Bull Coin Game</h1>
    </header>
    <main>
      <h3 class="score">{{ totalScore }}pt</h3>
      <div class="memory-grid">
        <MemoryCard
          v-for="(card, index) in cards"
          :key="index"
          :card="card"
          :isFlipped="flippedCards.includes(index) || card.matched"
          @flip-card="handleFlipCard(index)"
        />
      </div>
      <button @click="resetGame" class="reset-btn">Reset Game</button>
    </main>
  </div>
</template>

<script>
import MemoryCard from '../components/MemoryCard.vue';

export default {
  name: 'GamePage',
  components: { MemoryCard },
  data() {
    return {
      cards: this.generateCards(),
      flippedCards: [],
      totalScore: 0,
    };
  },
  methods: {
    handleFlipCard(index) {
      if (this.flippedCards.length === 2 || this.cards[index].matched) return;

      this.flippedCards.push(index);

      if (this.flippedCards.length === 2) {
        setTimeout(this.checkForMatch, 1000);
      }
    },
    checkForMatch() {
      const [firstIndex, secondIndex] = this.flippedCards;
      const firstCard = this.cards[firstIndex];
      const secondCard = this.cards[secondIndex];

      if (firstCard.symbol === secondCard.symbol) {
        this.cards[firstIndex].matched = true;
        this.cards[secondIndex].matched = true;
        this.totalScore += 10;
      }

      this.flippedCards = [];
    },
    generateCards() {
      const symbols = ['🍎', '🍌', '🍇', '🍓']; // Reduced number of symbols for fewer cards
      let cardDeck = symbols.concat(symbols).map((symbol) => ({
        symbol,
        matched: false,
      }));
      return cardDeck.sort(() => Math.random() - 0.5);
    },
    resetGame() {
      this.cards = this.generateCards();
      this.flippedCards = [];
      this.totalScore = 0;
    },
  },
};
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  background: rgb(0, 0, 0); /* Soft gray background matching Blum app aesthetics */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px; /* Limit width for mobile view */
  margin: auto; /* Center container on the page */
}

header {
  background-color: rgb(7, 17, 11); /* Header color */
  color: white;
  padding: 15px;
  width: 100%;
  border-radius: 8px 8px 0 0; /* Rounded corners on the top */
}

header h1 {
  margin: 0;
  font-size: 1.5em; /* Responsive font size */
}

main {
  width: 100%;
  padding: 20px;
}

h3.score {
  color: #fffcfc;
  font-size: 1.8em;
  margin: 5px 0;
}

.memory-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two columns for fewer cards */
  gap: 0px;
  justify-content: center;
  margin: 20px 0;
}

.reset-btn {
  background-color: rgb(2, 15, 7); /* Reset button color matching the header */
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.reset-btn:hover {
  background-color: #1976d2; /* Darker shade on hover */
}

/* Mobile View Adjustments */
@media (max-width: 600px) {
  header h1 {
    font-size: 1.4em; /* Adjust header font size for mobile */
  }
  
  h3.score {
    font-size: 1.8em; /* Adjust score font size for mobile */
  }

  .memory-grid {
    grid-template-columns: repeat(2, 1fr); /* Ensure two columns on mobile */
  }
}
</style>
