
import React from "react";

function Botcollection({ bots, onBotClick }) {
    // Render the Botcollection component
    return (
        <>
            <h1>Bot collection </h1>
            {/* Container for the collection of bots */}
            <div id="botCollection">
                {/* Map through the array of all bots */}
                {bots.map((bot) => (
                    // Render each bot as a card with a click event handler
                    <div key={bot.id} className="bot-card" onClick={() => onBotClick(bot)}>
                        <img src={bot.avatar_url} alt={bot.name} />
                        <p>{bot.name}</p>
                        <p>Class: {bot.bot_class}</p>
                        <p>Health: {bot.health}</p>
                        <p>Damage: {bot.damage}</p>
                        <p className="catchphrase">{bot.catchphrase}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Botcollection;