const { Client, IntentsBitField } = require("discord.js");
require("dotenv/config");

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds],
});

client.on("ready", () => {
  console.log("Bot is Ready");
});

client.login(process.env.TOKEN);
