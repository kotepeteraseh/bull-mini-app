<template>
  <div class="game-container">
    <h1>Play the Bull Coin Game</h1>
    <h3 class="score">{{ totalScore }}</h3>
    <div class="memory-grid">
      <MemoryCard
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :isFlipped="flippedCards.includes(index) || card.matched"
        @flip-card="handleFlipCard(index)"
      />
    </div>
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
      flippedCards: [], // Contains indexes, not objects
      totalScore: 0,
    };
  },
  methods: {
    handleFlipCard(index) {
      if (this.flippedCards.length === 2 || this.cards[index].matched) return;

      // Add the card's index to the flippedCards array
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
        // Mark both cards as matched
        this.cards[firstIndex].matched = true;
        this.cards[secondIndex].matched = true;
        this.totalScore += 10;
      }

      // Clear flipped cards whether they match or not
      this.flippedCards = [];
    },
    generateCards() {
      const symbols = ['🍎', '🍌', '🍇', '🍓', '🍉', '🍒', '🍍', '🥝'];
      let cardDeck = symbols.concat(symbols).map(symbol => ({
        symbol,
        matched: false,
      }));

      // Shuffle the deck
      return cardDeck.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style scoped>
.game-container {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background: #f0f8ff; /* Light background for the entire container */
  padding: 20px;
  border-radius: 10px; /* Rounded corners for a softer look */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  max-width: 600px; /* Constrain width for better readability */
  margin: auto; /* Center container horizontally */
}

h1 {
  color: #00796b; /* Dark teal for the header */
  font-size: 2.5em;
  margin-bottom: 20px;
}

h3.score {
  color: #d32f2f; /* Red color for the score */
  font-size: 1.5em;
  margin: 10px 0 20px;
}

.memory-grid {
  display: grid;
  grid-template-columns: repeat(4, 120px); /* Adjust based on card size */
  gap: 10px;
  justify-content: center;
  margin: 20px 0;
}

button {
  display: none; /* Hide the reset button */
}

.memory-card {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2em;
  cursor: pointer;
  transition: transform 0.3s;
}

.memory-card.flipped {
  transform: rotateY(180deg);
}
</style>
