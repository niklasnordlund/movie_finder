const movieImage = (path) => 'http://image.tmdb.org/t/p/original' + path;

const movieListItem = (movie) => ({
  id: movie.id,
  title: movie.title,
});

const movieItem = (movie) => ({
  id: movie.id,
  backdrop: movieImage(movie.backdrop_path),
  budget: movie.budget,
  genres: movie.genres.map(genre => genre.name),
  overview: movie.overview,
  poster: movieImage(movie.poster_path),
  releaseDate: movie.release_date,
  revenue: movie.revenue,
  runtime: movie.runtime,
  status: movie.status,
  tagline: movie.tagline,
  title: movie.title,
  voteAverage: movie.vote_average,
});

module.exports = {
  movieItem,
  movieListItem,
}
