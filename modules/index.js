const first = require('./first');
const second = require('./second');

function getGreetings() {
    return '<p>Привет от ' + first + '</p>' +
           '<p>Привет от ' + second + '</p>';
}

module.exports = { getGreetings };