const Discord = require('discord.js')
exports.run = async (bot, msg, args) => {
    await msg.channel.send(new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`And here it is!\nOr [click here](${msg.author.displayAvatarURL()}).`)
        .setThumbnail(msg.author.displayAvatarURL())
    )
}
