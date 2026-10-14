const http = require('http');
const os = require('os');
const mysin = require('./mysin');     
const myName = require('./name');     
const person = require('./person');     
const greetings = require('./modules'); 
require('./globalvar');             
global.date = new Date();

const user = os.userInfo().username;
console.log('Имя пользователя ПК: ' + user);
const server = http.createServer((req, res) => {
    console.log('Запрос получен: ' + new Date().toLocaleString('ru-RU'));
    const hour = new Date().getHours();
    let hello;
    if (hour >= 5 && hour < 12) {
        hello = 'Доброе утро';
    } else if (hour >= 12 && hour < 18) {
        hello = 'Добрый день';
    } else {
        hello = 'Добрый вечер';
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

    res.write('<h1>' + hello + ', ' + user + '!</h1>');  
    res.write('<p>Привет, ' + myName + '!</p>');          

    res.write('<p>' + person.greet('Аня') + '</p>');
    res.write('<p>' + person.greet('Ваня') + '</p>');

    res.write('<hr>');
    res.write(greetings.getGreetings());               

    res.write('<p>sin(1) = ' + mysin.sin(1) + '</p>');

    res.write('<p>global.date = ' + global.date + '</p>');

    res.write('<p>global.name = ' + global.name + '</p>');
    console.log('global.name = ' + global.name);

    res.end();
});

server.listen(3000, () => {
    console.log('Сервер запущен: http://localhost:3000/');
});