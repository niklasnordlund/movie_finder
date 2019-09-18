const fetch = require("node-fetch");
const models = require('./movie_models');

const hostname = 'https://api.themoviedb.org/3/';
const apiKey = 'ccba9b06dc5b2936516c31b6bd6c6bc6';

const isListResult = (json) => json && Array.isArray(json.results);

function toUrlParams(requestParams = {}) {
  const params = { ...requestParams, api_key: apiKey };
  return Object.entries(params).map(([key, value]) => key + '=' + value).join('&');
}

async function request(endpoint, params = {}) {
  try {
    const response = await fetch(hostname + endpoint + '?' + toUrlParams(params));
    const json = await response.json();
    return isListResult(json)
      ? json.results.map(models.movieListItem) 
      : models.movieItem(json);
  } catch (error) {
    return error;
  }
}

async function getTopList() {
  return await request('movie/popular');
}

async function getMovie(id) {
  return await request('movie/' + id);
}

async function search(query) {
  return await request('search/movie', { query });
}

module.exports = {
  getTopList,
  getMovie,
  search,
}
