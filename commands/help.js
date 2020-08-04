const { prefix } = require('../config.json');
module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {
		const data= [];
        const { commands, voice_commands } = message.client;
        console.log(message.client);
        
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
