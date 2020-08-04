module.exports = {
    name: 'kot',
    description: 'yeah I\'ll shitpost something in chat',
    execute(message, args){
        //console.log(args);
        const Discord = require('discord.js');
        var fs = require('fs');
        var files = fs.readdirSync('./command_utils/kot')
        /* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
        const chosenFile = files[Math.floor(Math.random() * files.length)] 
        if(chosenFile.startsWith('http')){
            message.channel.send(chosenFile);
        }
        else{
            message.channel.send(new Discord.Attachment(`./command_utils/kot/${chosenFile}`,`'${chosenFile}`)).catch(console.error);
        }
    }
};
