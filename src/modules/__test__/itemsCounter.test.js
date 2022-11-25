import moviesCounter from '../moviesCounter.js';

describe('movie counter', () => {
  test('should return movies count', () => {
    document.body.innerHTML = `
      <ul class="movies-list">
        <li>
          movie 1
        </li>
        <li>
          movie 1
        </li>
        <li>
          movie 1
        </li>
      </ul>
    `;

    const moviesList = document.querySelector('.movies-list').children;

    expect(moviesCounter(moviesList)).toBe(3);
  });
});
