const Discord = require('discord.js')
module.exports = (bot, member) => {
    bot.updatePresence()
    const guild = member.guild

    console.log( `📤  — ${member.user.tag} (${member.user.id}) leave ${guild.name}`)
}
