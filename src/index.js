import './styles.css';
import { getTrendingMovies, getGenres } from './api.js';

const genres = document.querySelectorAll('.genres');
const logo = document.querySelector('.logo');

const displayMovies = async (list, title = '') => {
  const data = await list;
  const moviesList = document.querySelector('.movies-list');
  const categoryTitle = document.querySelector('.title');
  categoryTitle.innerHTML = title;
  moviesList.innerHTML = '';
  data.forEach((movie) => {
    moviesList.innerHTML += `
    <li>
      <div class="image-container">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster" />
      </div>
      <div class="movie-title-container">
        <h2>${movie.name || movie.title}</h2>
        <button type="button" class="like-btn">
          <span class="material-symbols-outlined"> favorite </span>
          5 likes
        </button>
      </div>
      <div>
        <button type="button" class="comments-btn">Comments</button>
      </div>
    </li>
    `;
  });
};

document.addEventListener('DOMContentLoaded', () => {
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
