import commentCounter from '../commentsCounter.js';

describe('Testing comments', () => {
  test('Should return number of comments', () => {
    document.body.innerHTML = `
            <div class="comments-section">
                <div>
                    <span class="comment-date">2022-11-24</span>
                    <span class="username">Belal:</span>
                    <span class="comment-text">Nice</span>
                </div>
                <div>
                    <span class="comment-date">2022-11-25</span>
                    <span class="username">shaddai:</span>
                    <span class="comment-text">Good movie</span>
                </div>
            </div>
        `;

    const list = document.querySelector('.comments-section').children;
    expect(commentCounter(list)).toBe(2);
  });

  test('should return zero if comment are zero', () => {
    document.body.innerHTML = `
      <div class="comments-section"></div>
    `;

    const list = document.querySelector('.comments-section').children;

    expect(commentCounter(list)).toBe(0);
  });

});
