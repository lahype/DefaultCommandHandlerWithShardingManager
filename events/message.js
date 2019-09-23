const Discord = require('discord.js')
module.exports = async (bot, msg) => {

  if (msg.author.bot) return
  if (msg.author.id === bot.user.id) return
  if (msg.channel.recipient) return
 
  if (msg.content.indexOf(bot.config.prefix) !== 0) return

  const args = msg.content.slice(bot.config.prefix.length).trim().split(/ +/g)
  const command = args.shift().toLowerCase()
  const cmd = bot.commands.get(command)  

  if (!cmd) return
  cmd.run(bot, msg, args)
  
}
