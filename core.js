/*

    @document   : core.js
    @author     : Thomas Bnt <thomasbnt@protonmail.com>
    @version    : 1.0.0
    @copyright  : 2019, Thomas Bnt
    @license    : GNU General Public License v3.0
    @repository : https://github.com/lahype/DefaultCommandHandlerWithShardingManager

*/ 
const Discord = require('discord.js')
const Enmap = require('enmap')
const fs = require('fs')

const config = require('./config.json')

const bot = new Discord.Client({
  autoReconnect: true
});


// -------------------- Config --------------------

bot.config = config
bot.commands = new Enmap()
bot.updatePresence = function updatePresence() {
  bot.user.setActivity("my custom status", { type: "WATCHING" })
}

// -------------------- My C0re --------------------

fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    const event = require(`./events/${file}`)
    let eventName = file.split('.')[0]
    bot.on(eventName, event.bind(null, bot))
  })
})

fs.readdir('./commands/', (err, files) => {
  if (err) return console.error(err)
  files.forEach(file => {
    if (!file.endsWith('.js')) return
    let props = require(`./commands/${file}`)
    let commandName = file.split('.')[0]
    bot.commands.set(commandName, props)
  })
})

bot.login(config.token)
