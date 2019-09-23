const Discord = require('discord.js')
exports.run = (bot, msg) => {

    const AvatarEmbed = new Discord.RichEmbed()
    msg.channel.send(AvatarEmbed
        .setColor(bot.config.PrimaryColor) 
        .setDescription(`And here it is!\nOr [click here](${msg.author.displayAvatarURL}).`)
        .setThumbnail(msg.author.displayAvatarURL)
    )

}
