const mostPopularUrl = (mediaType: string) =>
  `${mediaType}/popular?language=en-US&page=1`;
const genreUrl = (type: string) => `genre/${type}/list?language=en`;
const SearchUrl = (title: string, apiKey: string) =>
  `search/multi?query=${title}&api_key=${apiKey}`;
const trendingMoviesUrl = () => "trending/movie/day?language=en-US";
const movieTrailerUrl = (movieId: string) =>
  `movie/${movieId}/videos?language=en-US`;
const youtubeEmbedUrl = (urlKey: string) =>
  `https://www.youtube.com/embed/${urlKey}`;

export {
  mostPopularUrl,
  genreUrl,
  SearchUrl,
  trendingMoviesUrl,
  movieTrailerUrl,
  youtubeEmbedUrl,
};
