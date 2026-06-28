const fs = require('fs');
const path = require('path');
const http = require('http');
const messages = require('./messages');

messages.sayHello();
messages.peopleIKnow.forEach(person => {
    console.log(`I know ${person}`);
});
