const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('pong');
	},
};

// module.exports = {
//     name: 'ping',
//     description: 'trainging wheels',
//     execute(message, args){
//         message.channel.send('pong');
//     },
// };
