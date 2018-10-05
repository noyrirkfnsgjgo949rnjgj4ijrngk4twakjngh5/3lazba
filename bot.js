const Discord = require('discord.js');
const A7MD = new Discord.Client();
let timer;
console.log("BOT ONLINE");

A7MD.on("guildMemberAdd", member => {
    timer = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000
  let words = [` 
  **
  :hearts:️:paperclips:.
  :heart_eyes: :heart: 
  لسنا الافضل لكن بوجودك نستمر , حياك ف سيرفرنا ي جمميل ؟  :musical_score::sparkles:
                                 [https://discord.gg/NCx8rvu ] 
  وههذي لك ي جمميل ؟ ... [ ${member}  ]
  **`,`سلام عليكم ياحلو ,تعال ونورنا ناقصنا تواجدك:candle::black_heart:.
  رابط:https://discord.gg/NCx8rvu -رُبما صدفة من غير حُسبان 
  نصبح بها احبباب ؟ :heartbeat:.
  
  LINK : https://discord.gg/NCx8rvu `]
  setTimeout(() =>{
  member.createDM().then(function (channel) {
  return channel.send(`${words[Math.floor(Math.random() * words.length)]}`) 
}).catch(console.error)
}, timer)
})

A7MD.login(process.env.BOT_TOKEN);
