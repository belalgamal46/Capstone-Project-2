import LikesManager from '../likesManager.js';

LikesManager.createMovieLikes = jest.fn();

describe('likes manager test', () => {
  test('should increment like counter', () => {
    document.body.innerHTML = '<span id="p724495">0 likes</span>';

    const span = document.querySelector('#p724495');
    LikesManager.likesCounter(span, '724495');
    const likesCount = span.innerHTML.split(' ')[0];

    expect(likesCount).toBe('1');
    expect(LikesManager.createMovieLikes).toBeCalled();
  });
});
