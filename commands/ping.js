module.exports = {
    name: 'ping',
    description: 'trainging wheels',
    execute(message, args){
        message.channel.send('pong');
    },
};
