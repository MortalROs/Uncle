var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
    token: auth.token,
    autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 4) == '!ben') {
        var args = message.substring(5).split(' ');
        var cmd = args[0];
        args = args.splice(1);
        switch (cmd) {
            // !ping
            case '':
                bot.sendMessage({
                    to: channelID,
                    message: 'Nothing but you!'
                });
                break;
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
                break;
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Poti sa tipi ca nimeni nu te poate ajuta!'
                });

                bot.sendMessage({
                    to: channelID,
                    message: '<:ultraunchiu:610196002711928853> <:ultraunchiu:610196002711928853> <:ultraunchiu:610196002711928853> <:ultraunchiu:610196002711928853> <:ultraunchiu:610196002711928853>'
                });
                break;
            // Just add any case commands if you want to..
        }
    }
});