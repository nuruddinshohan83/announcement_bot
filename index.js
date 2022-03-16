require("dotenv").config();
const { Client, Intents } = require('discord.js');
const uuid = require('uuid');
//const { token } = require('./config.json');
//console.log(process.env.Token)

// Create a new client instance
const client = new Client({
	intents: [Intents.FLAGS.GUILDS
		, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Bot is online');
});
client.on('messageCreate', (message) => {
	let messageChanelID = message.channelId
	let messageUser = message.member
	let messageContent = message.content
	let nickChannelID = "953630436087717898"
	if (nickChannelID == messageChanelID) {
		if (message.author.bot)
			return
		console.log(messageContent)
		let filteredMessaage = messageContent.replace(/:\w{1,20}:/g, "");
		console.log(filteredMessaage)
		let id = uuid.v4();
		//inserData(id, filteredMessaage, messageUser)
	}
});
async function inserData(id, msg, author) {
	const { data, error } = await supabase
		.from('cities')
		.insert([
			{ id: id, message: msg, author: author }
		])
	console.log(data)
	console.log(error)

}

// Login to Discord with your client's token
client.login(process.env.Token);
		/*
if (messageContent.length < 20) {
console.log(messageContent.length)
	
messageUser.setNickname(`${messageContent}`, "Set by nickname_bot")
const embed = new Discord.MessageEmbed()
embed
.setTitle(`Nick Name Changed by ${client.user.username} `)
.addField(`Successfully changed to `, `${messageContent}`)
.setFooter(`Created by Shohan`)
message.channel.send({ embeds: [embed] })
	
}
else {
const embed = new Discord.MessageEmbed()
embed
.setTitle(`Cannot change your nick name `)
.addField(`Reason `, `${messageContent} is too long or not supported as discord`)
.setFooter(`Created by Shohan`)
message.channel.send({ embeds: [embed] })
}
//message.channel.send(`Nick Name Successfully Changed by ${client.user.tag}`)
*/