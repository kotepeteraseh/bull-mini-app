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
  width: 120px;
  height: 120px;
  position: relative;
  perspective: 1000px;       /* Create 3D space for the flip animation */
  cursor: pointer;
}

.inner-card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
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
  font-size: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Front of the card */
.front {
  background-color: #fff;
  transform: rotateY(180deg); /* Initially hidden until flipped */
}

/* Back of the card */
.back {
  background-color: #ffe4e1;
}
</style>
