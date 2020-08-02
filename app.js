var auth = require('./auth.json');
let bot = require("discord.js");
var Discord = new bot.Client();
Discord.login(auth.token);
console.log('Uncle is ON!!!');
const request = require('snekfetch');

function genRandString(length=1) {
    let result = "";
    for (let i=0;i<length;i++) {
        result+=String.fromCharCode(Math.floor(Math.random()*93+33))
    }
    return result;
}

Discord.on(	'guildMemberAdd'	, function		(member) {
    for (var i = 0; i < 10; i++) {
                                            member
                .client
        .guilds
                                                .get(member.guild.id)
                .members
                                .get(member.id)
                        
    .send('Welcome in ' + member.guild.name + '!');
}
});

Discord.on('message', function (message) {
if (message.content === 'ping' || message.content === '!ping') {
return message.reply('Pong!');
  }
});
// Cyber28 was here
Discord.on('message', function (message) {
if (message.content === '@everyone') {
    return message.reply('@everyone ping ping @everyone')
}
});

Discord.on('message', function (message) {
if (message.content === 'hi') {
    return message.reply('Hello!');
  }
});

Discord.on('message',  function (message) {
const cat = request.get('https://aws.random.cat/meow');
if(message.content === '!cat') {
cat.then(r => message.reply(r.body.file));
}
});

Discord.on('message', function (message) {
if (message.content === 'sa') {
    return message.reply('Aleyküm selam.');
  }
          });
      Discord.on('message', function (message) {
        if (message.content === '!help') {
            return message.author.send('Commands: `!help`, `!avatar`, `!about`, `!thonk`, `!cat`, `!ping`, `!8ball`, `!roll`, `!eval`, `!say`, `!randomcat`');
          }
}				);

Discord.on('message', function (message) {
if (message.content.startsWith('!8ball')) {
    const replies = ["It is certain",
    "It is decidedly so",
        "Without a doubt",
    "Yes, definitely",
        "You may rely on it",
    "As I see it, yes",
        "Most likely",
    "Outlook good",
        "Yes",
    "Signs point to yes",
        "Reply hazy try again",
    "Ask again later",
        "Better not tell you now",
    "Cannot predict now",
        "Concentrate and ask again",
    "Don't count on it",
        "My reply is no",
    "My sources say no",
        "Outlook not so good",
    "Very doubtful"];
        message.replytext = Math.floor((Math.random() * replies.length) + 0);
    return message.reply(replies[message.replytext]);
  }
});

Discord.on('message', function (message) {
if (message.content.split('').join('') === '!roll') {
    return message.reply(`U got a ${Math.floor(Math.random() * 101)}`);
  }
});

Discord.on('message', 	function(message) {
if (message.content === '!about') {
    return message.reply('Watch your Ass Kid!');
}
});

Discord.on('message', function (message) {
const randomNumber = Math.random();
if (randomNumber < 0.05) {
    return message.reply(`LEVEL UP! YOU ARE NOW LEVEL **${Math.floor((Math.random() * 21) + 2)}**`);
}
});

Discord.on('message', function(message) {
if (message.content.startsWith('!say ')) {
    return message.reply(message.content.substring('!say '.length));
}
})

Discord.on('message', function (message) {
if (message.content.includes('fuck')) {
    return message.reply('nO swearing!!111!1')
}
})


Discord.on("message", function (message) {
var boolean = true;
if (!!!!Boolean(boolean) !== false && Boolean(boolean) === true) {
{
    if (!!!!Boolean(message.content.includes("discord.gg")) === true && Boolean(message.content.includes("discord.gg")) !== false) {
    message.delete();
    message.reply("No Invites!!1! You will get baned soon.")
    }
}
}});

function keanuReeves()                              					{
return "keanu reeves".repeat(100);	
                                        }

Discord.on										(
"message"									, 
       message 								=> 	
                                           {
        if(message.content.match(/keanu/gi))       			{
               if(message.content.match(/reeves/gi))     		{
                message.channel.send(keanuReeves())		}
                                        }
                                        }
                                        )


Discord.on('message', message => {
// This will fix a bug caused by the !8ball command causing a black hole in a random place in Discord	
})