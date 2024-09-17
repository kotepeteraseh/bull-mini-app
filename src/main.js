import { createApp } from 'vue'; // ✅ Vue 3 syntax
import App from './App.vue';
import router from './router';
import store  from './store'; // Import router if using Vue Router

const app = createApp(App); // Create the app
app.use(router); // Use the router
app.use(store);
app.mount('#app'); // Mount the app to the DOM
