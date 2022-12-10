const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('I know how to do a small number of things and these are them'),
    async execute(interaction) {
		const data = [];
        const { commands, voice_commands } = message.client;
        
        if(!args.length){
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(voice_commands.map(command => command.name).join(', '));
            
            return message.author.send(data, { split: true }).then(() => {
                if (message.channel.type === 'dm') return;
                    message.reply('I\'ve sent you a DM with all my commands!');
                }).catch(error => {
                    console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
                    message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
                });
        }
	},
};
