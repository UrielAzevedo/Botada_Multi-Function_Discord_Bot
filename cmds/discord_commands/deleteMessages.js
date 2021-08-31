const commando = require('discord.js-commando')

module.exports = class deleteMessages extends commando.Command{
    constructor(client){
        super(client, {
            name: 'deletechatmessages',
            group: 'discord_commands',
            memberName: 'management',
            description: 'deletes message history',
        })
    }

    async run(message, args){
        if(message.member.hasPermission('ADMINISTRATOR')){
            message.channel.messages.fetch()
            .then(results => message.channel.bulkDelete(results))
        }
    }
}