const Commando = require('discord.js-commando')
const fetch = require('node-fetch')

module.exports = class priceCoins extends Commando.Command {
    constructor(client){
        super(client, {
            name: 'pricecoins',
            group: 'misc',
            memberName: 'price',
            description: 'currency conversion to usd ',
        })
    }

    async run(message, args) {

        const url = new URL(`/api/v3/simple/price?ids=${args}&vs_currencies=usd`, 'https://api.coingecko.com')

        fetch(url)
        .then(response =>response.json())
        .then(price => message.reply(price[`${args}`].usd))
    }
}