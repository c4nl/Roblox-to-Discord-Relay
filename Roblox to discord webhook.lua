local HttpService = game:GetService("HttpService")
local Players = game:GetService("Players")
local WEBHOOK = "YOUR_DISCORD_WEBHOOK_URL"

local function sendToDiscord(text)
    pcall(function()
        HttpService:PostAsync(WEBHOOK, HttpService:JSONEncode({content = text}))
    end)
end

Players.PlayerAdded:Connect(function(player)
    player.Chatted:Connect(function(msg)
        sendToDiscord(player.Name .. ": " .. msg)
    end)
end)

sendToDiscord("Roblox server started.")
