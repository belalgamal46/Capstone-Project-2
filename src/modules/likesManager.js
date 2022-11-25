import { getLikes, createLikes } from './involvementAPI.js';

class LikesManager {
  static getMovielikesData = async () => {
    const likesData = await getLikes();
    return likesData.reduce((prev, curr) => ({ ...prev, [curr.item_id]: curr }), {});
  };

  static createMovieLikes = async (id) => {
    const response = await createLikes(id);
    return response;
  };

  static likesCounter = async (span, id) => {
    const count = parseInt(span.innerHTML.split(' ')[0], 10) + 1;
    span.innerHTML = `${count} likes`;
    await LikesManager.createMovieLikes(parseInt(id, 10));
  };
}

export default LikesManager;
