const fs = require('fs'); 
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();
client.voice_commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const voiceFiles = fs.readdirSync('./voice_cmds').filter(file => file.endsWith('.js'));

for (const file of voiceFiles) {
	const command = require(`./voice_cmds/${file}`);
	client.voice_commands.set(command.name, command);
}
// 
// const voiceFiles = fs.readdirSync('./command_utils/voice').filter(file => file.endsWith('.mp3'));
// 
// for (const file of voiceFiles) {
// 	const command = require(`./voice_cmds/${file}`);
// 	client.voice_commands.set(command.name, command);
// }

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);

client.on('message', async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
          
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    
    if(client.commands.has(commandName)){
        const command = client.commands.get(commandName);
//         console.log(client.commands);
        try{
            command.execute(message, args);
            if(command.name.toLowerCase() != "8ball" && 
                command.name.toLowerCase() != "help" && 
                command.name.toLowerCase() != "ping" )
                message.delete();
        } 
        catch (error){
            console.error(error);
            message.reply('lol that didn\'t work');
        }
    }
    else if(client.voice_commands.has(commandName) && message.member.voiceChannel){
        console.log(commandName);
        
        voiceLine(`command_utils/voice/${commandName}.mp3`, message.member.voiceChannel);
        message.delete();
//         console.log('here');
//         const command = client.voice_commands.get(commandName);    
//         console.log('here');
//         const connection = await message.member.voiceChannel.join();
//         console.log('here');
//         try{
//             const dispatcher = connection.playStream(fs.createReadStream(`command_utils/time_to_duel.mp3`));
// 
//             dispatcher.on('start', () => {
//                 console.log('audio is now playing!');
//             });
// 
//             dispatcher.on('finish', () => {
//                 console.log('audio has finished playing!');
//             });
//         }
//         catch(error){
//             console.error(error);
//             message.reply('lol that didn\'t work');
//         }
//         message.member.voiceChannel.leave();
//         message.delete();
    }
    else{ return; }
});

async function  voiceLine(fileLocation, voiceChannel)
{
	if(voiceChannel) 
	{
		await voiceChannel.join()
		.then(async connection => { // Connection is an instance of VoiceConnection
			const dispatcher =  await connection.playFile(fileLocation);
				dispatcher.on('end', () => {
					// The song has finished
					voiceChannel.leave();
				});
			}).catch(console.log);
			
	}
}
