const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const likesListId = 'd7vELbAR59v1NLTIl9t7';

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
