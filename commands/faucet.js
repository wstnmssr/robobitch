const { SlashCommandBuilder } = require('discord.js');
const { AttachmentBuilder } = require('discord.js');
const fs = require('fs');
const path = require('node:path')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('faucet')
        .setDescription('it\'s probs been fixed by now'),
    async execute(interaction) {
        const filesPath = path.join(__dirname, '/../command_utils/faucet')
        const files = fs.readdirSync(filesPath).filter(file => file.endsWith('.jpg') || file.endsWith('.png'));
        /* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
        const file = files[Math.floor(Math.random() * files.length)] 
        const attachment = new AttachmentBuilder(path.join(filesPath, file));
        await interaction.reply({files: [attachment]}); 
    }
};
