const Discord = require('discord.js')
const moment = require('moment')
module.exports = (bot, member) => {
    bot.updatePresence()
    function checkDays(date) {
        let now = new Date()
        let diff = now.getTime() - date.getTime()
        let days = Math.floor(diff / 86400000)
        return days + (days == 1 ? " day" : " days")
    }
    const guild = member.guild

    console.log(`📥  — ${member.user.tag} (${member.user.id}) joined ${guild.name}`)

}