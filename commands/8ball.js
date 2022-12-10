const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('your future, decided'),
    async execute(interaction){
        const contents = fs.readFileSync('./command_utils/8ball.txt', 'utf-8');
        const arr = contents.split(/\r?\n/);
        await interaction.reply(arr[Math.floor(Math.random()*arr.length)]);
    },
};
