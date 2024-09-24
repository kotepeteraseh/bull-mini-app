import  { createApp } from 'vue'; // ✅ Vue 3 syntax
import App from './App.vue';
import router from './router';
import store  from './store'; // Import router if using Vue Router
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
const app = createApp(App); // Create the app
app.use(router); // Use the router
app.use(store);
app.mount('#app'); // Mount the app to the DOM
