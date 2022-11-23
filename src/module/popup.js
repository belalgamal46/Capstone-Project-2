import { getMovieWithId } from './api.js';

const popupElement = document.querySelector('.popup-wrapper');
const popup = async (id) => {
  const data = await getMovieWithId(id);
  popupElement.innerHTML = '';
  popupElement.classList.remove('hide');

  const closePopup = document.createElement('div');
  closePopup.className = 'popup-close';
  closePopup.innerHTML = '<span class="material-symbols-outlined">close</span>';
  popupElement.appendChild(closePopup);

  const mainPopup = document.createElement('div');
  mainPopup.classList = 'popup';
  mainPopup.innerHTML = `<div class="popup-img">
    <img src="https://image.tmdb.org/t/p/w500/${data.poster_path}" alt="poster" />
  </div>
  <h1 class="popup-title">${data.original_title}</h1>
  <div>
    <p class="description">
      ${data.overview}
    </p>
    <p>Release Date: ${data.release_date}</p>
    <div class="rating">
      <span class="material-symbols-outlined rate">grade</span>
      <span>${data.vote_average}</span>
    </div>
  </div>`;

  popupElement.appendChild(mainPopup);
};

export default popup;