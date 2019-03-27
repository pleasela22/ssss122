const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("560471430886850560")
setInterval(function() {
channel.send(`spamspamsapmspamsspamsapmssapmssapmssapmssapmssapmssapmssapms`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
