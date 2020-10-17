const express = require('express');
const path = require('path');


const server = express();

// create route for static files
server.use(express.static('public'))

//create route
server.get('/', (request, response) => {
    return response.sendFile(path.join(__dirname, 'views', 'index.html'));
});

//initiate server

server.listen(5500);