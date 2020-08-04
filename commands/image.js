module.exports = {
    name: 'image',
    description: 'you get an image, what else?',
    execute(message, args){
        const fs = require('fs')
        fs.readFile('./command_utils/images.txt', function(error, file){
            if(error) throw error;
            const lines= file.toString().split('\n');
            message.channel.send(lines[Math.floor(Math.random()*lines.length)]);
        })
    },
};
