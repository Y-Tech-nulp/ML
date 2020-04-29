# Документація для бота

* [Події](#events)
* [Надсилання файлів](#sending-files)
* [Надсилання повідомлень](#sending-text)

<a name="events"></a>
## Події
1. `message`: отримання нового повідомлення будь-якого типу
  1. Залежно від властивостей, може містити: `text`, `audio`, `document`, `photo`,
     `sticker`, `video`, `voice`, `contact`, `location`,
     `new_chat_members`, `left_chat_member`, `new_chat_title`,
     `new_chat_photo`, `delete_chat_photo`, `group_chat_created`,
     `game`, `pinned_message`, `poll`, `migrate_from_chat_id`, `migrate_to_chat_id`,
     `channel_chat_created`, `supergroup_chat_created`,
     `successful_payment`, `invoice`, `video_note`
1. `channel_post`: отримання нового повідомлення з каналу
1. `edited_message`: отримання відредагованого повідомлення, яке містить в собі:
    - `edited_message_text` - новий текст повідомлення
    - `edited_message_caption` - старий текст повідомлення
1. `edited_channel_post`: отримання відредагованого повідомлення в каналі, яке містить в собі:
    - `edited_channel_post_text` - новий текст повідомлення
    - `edited_channel_post_caption` - старий текст повідомлення
1. `polling_error`: помилка в пулі
1. `error`: непередбачевана помилка!

Приклад обробки повідомлень
```js
bot.onText(/\/start/, function (msg, match) {
    bot.sendMessage(msg.from.id, 
                    "Привіт, я - бот від Y-Tech.\n"
                    +"Я допоможу тобі в управлінні твоєю лампою, поїхали?"
                   );
    return;
});
```
Або
```js
bot.on('message', function (msg) {
    bot.sendMessage(msg.from.id, "Привіт!");
});
```
<a name="sending-files"></a>
## Надсилання файлів

Надсилання аудіо
```js
bot.sendAudio(chatId, 'path/to/audio.mp3');
```

Надсилання аудіо №2
```js
const stream = fs.createReadStream('path/to/audio.mp3');
bot.sendAudio(chatId, stream);
```

Надсилання аудіо через буфер
```js
const buffer = fs.readFileSync('path/to/audio.mp3'); // sync! that's sad! :-( Just making a point!
bot.sendAudio(chatId, buffer);
```
Надсилання файлу через його ID в телеграмі
```js
const fileId = getFileIdSomehow(); // Присвоєння ID файла
bot.sendAudio(chatId, fileId);
```
Надсилання фото
```js
const url = 'https://telegram.org/img/t_logo.png';
bot.sendPhoto(chatId, url);
```
<a name="sending-text"></a>
## Надсилання повідомлення
Надсилання звичайного повідомлення
```js
bot.sendMessage(ID, TEXT);
```
