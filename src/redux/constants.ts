const mostPopularUrl = (mediaType: string) =>
  `${mediaType}/popular`;
const fetchContentPageItemsByCategoryUrl=(mediaType:string,category:string,page:string)=>`${mediaType}/${category}?page=${page}`
const genreUrl = (type: string) => `genre/${type}/list`;
const SearchUrl = (title: string, apiKey: string) =>
  `search/multi?query=${title}&api_key=${apiKey}`;
const trendingMoviesUrl = () => "trending/movie/day";
const movieTrailerUrl = (movieId: number,type:string) =>
  `${type}/${movieId}/videos`;
const youtubeEmbedUrl = (urlKey: string) =>
  `https://www.youtube.com/embed/${urlKey}`;
const contentImageUrl =(path :string)=> `https://image.tmdb.org/t/p/original${path}`
const fetchByIdUrl =(id:string ,mediaType:string)=>`${mediaType}/${+id}?`
const fetchCreditsByIdUrl =(type:string , id:string)=>`${type}/${id}/credits`
const fetchSimilarByIdUrl =(type:string , id:string)=>`${type}/${id}/similar`
const fetchReviewsByIdUrl =(type:string, id:string)=>`${type}/${id}/reviews`
const fetchSearchLanguageUrl = "configuration/languages"
const fetchKeywordsUrl=(keyword:string,apiKey:string)=>`search/keyword?query=${keyword}&api_key=${apiKey}`
const fetchContentByExpandSearchUrl=(type:string)=> `discover/${type}?`
const SearchContentByTypeAndTitleUrl=(type:string,title:string,apiKey:string)=>`search/${type}?query=${title}&api_key=${apiKey}`
const fetchPersonDetailUrl =(id:string)=>`person/${id}`
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
  fetchSimilarByIdUrl,
  fetchReviewsByIdUrl,
  fetchSearchLanguageUrl,
  fetchKeywordsUrl,
  fetchContentByExpandSearchUrl,
  SearchContentByTypeAndTitleUrl,
  fetchPersonDetailUrl,
  fetchContentPageItemsByCategoryUrl
};
