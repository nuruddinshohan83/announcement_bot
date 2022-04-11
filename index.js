require("dotenv").config()
const { Client, Intents } = require("discord.js")
const uuid = require("uuid")
const supabase = require("./utils/supabase")
const {
    MessageMentions: { USERS_PATTERN },
} = require("discord.js")

//const { token } = require('./config.json');
//console.log(process.env.Token)

// Create a new client instance
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
    ],
})

// When the client is ready, run this code (only once)
client.once("ready", () => {
    console.log("Bot is online")
})
client.on("messageCreate", (message) => {
    let messageChanelID = message.channelId
    let messageUser = message.member
    let messageContent = message.content
    let nickChannelID = "953630436087717898"
    console.log("mentions", message.mentions.members)
    if (nickChannelID == messageChanelID) {
        if (message.author.bot) return
        console.log(messageContent)
        let filteredMessaage = messageContent.replace(/:\w{1,50}:/g, "")
        console.log(getUserFromMention(messageContent))
        console.log(filteredMessaage)
        let id = uuid.v4()
        inserData(filteredMessaage)
    }
})
async function inserData(msg) {
    const { data, error } = await supabase
        .from("posts")
        .insert([{ content: msg }])
    console.log(data)
    console.log(error)
}
//https://stackoverflow.com/questions/53971701/how-to-get-all-mentions-from-a-message
function getUserFromMention(mention) {
    // The id is the first and only match found by the RegEx.
    const matches = mention.matchAll(USERS_PATTERN).next().value

    // If supplied variable was not a mention, matches will be null instead of an array.
    if (!matches) return

    // The first element in the matches array will be the entire mention, not just the ID,
    // so use index 1.
    const id = matches[1]
    console.log("maches array", matches)
    return client.users.cache.get(id)
}

// Login to Discord with your client's token
client.login(process.env.Token)
