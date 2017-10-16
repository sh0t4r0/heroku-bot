const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    //se Tatsumaki @everyone
    if(message.author.id == "172002275412279296" && message.channel.id == "367865604994236416") {
        message.channel.sendMessage('BWAAAAAAAAAAAAAAAAAA @everyone, Luce trouxe algo gratuito Hunters, RUN TO THE HILLS!');
    } 

    //se for tuxi
    if(message.author.id == "323984140783452161" && message.channel.id == "367865604994236416") {
        message.channel.sendMessage('Olá Tuxi! <3');
    }

    //se for ghost
    if(message.author.id == "280423563343822849" && message.channel.id == "367865604994236416"){
        message.channel.sendMessage('Boa Ghost!');
    }

    //se for atreyu
    if(message.author.id == "143152473886949376" && message.channel.id == "367865604994236416"){
        message.channel.sendMessage('merrrrmão! coê viado, posso mandar um papo reto? ixpeira tua veixx pra falar vacilão, bora ali comer um bixxcoito que to bolado.');
    }

    //se for eu
    if(message.author.id == "200240729103007744" && message.channel.id == "367865604994236416"){
        message.channel.sendMessage('É verdade @k4n3d4, concordo plenamente!');
    }

    //se for eu ping
    if(message.author.id == "200240729103007744" && message.content == "HH.ping")
    {
        message.sendMessage('Pong? Ta tudo funcionando, esquizofrênico do caralho...');
    }
    //BR
    if(message.author.id == "200240729103007744" && message.content == "HH.kampff2049")
    {
        message.sendMessage('A system of cells interlinked within Cells interlinked within cells interlinked Within one stem. And dreadfully distinct Against the dark, a tall white fountain played.');
    }
    
    if(message.author.id == "200240729103007744" && message.content == "HH.kampff2019")
    {
        message.sendMessage('I ve seen things you people wouldnt believe. Attack ships on fire off the shoulder of Orion. I watched C-beams glitter in the dark near the Tannhäuser Gate. All those moments will be lost in time, like tears in rain. Time to die.');
    }
    
});

bot.on('ready', () => {
    bot.user.setGame('with K4n3d4')
})

bot.login(process.env.BOT_TOKEN);
