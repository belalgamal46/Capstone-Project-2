const apiKey = '4de7975ef400d300ae019f76c489bf9f';
const baseUrl = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const data = await fetch(`${baseUrl}/trending/all/day?api_key=${apiKey}`);
  const dataParsed = await data.json();
  return dataParsed.results;
};
