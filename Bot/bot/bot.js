const TgBot = require('node-telegram-bot-api'),
      token = "1180139988:AAHqK0UqszqI04eibuMAyXU_qXuHnTmTI0w",
      bot = new TgBot(token, {polling: true});

const Promise = require('bluebird');

Promise.config({
  cancellation: true
});

var add_user = [];

//delete after release
var test_mode_users = [];
var temp_lamp = "off";

bot.onText(/\/повтори (.+)/, function (msg, match) {
    bot.sendMessage(msg.from.id, match[1]);
    return;
});

//Стандартний початок
bot.onText(/\/start/, function (msg, match) {
    if(add_user.indexOf(msg.from.id) > -1) {
        bot.sendMessage(msg.from.id, 
                "Еее ні. Це не код лампи."
                +"\n\nЯкщо ти передумав додавати лампу - напиши «cancel»");
        return;
    }
    bot.sendMessage(msg.from.id, 
                    "Привіт, я - бот від Y-Tech.\n"
                    +"Я допоможу тобі в управлінні твоєю лампою, поїхали?", {
        reply_markup: JSON.stringify({
            one_time_keyboard: true,
            inline_keyboard: [
                [{text: "Вперед!", callback_data: 'go'}],
            ]
        })
    });
    return;
});

bot.onText(/\/menu/, function (msg, match) {
    if(getAuth(msg.from.id) == false) return;
    bot.sendMessage(msg.from.id, "Меню керування Вашою лампою\n\nВиберіть бажану дію",{
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: "Змінити колір", callback_data: 'set_color'},{text: "Змінити яскравість", callback_data: 'set_brightness'}],
                        (temp_lamp == 'off' ? ([{text: "Ввімкнути лампу", callback_data: 'lamp_on'}]):([{text: "Ввимкнути лампу", callback_data: 'lamp_off'}]) ) 
                    ]
                })
            }) 
});

bot.on('message', function (msg) {
    if(add_user.indexOf(msg.from.id) > -1) {
        if(msg.text.length != 6 || msg.text.indexOf('/') > -1) {
            bot.sendMessage(msg.from.id, 
                            "Еее ні. Це не код лампи."
                           +"\n\nЯкщо ти передумав додавати лампу - напиши «cancel»");
            return;
        }
        if(msg.text.toLowerCase() == 'cancel') {
            bot.sendMessage(msg.from.id, 
                            "Без лампи ти не зможеш користуватись ботом 😞");
            for(i in add_user){
                if(add_user[i] == msg.from.id) {
                    add_user.splice(i, 1)
                }
            }
        }
        return;
    }
    if(msg.text.indexOf('/') == -1){
        bot.sendPhoto(msg.chat.id, __dirname+'/kavo.png', { caption: 'Каво?' });
        return;
    }
    return;
});

bot.on('callback_query', async function (msg) {
   console.log(msg.data);
    switch(msg.data) {
        case 'go': {
            bot.sendMessage(msg.from.id, 
                            "Окей! Давай додамо твою лампу!\n", {
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: "Додати лампу", callback_data: 'add'}],
                        [{text: "skip (for dev)", callback_data: 'skip'}],
                    ]
                })
            });
            break;
        };
        case 'add': {
            bot.sendMessage(msg.from.id,
                           "Введи код лампи, який вказаний в твоєму особистому кабінеті"
                            + "\n\nЯкщо ти передумав - напиши «cancel»"
                           );
            add_user.push(msg.from.id);
            break;
        };
        case 'skip': {
             bot.sendMessage(msg.from.id,
                           "Ви ввійшли в режим розробника."
                            + "\nВін доступний тільки до релізу лампи."
                           );
             test_mode_users.push(msg.from.id);
            break;
        };
        case 'lamp_on': {
            if(getAuth(msg.from.id) == false) return;
            temp_lamp = "on";
            bot.sendMessage(msg.from.id, "Лампа ввімкнена.\n\nВиберіть бажану дію",{
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: "Змінити колір", callback_data: 'set_color'},{text: "Змінити яскравість", callback_data: 'set_brightness'}],
                        (temp_lamp == 'off' ? ([{text: "Ввімкнути лампу", callback_data: 'lamp_on'}]):([{text: "Ввимкнути лампу", callback_data: 'lamp_off'}]) ) 
                    ]
                })
            }) 
            break;
        };
        case 'lamp_off': {
            if(getAuth(msg.from.id) == false) return;
            temp_lamp = "off";
            bot.sendMessage(msg.from.id, "Лампа вимкнена.\n\nВиберіть бажану дію",{
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: "Змінити колір", callback_data: 'set_color'},{text: "Змінити яскравість", callback_data: 'set_brightness'}],
                        (temp_lamp == 'off' ? ([{text: "Ввімкнути лампу", callback_data: 'lamp_on'}]):([{text: "Ввимкнути лампу", callback_data: 'lamp_off'}]) ) 
                    ]
                })
            }) 
            break;
        };
        case 'menu': {
            if(getAuth(msg.from.id) == false) return;
            bot.sendMessage(msg.from.id, "Меню\n\nВиберіть бажану дію",{
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: "Змінити колір", callback_data: 'set_color'},{text: "Змінити яскравість", callback_data: 'set_brightness'}],
                        (temp_lamp == 'off' ? ([{text: "Ввімкнути лампу", callback_data: 'lamp_on'}]):([{text: "Ввимкнути лампу", callback_data: 'lamp_off'}]) ) 
                    ]
                })
            }) 
            break;
        };
        case 'set_color': {
            if(getAuth(msg.from.id) == false) return;
            bot.sendMessage(msg.from.id, "Виберіть колір",{
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: "Білий", callback_data: 'set_color_white'},{text: "Червоний", callback_data: 'set_color_red'},{text: "Зелений", callback_data: 'set_color_green'}],
                        [{text: "Жовтий", callback_data: 'set_color_yellow'},{text: "Синій", callback_data: 'set_color_blue'},{text: "Оранжевий", callback_data: 'set_color_orange'}],
                        [{text: "Ефект «Fade»", callback_data: 'set_color_fade'},{text: "Ефект «Gradient»", callback_data: 'set_color_blue'}],
                        [{text: "Меню", callback_data: 'menu'}]
                    ]
                })
            }) 
            break;
        };
        case 'set_brightness': {
            bot.sendMessage(msg.from.id, "Виберіть колір",{
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: "Білий", callback_data: 'set_color_white'},{text: "Червоний", callback_data: 'set_color_red'},{text: "Зелений", callback_data: 'set_color_green'}],
                        [{text: "Жовтий", callback_data: 'set_color_yellow'},{text: "Синій", callback_data: 'set_color_blue'},{text: "Оранжевий", callback_data: 'set_color_orange'}],
                        [{text: "Ефект «Fade»", callback_data: 'set_color_fade'},{text: "Ефект «Gradient»", callback_data: 'set_color_blue'}],
                        [{text: "Меню", callback_data: 'menu'}]
                    ]
                })
            }) 
            break;
        };
        default: {
            bot.sendMessage(msg.from.id, "В розробці.");
            break;
        }
    }
    return;
});

var getAuth = (user) => {
    let status = true;
    if(test_mode_users.indexOf(user) == -1) {
        bot.sendMessage(user, "Ви не додали лампу!\nНатисність кнопку «додати лампу», щоб авторизуватись",{
                reply_markup: JSON.stringify({
                    inline_keyboard: [
                        [{text: "Додати лампу", callback_data: 'add'}]
                    ]
                })
            });
        status = false;
    }
    return status;
}