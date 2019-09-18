const hostname = location.hostname;
const port = ':3001';
const path = '/api/';

function request(endpoint) {
  return fetch('//' + hostname + port + path + endpoint)
    .then(response => response.json())
}

export function getTopList() {
  return request('top-list');
}

export function getMovie(id) {
  return request('movie/' + id);
}

export function search(query) {
  return request('search?q=' + encodeURIComponent(query));
}