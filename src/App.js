import React, { useState, useEffect } from 'react';
import BotCollection from './components/Botcollection';
import Botarmy from './components/Botarmy';
import './App.css';

function App() {
  // State to store the list of all bots
  const [bots, setBots] = useState([]);

  // State to store the selected bots in the army
  const [selectedBots, setSelectedBots] = useState([]);

  // Fetch bots from the server when the component mounts
  useEffect(() => {
    fetchBots();
  }, []);

  // Function to fetch bots from the server
  function fetchBots() {
    fetch('https://mock-4oke.onrender.com/bots')
      .then((r) => r.json())
      .then((bots) => setBots(bots));
  }

  // Handle the click event for a bot in the collection
  function handleBotClick(bot) {
    setSelectedBots((prevSelectedBots) => (
      // If the bot is already selected, return the previous selected bots array
      prevSelectedBots.find((selectedBot) => selectedBot.id === bot.id)
        ? prevSelectedBots
        // If the bot is not selected, add it to the array of selected bots
        : [...prevSelectedBots, bot]
    ));
  }

  // Handle releasing a bot from the army
  function handleBotRelease(botId) {
    console.log("Releasing Bot ID:", botId);
    setSelectedBots((prevSelectedBots) => {
      // Filter out the released bot from the array of selected bots
      const newSelectedBots = prevSelectedBots.filter((bot) => bot.id !== botId);
      console.log("New Selected Bots:", newSelectedBots);
      return newSelectedBots;
    });
  }

  
  function handleBotDischarge(botId) {
    console.log("Discharging Bot ID:", botId);
    // Delete the bot from the server
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: 'DELETE',
    }).then(() => {
      // Remove the bot from the array of selected bots on the frontend
      setSelectedBots((prevSelectedBots) => prevSelectedBots.filter((bot) => bot.id !== botId));
    });
  }

  // Render the main component
  return (
    <div className="App">
      {/* Render the Botarmy component with the selected bots */}
      <Botarmy army={selectedBots} onBotClick={handleBotClick} onRelease={handleBotRelease} onDischarge={handleBotDischarge} />
      {/* Render the BotCollection component with the list of all bots */}
      <BotCollection bots={bots} onBotClick={handleBotClick} />
    </div>
  );
}


export default App;
