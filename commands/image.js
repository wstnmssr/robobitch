const { SlashCommandBuilder } = require('discord.js');
const { MessageAttachment } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('image')
        .setDescription('you get an image, what else?'),
    async execute(interaction){
        const contents = fs.readFileSync('./command_utils/images.txt', 'utf-8');
        const arr =  contents.split(/\r?\n/);
        await interaction.reply(arr[Math.floor(Math.random()*arr.length)]);
    },
};
