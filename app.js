var auth = require('./auth.json');
const Discord = require('discord.js');
const client = new Discord.Client();
client.login(auth.token);
console.log('Uncle is ON!!!');
client.on('ready', () => {
    client.user.setActivity("with Kids!");
});
client.on('message', message => {
    var mess = message.toString();
    console.log(message.content);
    if (mess.substring(0, 4) == '!ben') {
        var args = mess.substring(5).split(' ');
        var cmd = args[0];
        console.log(args[0]);
        switch (cmd) {
            // !ping
            case 'ping':
                message.channel.send('Pong!');
                break;
            case 'send':
                for (var i = 1; i < args.lenght(); i++) {
                    message.channel.send(args[i]);
                }
                break;
        }
    }
});
//# sourceMappingURL=app.js.map