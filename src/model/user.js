// store/modules/user.js
import axios from 'axios';

const state = {
  profile: null,
  totalScore: 0,
};

const mutations = {
  SET_USER_PROFILE(state, profile) {
    state.profile = profile;
    state.totalScore = profile.totalScore || 0;
  },
};

const actions = {
  async fetchUserProfile({ commit }) {
    try {
      const response = await axios.get('https://api.example.com/user/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('authToken')}`, // Adjust this to match your auth system
        },
      });

      // Commit the user profile data to Vuex store
      commit('SET_USER_PROFILE', response.data);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  },
};

const getters = {
  userProfile: (state) => state.profile,
  userTotalScore: (state) => state.totalScore,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
