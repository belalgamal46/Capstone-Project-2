import './styles.css';

import { getTrendingMovies, getGenres } from './modules/api.js';
import { getLikes } from './modules/involvementAPI.js';
import popup from './module/popup.js';

const genres = document.querySelectorAll('.genres');
const logo = document.querySelector('.logo');
const moviesList = document.querySelector('.movies-list');
const popupElement = document.querySelector('.popup-wrapper');

const getMovielikesData = async () => {
  const likesData = await getLikes();
  return likesData.reduce((prev, curr) => ({ ...prev, [curr.item_id]: curr }), {});
};

const displayMovies = async (list, title = '') => {
  const categoryTitle = document.querySelector('.title');
  categoryTitle.innerHTML = title;
  moviesList.innerHTML = '';
  const data = await list;
  const likesDataObject = await getMovielikesData();

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

    button.addEventListener('click', () => {
      popup(button.id);
    });

    div.appendChild(button);

    li.innerHTML = `
      <div class="image-container">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster" />
      </div>
      <div>
        <div class="movie-title-container">
          <h2>${movie.name || movie.title}</h2>
          <button type="button" class="like-btn">
            <span class="material-symbols-outlined"> favorite </span>
            <span>${likesDataObject[movie.id]?.likes || 0} likes</span>
          </button>
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

popupElement.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('material-symbols-outlined')
    || e.target.classList.contains('popup-wrapper')
  ) {
    popupElement.classList.add('hide');
  }
});
