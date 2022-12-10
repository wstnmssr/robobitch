const { SlashCommandBuilder } = require('discord.js');
const { MessageAttachment } = require('discord.js');
const fs = require('fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kot')
        .setDescription('yeah I\'ll shitpost something in chat'),
    async execute(interaction) {
        
        const files = fs.readdirSync('./command_utils/kot')
        /* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
        const chosenFile = files[Math.floor(Math.random() * files.length)] 
        if(chosenFile.startsWith('http')){
            await interaction.reply(chosenFile);
        }
        else{
            await interaction.reply(new MessageAttachment(`./command_utils/kot/${chosenFile}`,`'${chosenFile}`));
        }
    }

    // name: 'kot',
    // description: 'yeah I\'ll shitpost something in chat',
    // execute(message, args){
    //     //console.log(args);
    //     const Discord = require('discord.js');
        
       
    // }
};
// module.exports = {
//     name: 'hristams',
//     description: 'it\'s always coming',
//     execute(message, args){
//         today = new Date();
//         var cma = new Date(today.getFullYear(), 11, 25);
//         if (today.getMonth() == 11 && today.getDate() > 25){
//             cmas.setFullYear(cmas.getFullYear() + 1)
//         }
//         console.log(vMath.ceil((cmas.getTime()-today.getTime())/(one_day))+" days left until Christmas!");
//     }
// };
