const moviesCounter = (movies = []) => {
  if (typeof movies === 'object' && typeof movies.length === 'number') {
    return movies.length;
  }
  throw new Error('Wrong data type please send an array in function parameter');
};

export default moviesCounter;
