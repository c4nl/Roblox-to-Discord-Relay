local HttpService = game:GetService("HttpService")
local Players = game:GetService("Players")
local ChatService = game:GetService("Chat") -- built-in Chat service

local RELAY_URL = "HTTPS://YOUR_NGROK_URL/messages"

-- Poll every second
while true do
	task.wait(1)

	local success, response = pcall(function()
		return HttpService:GetAsync(RELAY_URL)
	end)

	if success then
		local messages = HttpService:JSONDecode(response)
		for _, msg in ipairs(messages) do
			print(msg.author .. ": " .. msg.content)

			-- send to all players' chat
			for _, player in ipairs(Players:GetPlayers()) do
				ChatService:Chat(player.Character or player, msg.author .. ": " .. msg.content, Enum.ChatColor.Blue)
			end
		end
	end
end
