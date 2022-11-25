import './styles.css';

import { getTrendingMovies, getGenres } from './modules/moviesApi.js';
import LikesManager from './modules/likesManager.js';
import popup from './modules/popup.js';
import moviesCounter from './modules/moviesCounter.js';

const genres = document.querySelectorAll('.genres');
const logo = document.querySelector('.logo');
const moviesList = document.querySelector('.movies-list');
const popupElement = document.querySelector('.popup-wrapper');

const displayMovies = async (list, title = '') => {
  const data = await list;
  const categoryTitle = document.querySelector('.title');
  categoryTitle.innerHTML = `${title} (${moviesCounter(data)})`;
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

    const likeBtnDiv = document.createElement('div');
    const movieTitleContainer = document.createElement('div');
    const title = document.createElement('h2');
    const likeBtn = document.createElement('button');
    const heartIcon = document.createElement('span');
    const likesCount = document.createElement('span');

    movieTitleContainer.classList.add('movie-title-container');
    title.innerHTML = `${movie.name || movie.title}`;
    likeBtn.classList.add('like-btn');
    likeBtn.type = 'button';
    heartIcon.classList.add('material-symbols-outlined', 'favorite');
    heartIcon.innerHTML = 'favorite';
    likesCount.id = `p${movie.id}`;
    likesCount.innerHTML = `${likesDataObject[movie.id]?.likes || 0} likes`;

    likeBtn.append(heartIcon, likesCount);
    movieTitleContainer.append(title, likeBtn);
    likeBtnDiv.appendChild(movieTitleContainer);

    likeBtn.addEventListener('click', () => {
      LikesManager.likesCounter(likesCount, movie.id);
    });

    li.innerHTML = `
      <div class="image-container">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster" />
      </div>
      `;

    li.append(likeBtnDiv, div);
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
