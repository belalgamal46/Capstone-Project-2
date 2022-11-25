import { getMovieWithId } from './moviesApi.js';
import { createComments, getComments } from './involvementAPI.js';
import commentCounter from './commentsCounter.js';

const popupElement = document.querySelector('.popup-wrapper');

const popup = async (id, movie) => {
  const data = await getMovieWithId(id);
  popupElement.innerHTML = '';
  popupElement.classList.remove('hide');

  const closePopup = document.createElement('div');
  closePopup.className = 'popup-close';
  closePopup.innerHTML = '<span class="material-symbols-outlined">close</span>';
  popupElement.appendChild(closePopup);

  const commentForm = document.createElement('form');
  commentForm.className = 'comment-form';
  const formIntro = document.createElement('h2');
  formIntro.textContent = 'Add a comment';
  commentForm.appendChild(formIntro);

  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.placeholder = 'Your name';
  nameInput.id = 'user-name';
  commentForm.appendChild(nameInput);

  const commentInput = document.createElement('input');
  commentInput.type = 'text';
  commentInput.placeholder = 'Your insights';
  commentInput.id = 'user-comment';
  commentForm.appendChild(commentInput);

  const commentbtn = document.createElement('button');
  commentbtn.type = 'submit';
  commentbtn.textContent = 'COMMENT';
  commentbtn.id = 'comment-btm';
  commentForm.appendChild(commentbtn);

  const comments = await getComments(id);

  const commentSection = document.createElement('div');
  commentSection.className = 'comment-section';
  const commentHeader = document.createElement('h2');

  const numberOfComments = commentCounter(comments);
  commentHeader.textContent = `Comments(${numberOfComments || 0})`;
  commentSection.appendChild(commentHeader);

  const displayComments = (comments) => {
    if (comments.length) {
      comments.forEach((comment) => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comments-container';
        commentDiv.innerHTML = '';
        commentDiv.innerHTML = `
      <span class="comment-date">${comment.creation_date}</span>
      <span class="username">${comment.username}:</span>
      <span class="comment-text">${comment.comment}</span>
      `;
        commentSection.appendChild(commentDiv);
      });
    }
  };

  displayComments(comments);

  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    await createComments(id, nameInput.value, commentInput.value);
    const comments = await getComments(id);
    commentForm.reset();
    commentSection.innerHTML = '';
    commentSection.appendChild(commentHeader);
    const numberOfComments = commentCounter(comments);
    commentHeader.textContent = `Comments(${numberOfComments || 0})`;
    displayComments(comments);
  });

  const mainPopup = document.createElement('div');
  mainPopup.classList = 'popup';
  mainPopup.innerHTML = `
  <div>
    <div class="popup-img">
      <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="poster" />
    </div>
    <h1 class="popup-title">${movie.title || movie.name}</h1>  
  </div>
  <div>
    <p class="description">
      ${!data.overview ? movie.overview : data.overview}
    </p>
    <p>Release Date: ${
  !data.release_date ? movie.release_date || movie.first_air_date : data.release_date
}</p>
    <div class="rating">
      <span class="material-symbols-outlined rate">grade</span>
      <span>${!data.vote_average ? movie.vote_average : data.vote_average}</span>
    </div>
  </div>
  <br>
  `;
  mainPopup.appendChild(commentSection);
  mainPopup.appendChild(commentForm);
  popupElement.appendChild(mainPopup);
};

export default popup;
