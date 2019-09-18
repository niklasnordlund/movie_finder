const express = require('express');

const app  = express();
const http = require('http').Server(app);
const path = require('path');
const cors = require('cors');

const api = require('./server/movie_api');

app.use(cors());
app.use(express.static(__dirname + '/dist'));

app.get('/api/top-list', async function (request, response) {
  response.json(await api.getTopList());
});

app.get('/api/search', async function (request, response) {
  response.json(await api.search(request.query.q));
});

app.get('/api/movie/:id', async function (request, response) {
  response.json(await api.getMovie(request.params.id));
});

app.get('/', function (request, response) {
  response.sendFile(path.resolve('dist/index.html'));
});

http.listen(3001, function () {
  console.log('app running on port 3001'); // eslint-disable-line no-console
});
