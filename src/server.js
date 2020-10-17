const express = require('express');
const path = require('path');
const pages = require('./pages.js')

const server = express();

// create route for static files
server
    .use(express.static('public'))

//configure template engine 
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

//create routes
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanage);

//initiate server
server.listen(5500);