<template>
    <div class="wallet-container">
      <!-- Header Section -->
      <div class="header-section">
        <h2>Get real crypto. Earn and buy any tokens.</h2>
        <button class="connect-wallet-btn">Connect wallet</button>
      </div>
  
      <!-- Points Section -->
      <div class="points-section">
        <h3>Points</h3>
        <div class="points-header">
          <div 
            class="balance-tab" 
            :class="{ active: activeTab === 'balance' }"
            @click="switchTab('balance')"
          >
            Balances
          </div>
          <div 
            class="history-tab" 
            :class="{ active: activeTab === 'history' }"
            @click="switchTab('history')"
          >
            History
          </div>
          <div class="wallet-balance">$0</div>
        </div>
        
        <div class="points-content">
          <!-- Balance Section -->
          <div v-if="activeTab === 'balance'">
            <div class="earn-more">
              <span class="icon">⚡</span>
              <span>Earn more in Drop game, Tasks and Quests.</span>
            </div>
            <div class="blum-points">
              <span class="icon">ℙ</span>
              <span>Bull points</span>
              <span class="points">20,191 Bl</span>
              <button class="farm-btn">Ready to farm</button>
            </div>
          </div>
          <!-- History Section -->
          <div v-if="activeTab === 'history'">
            <p>No history available.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConnectWallet',
    data() {
      return {
        activeTab: 'balance', // Default active tab
      };
    },
    methods: {
      switchTab(tab) {
        this.activeTab = tab;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Main Container */
  .wallet-container {
    background-color: #000; /* Dark background */
    color: #fff; /* White text */
    padding: 20px;
    font-family: 'Arial', sans-serif;
  }
  
  /* Header Section */
  .header-section {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .header-section h2 {
    font-size: 1.4em;
    margin-bottom: 10px;
  }
  
  .connect-wallet-btn {
    background-color: #fff;
    color: #000;
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s;
  }
  
  .connect-wallet-btn:hover {
    background-color: #ddd;
  }
  
  /* Points Section */
  .points-section {
    background-color: #1a1a1a; /* Slightly lighter background */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .points-section h3 {
    font-size: 1.2em;
    margin-bottom: 15px;
  }
  
  /* Points Header */
  .points-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .balance-tab, .history-tab {
    flex: 1;
    padding: 10px 0;
    text-align: center;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: border-bottom 0.3s;
  }
  
  .balance-tab.active, .history-tab.active {
    border-bottom: 2px solid #00bcd4; /* Active tab underline color */
  }
  
  .wallet-balance {
    font-size: 1.2em;
  }
  
  /* Points Content */
  .points-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  .earn-more {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #2e2e2e;
    border-radius: 8px;
  }
  
  .icon {
    font-size: 1.5em;
    margin-right: 10px;
  }
  
  .blum-points {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #2e2e2e;
    padding: 10px;
    border-radius: 8px;
  }
  
  .blum-points .points {
    font-size: 1.1em;
  }
  
  .farm-btn {
    background-color: #00bcd4;
    color: #fff;
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .farm-btn:hover {
    background-color: #0097a7;
  }
  
  /* Responsive Design */
  @media (max-width: 600px) {
    .header-section h2 {
      font-size: 1.2em;
    }
  
    .connect-wallet-btn {
      padding: 8px 15px;
    }
  
    .points-header .wallet-balance {
      font-size: 1em;
    }
  
    .points-content .blum-points .points {
      font-size: 1em;
    }
  
    .farm-btn {
      padding: 6px 10px;
    }
  }
  </style>
  