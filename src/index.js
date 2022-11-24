import './styles.css';

import { getTrendingMovies, getGenres } from './module/moviesApi.js';
import LikesManager from './module/likesManager.js';
import popup from './module/popup.js';

const genres = document.querySelectorAll('.genres');
const logo = document.querySelector('.logo');
const moviesList = document.querySelector('.movies-list');
const popupElement = document.querySelector('.popup-wrapper');

const displayMovies = async (list, title = '') => {
  const data = await list;
  const categoryTitle = document.querySelector('.title');
  categoryTitle.innerHTML = `${title} (${data.length})`;
  moviesList.innerHTML = '';

  const likesDataObject = await LikesManager.getMovielikesData();

  data.forEach((movie) => {
    const li = document.createElement('li');
    li.classList.add('movie-item');
    li.id = movie.id;

    const div = document.createElement('div');
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'comments-btn';
    button.textContent = 'Comments';
    button.id = movie.id;
    div.appendChild(button);
    button.addEventListener('click', () => {
      popup(button.id);
    });

    li.innerHTML = `
      <div class="image-container">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster" />
      </div>
      <div>
        <div class="movie-title-container">
          <h2>${movie.name || movie.title}</h2>
          <button class="like-btn" type="button">
            <span class="material-symbols-outlined solid">
              favorite
            </span>
            <span id="p${movie.id}-likes-count">
              ${likesDataObject[movie.id]?.likes || 0} likes
            </span>
          </button>
        </div>
      </div>
      `;

    li.appendChild(div);
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

popupElement.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('material-symbols-outlined') ||
    e.target.classList.contains('popup-wrapper')
  ) {
    popupElement.classList.add('hide');
  }
});

moviesList.addEventListener('click', (event) => {
  if (
    event.target.parentElement.nodeName === 'BUTTON' ||
    event.target.classList.contains('like-btn')
  ) {
    Array.from(moviesList.children).forEach(async (child) => {
      if (event.target.closest('.movie-item').id === child.id) {
        const likesCount = document.querySelector(`#p${child.id}-likes-count`);
        const count = parseInt(likesCount.innerText.split(' ')[0], 10) + 1;

        likesCount.innerHTML = `${count} likes`;

        await LikesManager.createMovieLikes(parseInt(child.id, 10));
      }
    });
  }
});
