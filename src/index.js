import './styles.css';
import { getTrendingMovies } from './api.js';

const displayMovies = async () => {
  const data = await getTrendingMovies();
  const moviesList = document.querySelector('.movies-list');
  moviesList.innerHTML = '';
  console.log(data);
  data.map((movie) => {
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

document.addEventListener('DOMContentLoaded', displayMovies);
