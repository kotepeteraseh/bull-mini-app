<template> 
  <div class="tasks-container">
    <h2>Complete Tasks and Earn Rewards</h2>
    <ul>
      <li>
        <div class="task">
          Follow us on Twitter 
          <button class="complete-btn" @click="completeTask('twitter')">Complete</button>
        </div>
      </li>
      <li>
        <div class="task">
          Invite a friend 
          <button class="complete-btn" @click="completeTask('invite')">Complete</button>
        </div>
      </li>
      <!-- Add more tasks as needed -->
    </ul>
    <div v-if="message" class="message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'TasksPage',
  data() {
    return {
      message: ''
    };
  },
  methods: {
    async completeTask(task) {
      const response = await fetch(`/api/complete-task`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ task })
      });
      const data = await response.json();
      this.message = data.message;
    }
  }
};
</script>

<style scoped>
.tasks-container {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  background: #121212; /* Dark background for the container */
  padding: 20px;
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Darker shadow */
  max-width: 600px; /* Constrain width for readability */
  margin: auto; /* Center horizontally */
}

h2 {
  color: #ffffff; /* White text for title */
  font-size: 1.8em;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin-bottom: 15px;
}

.task {
  background: #1f1f1f; /* Darker background for tasks */
  border-radius: 8px; /* Rounded corners */
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3); /* Subtle shadow */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.complete-btn {
  background-color: #00e676; /* Green button color */
  color: #000000; /* Black text */
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.3s, transform 0.2s;
}

.complete-btn:hover {
  background-color: #00c853; /* Darker green on hover */
  transform: scale(1.05); /* Slightly scale button on hover */
}

.message {
  margin-top: 20px;
  font-size: 1.2em;
  color: #d32f2f; /* Red color for messages */
}
</style>
