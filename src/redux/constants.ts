const mostPopularUrl = (mediaType: string) =>
  `${mediaType}/popular?language=en-US&page=1`;
const genreUrl = (type: string) => `genre/${type}/list?language=en`;
const SearchUrl = (title: string, apiKey: string) =>
  `search/multi?query=${title}&api_key=${apiKey}`;
const trendingMoviesUrl = () => "trending/movie/day?language=en-US";
const movieTrailerUrl = (movieId: number,type:string) =>
  `${type}/${movieId}/videos?language=en-US`;
const youtubeEmbedUrl = (urlKey: string) =>
  `https://www.youtube.com/embed/${urlKey}`;
const contentImageUrl =(path :string)=> `https://image.tmdb.org/t/p/original${path}`
const fetchByIdUrl =(id:string ,mediaType:string)=>`${mediaType}/${+id}?language=en-US`
const fetchCreditsByIdUrl =(type:string , id:string)=>`${type}/${id}/credits`
const fetchSimilarByIdUrl =(type:string , id:string)=>`${type}/${id}/similar`

export {
  mostPopularUrl,
  genreUrl,
  SearchUrl,
  trendingMoviesUrl,
  movieTrailerUrl,
  youtubeEmbedUrl,
  contentImageUrl,
  fetchByIdUrl,
  fetchCreditsByIdUrl,
  fetchSimilarByIdUrl
};
