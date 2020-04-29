const TgBot = require('node-telegram-bot-api'),
      token = "1180139988:AAHqK0UqszqI04eibuMAyXU_qXuHnTmTI0w",
      bot = new TgBot(token, {polling: true});

const Promise = require('bluebird');

Promise.config({
  cancellation: true
});

bot.onText(/\/повтори (.+)/, function (msg, match) {
    bot.sendMessage(msg.from.id, match[1]);
    return;
});

//Стандартний початок
bot.onText(/\/start/, function (msg, match) {
    bot.sendMessage(msg.from.id, 
                    "Привіт, я - бот від Y-Tech.\n"
                    +"Я допоможу тобі в управлінні твоєю лампою, поїхали?"
                   );
    return;
});

bot.on('message', function (msg) {
    if(msg.text.indexOf('start') == -1 && msg.text.indexOf('повтори') == -1){
        console.log(msg);
        bot.sendPhoto(msg.chat.id, __dirname+'/kavo.png', { caption: 'Каво?' });
        return;
    }
    return;
});