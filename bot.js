const Discord = require('discord.js');

const Util = require('discord.js');

const getYoutubeID = require('get-youtube-id');

const fetchVideoInfo = require('youtube-info');

const YouTube = require('simple-youtube-api');

const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");

const queue = new Map();

const ytdl = require('ytdl-core');

const fs = require('fs');

const gif = require("gif-search");

const client = new Discord.Client({disableEveryone: true});

const prefix = "LooZ";
/////////////////////////
////////////////////////

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

client.login('TOKEN');
