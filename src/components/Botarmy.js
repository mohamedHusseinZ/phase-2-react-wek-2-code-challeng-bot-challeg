import React from 'react';

function Botarmy({ onBotClick, onRelease, onDischarge, army }) {
  console.log("Botarmy is rendering");

  // Handle the click event for releasing a bot from the army
  const handleReleaseClick = (botId) => {
    console.log("Release Clicked for Bot ID:", botId);
    onRelease(botId);
  };

  // Handle the click event for discharging a bot from the army
  const handleDischargeClick = (botId) => {
    console.log("Discharge Clicked for Bot ID:", botId);
    onDischarge(botId);
  };

  // Render the Botarmy component
  return (
    <>
      <h2>Your Bot Army</h2>
      <div id="botArmy">
     
             {/* Map through the array of selected bots in the army */}
        {army.map((bot) => (
          <div key={bot.id} className={`card bot-card ${army.includes(bot) ? 'active' : ''}`}>
            <div onClick={() => onBotClick(bot)}>
              <img src={bot.avatar_url} alt={bot.name} />
              <p>{bot.name}</p>
              <p>Class: {bot.bot_class}</p>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p className="catchphrase">{bot.catchphrase}</p>
              <button className="release" onClick={() => handleReleaseClick(bot.id)}>X</button>
              <button className="discharge-button" onClick={() => handleDischargeClick(bot.id)}>Release</button>
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default Botarmy;