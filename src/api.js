const getTrendingMovies = async () => {
  const data = await fetch(
    'https://api.themoviedb.org/3/trending/all/day?api_key=4de7975ef400d300ae019f76c489bf9f'
  );
  return data.json();
};
