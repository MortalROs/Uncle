var auth = require('./auth.json');
const Discord = require('discord.js');
const client = new Discord.Client();
var happy = false;

client.login(auth.token)

console.log('Uncle is ON!!!')

function checkReact(message) {
    var mess = message.toString();

    if (message.author == client.user) {
        return
    }

    var x = Math.random() * 100;
    x = Math.round(x);
    
    if (x < 60) {
        return
    } else {
        console.log('Emoji: ' + x + '%');
    }

    if (mess.includes('<:haha:603604484870111254>')) {
        message.channel.send('<:haha:603604484870111254><:haha:603604484870111254><:haha:603604484870111254><:haha:603604484870111254><:haha:603604484870111254>');
    }

    if (mess.includes('<:ultraunchiu:612923827466534922>') || mess.includes('<:unchiu:610549369766412298>')) {
        message.channel.send('<:ultraunchiu:612923827466534922><:ultraunchiu:612923827466534922><:ultraunchiu:612923827466534922><:ultraunchiu:612923827466534922><:ultraunchiu:612923827466534922>');
    }
}

client.on('ready', () => {
    client.user.setActivity("with Kids!")
})

client.on('message', message => {
    var mess = message.toString();

    checkReact(message);

    //console.log(message.content);
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
                message.channel.send(args[1]);
                break;
        }
    }
});