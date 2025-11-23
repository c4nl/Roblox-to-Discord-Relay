const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

let messageQueue = []; // Messages waiting for Roblox to read

// Roblox fetches messages from Discord (polling)
app.get("/messages", (req, res) => {
    res.json(messageQueue);
    messageQueue = []; 
});

// Discord bot sends messages here
app.post("/fromDiscord", (req, res) => {
    const { author, content } = req.body;
    messageQueue.push({ author, content, timestamp: Date.now() });
    res.sendStatus(200);
});

const PORT = 3000;
app.listen(PORT, () => console.log("Relay server running on port " + PORT));
