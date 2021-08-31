const Commando = require('discord.js-commando')
const fetch = require('node-fetch')

module.exports = class randomWikiPage extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'randomwikipage',
            group: 'misc',
            memberName: 'wiki',
            description: 'gets a random wiki page',
        })
    }

    async run (message, args) {
        fetch('https://en.wikipedia.org/w/api.php?action=query&list=random&format=json&rnnamespace=0&rnlimit=1')
        .then(body => body.json())
        .then(data => message.reply(`https://en.wikipedia.org/wiki/${data.query.random[0].title.replace(/\s/g,'_')}`))
        
    }

}