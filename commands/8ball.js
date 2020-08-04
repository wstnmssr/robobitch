module.exports = {
    name: '8ball',
    description: 'your future, decided',
    execute(message, args){
        const fs = require('fs');
        fs.readFile('./command_utils/8ball.txt', function(error, file){
            if(error) throw error;
            const lines= file.toString().split('\n');
            message.channel.send(lines[Math.floor(Math.random()*lines.length)]);
        })
    },
};
