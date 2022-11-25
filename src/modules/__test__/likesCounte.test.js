import LikesManager from '../likesManager.js';

describe('likes manager test', () => {
  test('should increment like counter', () => {
    let likesCount = 0;

    document.body.innerHTML = `<span id="p724495">${likesCount} likes</span>`;

    const span = document.querySelector('#p724495');
    const count = parseInt(span.innerHTML.split(' ')[0], 10) + 1;

    LikesManager.likesCounter(span, '724495');
    console.log(count);

    expect(likesCount).toBe(1);
  });
});
