const { Client, GatewayIntentBits } = require("discord.js");
const axios = require("axios");

// CHANGE THIS TO YOUR NGROK URL
const RELAY_URL = "https://YOUR_NGROK_URL/fromDiscord";

// CHANGE THIS TO YOUR DISCORD BOT TOKEN
const TOKEN = "YOUR_BOT_TOKEN";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.on("ready", () => {
    console.log(`Bot logged in as ${client.user.tag}`);
});

client.on("messageCreate", async (msg) => {
    if (msg.author.bot) return;

    try {
        await axios.post(RELAY_URL, {
            author: msg.author.username,
            content: msg.content
        });
        console.log("Sent to relay:", msg.content);
    } catch (err) {
        console.log("Relay error:", err.message);
    }
});

client.login(TOKEN);
