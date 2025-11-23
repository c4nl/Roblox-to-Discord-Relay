# Roblox ↔ Discord Chat Integration
![Roblox to discord relay image](https://issue.wtf/project_pics/Photos_66j8vbd5so.png)

This project allows Roblox and a Discord server to exchange chat messages in real-time:
- Roblox player messages → Discord webhook
- Discord messages → Roblox chat via Node.js relay

Setup Instructions:

1. **Node.js Relay Server**
   - File: `server.js`
   - Purpose: Receives messages from Discord bot and serves them to Roblox.
   - Install dependencies:
     ```bash
     npm install express body-parser
     ```
   - Run server:
     ```bash
     node server.js
     ```

2. **Discord Bot**
   - File: `index.js`
   - Purpose: Sends messages from Discord server to Node.js relay server.
   - Install dependencies:
     ```bash
     npm install discord.js axios
     ```
   - Run bot:
     ```bash
     node index.js
     ```
   - Notes: Replace placeholders with your Discord bot token and the ngrok URL for the relay server.

3. **Roblox Scripts**
   - File: `roblox-to-discord.lua`  
     Purpose: Sends Roblox player chat messages to Discord webhook. Place in **ServerScriptService**.
   - File: `discord-to-roblox.lua`  
     Purpose: Polls Node.js relay server and sends Discord messages into Roblox chat. Place in **ServerScriptService**.
   - Instructions: Copy these files into ServerScriptService. Replace placeholders:  
     - Webhook URL for `roblox-to-discord.lua`  
     - Relay ngrok URL for `discord-to-roblox.lua`

4. **Ngrok Setup**
   - Install ngrok: https://ngrok.com  
   - Run relay server: `node server.js`  
   - Expose to internet: `ngrok http 3000`  
   - Copy HTTPS URL and use it in Roblox and Discord bot scripts.  
   - Note: Free ngrok URLs change each session; update scripts if restarted.

5. **Usage**
   - Start Node.js relay server.  
   - Run Discord bot.  
   - Start ngrok and copy HTTPS URL into scripts.  
   - Publish Roblox game.  
   - Test: Roblox chat messages appear in Discord webhook; Discord messages appear in Roblox chat.

Notes:
- Wrap `PostAsync` and `GetAsync` in `pcall` to prevent crashes.  
- Ensure player characters are loaded for `ChatService:Chat`.  
- Customize chat colors via `Enum.ChatColor`.  
- Update URLs if ngrok session changes.

# ⚠️ IF YOU DO NOT KNOW HOW TO SET THIS UP DO NOT TAKE CONTACT IT'S BEST YOU DON'T MESS AROUND WITH IT UNLESS YOU KNOW WHAT YOU'RE DOING
