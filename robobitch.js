const fs = require('fs'); 
const path = require('node:path')
const { token } = require('./config.json');
const { Client, Collection, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', () => {
	console.log('Ready!');
});

// client.on('interactionCreate', async interaction => {
// 	if (!interaction.isChatInputCommand()) return;

// 	const { commandName } = interaction;

// 	if (commandName === 'ping') {
// 		await interaction.reply('Pong!');
// 	} else if (commandName === 'server') {
// 		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
// 	} else if (commandName === 'user') {
// 		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
// 	}
// });

client.login(token);

// Gather commands into collection within client
client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file)
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

// Gather voice commands into collection within client
// client.voice_commands = new Collection();

// const voicePath = path.join(__dirname, 'voice_cmds');
// const voiceFiles = fs.readdirSync(voicePath).filter(file => file.endsWith('.js'));

// for (const file of voiceFiles) {
// 	const filePath = path.join(voicePath, file)
// 	const command = require(filePath);
// 	client.commands.set(command.data.name, command);
// }

// const commandsToKeep = ["8ball", "help", "ping"];

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'lol that didn\'t work', ephemeral: true });
	}
});

// client.on('message', async message => {
//     if(!message.content.startsWith(prefix) || message.author.bot) return;
          
//     const args = message.content.slice(prefix.length).split(/ +/);
//     const commandName = args.shift().toLowerCase();
//     console.log(commandName);
    
//     if(client.commands.has(commandName)){
//         const command = client.commands.get(commandName);
//         try{
//             command.execute(message, args);

//             if(!commandsToKeep.includes(command.name))
//             message.delete()
//                 .then(msg => console.log(`Deleted message from ${msg.author.username}`))
//                 .catch(console.error);
//         } 
//         catch (error){
//             console.error(error);
//             message.reply('lol that didn\'t work');
//         }
//     }
//     else if(client.voice_commands.has(commandName) && message.member.voice.channel){
//         voiceLine(`./command_utils/voice/${commandName}.mp3`, message.member.voice.channel);
//         message.delete()
//             .then(msg => console.log(`Deleted message from ${msg.author.username}`))
//             .catch(console.error);
//     }
//     else{ return; }
// });

// async function voiceLine(fileLocation, voiceChannel){
    
//     try{
//         const connection = await voiceChannel.join();
//         console.log(fileLocation);
//         const dispatcher = connection.play(fileLocation);

//         dispatcher.on('finish', () => {
//             // The song has finished
//             voiceChannel.leave();
//         });  
//     }
//     catch(error){
//         console.error(error);
//         voiceChannel.send("sorry, sore throat");
//     }
// }