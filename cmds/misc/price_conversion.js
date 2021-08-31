const Commando = require('discord.js-commando')
const fetch = require('node-fetch')

module.exports = class priceConversion extends Commando.Command{
    constructor(client){
        super(client, {
            name: 'priceconversion',
            group: 'misc',
            memberName: 'price converter',
            description: 'cprice conversion between currencies',
            argsType: 'multiple',
        })
    }

    async run(message, args){

        args[1] = args[1].toUpperCase()
        args[2] = args[2].toUpperCase()
        
        const url = new URL(`/v1/tools/price-conversion?amount=${args[0]}&symbol=${args[1]}&convert=${args[2]}`, 'https://pro-api.coinmarketcap.com')

        fetch(url, {
            method: "GET",
            headers: {
              "X-CMC_PRO_API_KEY": "63caf9b0-634e-46ca-8ded-d316cb151d33"
            }
        })
        .then(response => response.json())
        .then(body => message.reply(body.data.quote[`${args[2]}`].price))
    }
}