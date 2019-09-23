const Discord = require('discord.js')
exports.run = async (bot, msg) => {
    
    const UptimeEmbed = new Discord.RichEmbed()
    msg.channel.send(UptimeEmbed
        .setColor('#fefefe')
        .setAuthor("🔌 Uptime", msg.author.displayAvatarURL, "https://github.com/lahype/DefaultCommandHandler")
        .setDescription((Math.round(bot.uptime / (1000 * 60 * 60))) + ' hour|s  ' + (Math.round(bot.uptime / (1000 * 60)) % 60) + ' minut|s ' + (Math.round(bot.uptime / 1000) % 60) + " second|s")
    )
}