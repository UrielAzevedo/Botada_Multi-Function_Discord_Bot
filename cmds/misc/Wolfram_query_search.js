const Commando = require('discord.js-commando')
const axios = require('axios')
const fetch = require('node-fetch')

module.exports = class wolfram extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'wolframsearch',
            group: 'misc',
            memberName: 'query',
            description: 'gets data from wolfram',
        })
    }

    async run(message, args){
        const url = new URL(`/v1/result?appid=EUQAW6-RGK892GTU2&i=${args.replace(/\s/g,'+')}`,`http://api.wolframalpha.com`)
        
        fetch(url)
        .then(response => response.text())
        .then(data => message.reply(data))
    }
}