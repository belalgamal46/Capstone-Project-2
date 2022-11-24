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
}

export default LikesManager;
