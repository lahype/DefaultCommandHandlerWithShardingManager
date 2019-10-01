const Discord = require('discord.js')
exports.run = (bot, msg, args) => {

    msg.channel.send(new Discord.RichEmbed()
        .setColor(bot.config.PrimaryColor) 
        .setDescription(`And here it is!\nOr [click here](${msg.author.displayAvatarURL}).`)
        .setThumbnail(msg.author.displayAvatarURL)
    )

}
