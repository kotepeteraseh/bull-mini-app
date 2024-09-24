// store/index.js
// store/index.js
import { createStore } from 'vuex';
import user from '../src/model/user';

export default createStore({
  modules: {
    user,
  },
});
