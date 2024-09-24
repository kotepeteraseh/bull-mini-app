<template>
  <div class="memory-card" @click="flipCard">
    <div :class="['inner-card', { flipped: isFlipped }]">
      <!-- Front side of the card (shows the symbol when flipped) -->
      <div class="front">{{ card.symbol }}</div>
      <!-- Back side of the card (what is shown before flipping) -->
      <div class="back">?</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,          // Card object with symbol and matched status
    isFlipped: Boolean     // Boolean to indicate if the card is flipped
  },
  methods: {
    flipCard() {
      // Only emit the flip event if the card isn't already flipped or matched
      if (!this.isFlipped && !this.card.matched) {
        this.$emit('flip-card', this.card);
      }
    }
  }
};
</script>

<style scoped>
.memory-card {
  width: 100px; /* Responsive width */
  height: 100px; /* Adjusted height for hexagon */
  position: relative;
  perspective: 1000px; /* Create 3D space for the flip animation */
  cursor: pointer;
  margin: 10px; /* Adjust margin for spacing */
  transition: transform 0.3s ease-in-out; /* Smooth scaling */
}

.inner-card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); /* Stronger shadow for suspension effect */
  border-radius: 10px; /* Rounded corners for smoother look */
}

.memory-card:hover {
  transform: scale(1.1); /* Scale up on hover */
}

.flipped {
  transform: rotateY(180deg); /* Flip the card on Y axis */
}

.front, .back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden; /* Hide the back side when flipped */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem; /* Adjust font size for mobile */
  border-radius: 10px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); /* Hexagon shape */
  transition: box-shadow 0.3s ease; /* Smooth shadow transition */
}

/* Front of the card */
.front {
  background: linear-gradient(135deg, #FF6B6B, #FFD93D); /* Gradient for more vibrant look */
  color: #fff; /* White text for better contrast */
  transform: rotateY(180deg); /* Initially hidden until flipped */
}

/* Back of the card */
.back {
  background: linear-gradient(135deg, #6BFFB8, #6BD4FF); /* Different gradient for the back */
  color: #fff; /* White text for contrast */
}

.front:hover, .back:hover {
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.8); /* Enhanced shadow on hover */
}
</style>
