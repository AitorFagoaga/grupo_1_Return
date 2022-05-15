const express = require('express');
const path = require('path');

const myLocalServer = express();

const publicFolderPath = path.join(__dirname, '/public');
myLocalServer.use(express.static(publicFolderPath));

myLocalServer.listen(3000, () => {
    console.log('El servidor se ha iniciado correctamente.');
})

myLocalServer.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/views/index.html'));
})

myLocalServer.get('/productCartEmpty', (request, response) => {
    response.sendFile(path.join(__dirname, '/views/productCartEmpty.html'));
})

myLocalServer.get('/productCartFull', (request, response) => {
    response.sendFile(path.join(__dirname, '/views/productCartFull.html'));
})

myLocalServer.get('/login', (request, response) => {
    response.sendFile(path.join(__dirname, '/views/login.html'));
})

myLocalServer.get('/productDetail', (request, response) => {
    response.sendFile(path.join(__dirname, '/views/productDetail.html'));
})

myLocalServer.get('/register', (request, response) => {
    response.sendFile(path.join(__dirname, '/views/register.html'));
})

