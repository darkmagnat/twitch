const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
   
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/skwadraa',
    name: ' WéSKKyẋ -1K Soon..... ',
    application_id: '501452003143319553',//هنا ايدي البوت 
     assets: {
         large_image:   `507586300409544704`, //هنا id صوره يلي جبت
  
    }
  }
    });
  
});


client.login(process.env.BOT_TOKEN);
