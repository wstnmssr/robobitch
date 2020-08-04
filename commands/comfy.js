module.exports = {
    name: 'comfy',
    description: 'makes you feel nice and warm inside',
    execute(message, args){
        //console.log(args);
        const Discord = require('discord.js');
        var fs = require('fs');
        var files = fs.readdirSync('./command_utils/comfy')
        /* now files is an Array of the name of the files in the folder and you can pick a random name inside of that array */
        let chosenFile = files[Math.floor(Math.random() * files.length)] 
        message.channel.send(new Discord.Attachment(`./command_utils/comfy/${chosenFile}`,`'${chosenFile}`)).catch(console.error);
    }
};
