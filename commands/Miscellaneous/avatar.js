exports.run = (bot, msg, args, embed) => {

    msg.channel.send(embed
        .setColor(bot.config.PrimaryColor) 
        .setDescription(`And here it is!\nOr [click here](${msg.author.displayAvatarURL}).`)
        .setThumbnail(msg.author.displayAvatarURL)
    )

}
