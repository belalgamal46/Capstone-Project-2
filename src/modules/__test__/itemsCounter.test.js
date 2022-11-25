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

  test('should return zero if items is zero', () => {
    document.body.innerHTML = '<ul class="movies-list"></ul>';
    const moviesList = document.querySelector('.movies-list').children;
    expect(moviesCounter(moviesList)).toBe(0);
  });

  test('should throw error if function paramter is not equal to array', () => {
    expect(() => moviesCounter('belal')).toThrowError(
      'Wrong data type please send an array in function parameter',
    );
    expect(() => moviesCounter({ belal: 1 })).toThrowError(
      'Wrong data type please send an array in function parameter',
    );

    expect(() => moviesCounter(1)).toThrowError(
      'Wrong data type please send an array in function parameter',
    );
  });
});
