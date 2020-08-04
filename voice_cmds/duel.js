module.exports = {
    name: 'duel',
    description: 'I have something to say',
    async execute(message, args){
        // Join the same voice channel of the author of the message
        const fs = require('fs')
        const random_file = require('random-file')
        
       
       
        if (message.member.voiceChannel) {
//             const connection =  message.member.voiceChannel.join();
//             message.member.voiceChannel.leave();
            await message.member.voiceChannel.join().then(
                async connection => { // Connection is an instance of VoiceConnection
                     const dir = '/command_utils/voice'
                    random_file(dir, async (err, file) => {
                        console.log(`The random file is: ${file}.`)
                        const dispatcher =  await connection.playFile(file);
                        dispatcher.on('end', () => {
					// The song has finished
					message.member.voiceChannel.leave();
                    })
				});
			}).catch(console.log);
        }
    },
};


// async function  voiceLine(fileLocation, voiceChannel)
// {
// 	if(voiceChannel) 
// 	{
// 		await voiceChannel.join()
// 		.then(async connection => { // Connection is an instance of VoiceConnection
// 			const dispatcher =  await connection.playFile(fileLocation);
// 				dispatcher.on('end', () => {
// 					The song has finished
// 					voiceChannel.leave();
// 				});
// 			}).catch(console.log);
// 			
// 	}
// }
