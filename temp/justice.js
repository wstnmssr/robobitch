const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('justice')
        .setDescription('eliminate a user in malpractice'), 
    async execute(interaction){
        try{
            const guild = message.guild;
            const sinner = (message.mentions.users.first()); 
            guild.member(sinner).voice.kick().catch(console.error);
        }
        catch(error){
            console.error(error);
            message.reply("yeah you wish that worked");
        }
    }
}
