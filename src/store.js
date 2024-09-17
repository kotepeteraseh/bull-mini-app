// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    coins: 0,
  },
  mutations: {
    addCoins(state, amount) {
      state.coins += amount;
    },
  },
  actions: {
    giveReward({ commit }) {
      // Reward logic here (e.g., daily reward)
      const rewardAmount = 10; // Example reward amount
      commit('addCoins', rewardAmount);
    },
  },
  getters: {
    getCoins(state) {
      return state.coins;
    },
  },
});
