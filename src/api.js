const apiKey = '4de7975ef400d300ae019f76c489bf9f';
const baseUrl = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const data = await fetch(`${baseUrl}/trending/all/day?api_key=${apiKey}`);
  const dataParsed = await data.json();
  return dataParsed.results;
};

export const getGenres = async (id) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=4de7975ef400d300ae019f76c489bf9f&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
  );
  const res = await data.json();
  return res.results;
};
