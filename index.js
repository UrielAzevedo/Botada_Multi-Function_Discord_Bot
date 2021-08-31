const Commando = require('discord.js-commando')
const fetch = require('node-fetch')
const path = require('path')
const config = require("./config.json")
const axios = require('axios')

const client = new Commando.CommandoClient({
    owner: '854738528491405332',
    commandPrefix: config.prefix
})

client.on('ready', async () => {
    console.log('online')

    client.registry
    .registerGroups([
        ['misc', 'misc commands'],
        ['discord_commands', 'discord based commands']
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))
})

client.login(config.token)

client.on('message', async message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return

    const args = message.content.slice(config.prefix.length).split(/ +/)
    const command = args.shift().toLowerCase()
})

