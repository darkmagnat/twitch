const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
   
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/skwadraa',
    name: 'What .-.',
    application_id: '515836105354903552',//هنا ايدي البوت 
     assets: {
         large_image:   `515924915615170613`, //هنا id صوره يلي جبت
  
    }
  }
    });
  
});


client.login(process.env.BOT_TOKEN);
