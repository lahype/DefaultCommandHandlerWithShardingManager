const Discord = require("discord.js")
const config = require('./config.json')
const bot = new Discord.Client({
    autoReconnect: true,
    disableEveryone: true
})
// ------------- Shard Management ------------------

const shard = new Discord.ShardingManager("./core.js", {
    autoSpawn: true,
    token: config.token,
    totalShards: "auto", // "auto" or number
})

shard.spawn()

shard.on('launch', (shard) => {
    console.log(`⬇ [SHARD] Shard ID #${shard.id} ⬇` )
})