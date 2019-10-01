const Discord = require('discord.js')
exports.run = async (bot, msg, args) => {
    
    msg.channel.send(new Discord.RichEmbed()
        .setColor('#fefefe')
        .setAuthor("🔌 Uptime", msg.author.displayAvatarURL, "https://github.com/lahype/DefaultCommandHandler")
        .setDescription((Math.round(bot.uptime / (1000 * 60 * 60))) + ' hour|s  ' + (Math.round(bot.uptime / (1000 * 60)) % 60) + ' minut|s ' + (Math.round(bot.uptime / 1000) % 60) + " second|s")
    )
}