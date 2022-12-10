const { SlashCommandBuilder } = require('discord.js');
const { MessageAttachment } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fnight')
        .setDescription('time for beddy bye'),
    async execute(interaction) {
        const replies = ["Night night", "Sleep tight", "See you tomorrow", "Sleep well", "Until next time", "Catch you later", "Sayonara"];
        const full_reply  = `${replies[Math.floor(Math.random() * replies.length)]}, ${message.author}`;

        await interaction.options.getMember('target').voice.disconnect();
        await interaction.reply(full_reply);
    }
};
