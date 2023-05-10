const discord = require("discord.js")

const client = new discord.Client({
   intents : [36767]
})

client.on("ready", async () => {

    console.log("Ready")
})

client.on("memberDisconnect",async (member,executor,times)=> {
  console.log(`${member.user.tag} has been disconnected ${times} times by ${executor.tag}`)
})

 client.login("token")
    