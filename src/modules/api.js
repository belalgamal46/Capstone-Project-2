const apiKey = '4de7975ef400d300ae019f76c489bf9f';
const baseUrl = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  try {
    const data = await fetch(`${baseUrl}/trending/all/day?api_key=${apiKey}`);
    const dataParsed = await data.json();
    return dataParsed.results;
  } catch (error) {
    return error;
  }
};

export const getGenres = async (id) => {
  try {
    const data = await fetch(
      `${baseUrl}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`,
    );
    const res = await data.json();
    return res.results;
  } catch (error) {
    return error;
  }
};

export const getMovieWithId = async (id) => {
  try {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4de7975ef400d300ae019f76c489bf9f&language=en-US`);
    const response = await data.json();
    return response;
  } catch (error) {
    return error;
  }
};
