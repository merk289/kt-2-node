let counter = 0;

function greet(name) {
    counter++;
    return 'Привет, ' + name + '! (вызов №' + counter + ')';
}

module.exports = { greet };