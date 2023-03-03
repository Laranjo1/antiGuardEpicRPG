const Discord = require("discord.js");
const fs = require("fs");
const console = require("console");
const config = require('./config.json');

const bot = new Discord.Client({disableEveryone: true})



var antiguard = config.antiguard;
var id = config.id;



bot.on("ready", async () => {
    console.log(`Você logou como ${bot.user.username}`)
    setTimeout( () => {
        console.clear();
        console.log("Rodando o antiGuard...");
    }, 2000)
})
bot.on("message", async message =>{
    if (message.channel.id === '732085620436107365')
    {
        if(message.author.id == id)
        {
            const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
            const comando = args.shift().toLowerCase();
            if(comando === "antiguard" && antiguard == true)
            {
                antiguard = false;
                let status = new Discord.RichEmbed()
                .setColor('#b30059')
                .setTitle('O antiraid foi desligado!')
                .setDescription('status');
                message.channel.send(status);
                return;
            }
            if(comando === "antiguard" && antiguard == false)
            {
                antiguard = true;
                let status = new Discord.RichEmbed()
                .setColor('#00e600')
                .setTitle('O antiraid foi ligado!')
                .setDescription('status');
                message.channel.send(status);
                return;
            }
        }
        if(message.author.id =='555955826880413696')
        {
            let palavrões = ['EPIC GUARD', 'stop there']
           
            const regex = new RegExp(`(${palavrões.join('|')})`, 'ig')
            if(regex.test(message.content)) 
            {
                if(antiguard == true)
                {
                    message.channel.send("!kick 555955826880413696");
                    message.channel.send("?kick 555955826880413696");
                    message.channel.send(";kick 555955826880413696");
					setTimeout( () => {
					message.channel.send("https://discord.com/oauth2/authorize?client_id=555955826880413696&permissions=8&scope=bot");	
					}, 3000);
					setTimeout( () => {
					message.channel.send("@here @everyone");
					}, 4000);
                }
            }
        }
    }
});

bot.login(config.token);