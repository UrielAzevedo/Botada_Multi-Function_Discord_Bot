const Commando = require('discord.js-commando')
const fetch = require('node-fetch')

module.exports = class printer extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'printer',
            group: 'misc',
            memberName: 'page printer',
            description: 'screenshots a web-page',
            argsType: 'single',
        })
    }

    async run(message, args){

        const url = new URL(`/screenshot?token=BKKEWFN-6184N0H-QGBR820-FER2AWN&url=${args}`,'https://shot.screenshotapi.net')

        fetch(url)
        .then(response => response.json())
        .then(body => message.reply(body.screenshot))
    }
}