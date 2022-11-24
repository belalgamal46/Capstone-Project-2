const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const likesListId = 'd7vELbAR59v1NLTIl9t7';
const commentsId = '2kso98B7xYsjYtK8ZJ1x';

export const getLikes = async () => {
  try {
    const data = await fetch(`${baseUrl}/apps/${likesListId}/likes/`);
    const response = await data.json();
    return response;
  } catch (error) {
    return error;
  }
};

export const createLikes = async (id) => {
  try {
    const response = await fetch(`${baseUrl}/apps/${likesListId}/likes/`, {
      method: 'POST',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

    return response.text();
  } catch (error) {
    return error;
  }
};

export const createComments = async (id, username, comment) => {
  try {
    return await fetch(`${baseUrl}/apps/${commentsId}/comments?item_id=${id}`, {
      method: 'POST',
      body: JSON.stringify({ item_id: id, username, comment }),
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  } catch (error) {
    return error;
  }
};

export const getComments = async (id) => {
  try {
    const data = await fetch(`${baseUrl}/apps/${commentsId}/comments?item_id=${id}`);
    const response = await data.json();
    return response;
  } catch (error) {
    return error;
  }
};
