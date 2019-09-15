const express = require('express');

const app  = express();
const http = require('http').Server(app);
const path = require('path');

// app.use(express.static(__dirname + '/src'));
// app.use(express.static(__dirname + '/build'));

app.get('/top-list', function (request, response) {
  response.json(['top-list']);
});

app.get('/search', function (request, response) {
  response.json(['search']);
});

app.get('/movie', function (request, response) {
  response.json(['movie']);
});

app.get('/', function (request, response) {
  response.sendFile(path.resolve('app/index.html'));
});

http.listen(3001, function () {
  console.log('app running on port 3001');
});