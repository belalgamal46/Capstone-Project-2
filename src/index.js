import './styles.css';
import { getTrendingMovies, getGenres } from './modules/api.js';
import { getLikes, createLikes } from './modules/involvementAPI.js';

const genres = document.querySelectorAll('.genres');
const logo = document.querySelector('.logo');

const getMovielikesData = async () => {
  const likesData = await getLikes();
  return likesData.reduce((prev, curr) => ({ ...prev, [curr.item_id]: curr }), {});
};

const moviesList = document.querySelector('.movies-list');

const displayMovies = async (list, title = '') => {
  const categoryTitle = document.querySelector('.title');
  categoryTitle.innerHTML = title;
  moviesList.innerHTML = '';
  const data = await list;
  const likesDataObject = await getMovielikesData();
  data.forEach(async ({ poster_path, name, title, id }) => {
    const li = document.createElement('li');
    li.classList.add('movie-item');
    li.id = id;
    li.innerHTML = `
      <div class="image-container">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="poster" />
      </div>
      <div>
        <div class="movie-title-container">
          <h2>${name || title}</h2>
          <button type="button" class="like-btn">
            <span class="material-symbols-outlined"> favorite </span>
            <span>${likesDataObject[id]?.likes || 0} likes</span>
          </button>
        </div>
        <div>
          <button type="button" class="comments-btn">Comments</button>
        </div>
      </div>`;
    moviesList.appendChild(li);
  });
};

document.addEventListener('DOMContentLoaded', async () => {
  displayMovies(getTrendingMovies(), 'Trending');
});

genres.forEach((item) => {
  item.addEventListener('click', () => {
    switch (item.id) {
      case 'action':
        displayMovies(getGenres(28), 'Action Movies');
        break;
      case 'comedy':
        displayMovies(getGenres(35), 'Comedy Movies');
        break;
      case 'animation':
        displayMovies(getGenres(16), 'Animations');
        break;
      default:
        displayMovies(getTrendingMovies(), 'Trending');
    }
  });
});

logo.addEventListener('click', () => {
  displayMovies(getTrendingMovies(), 'Trending');
});
