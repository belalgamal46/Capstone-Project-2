const commentCounter = (comments = []) => {
  if (typeof comments === 'object' && typeof comments.length === 'number') {
    return comments.length;
  }
  throw new Error('Wrong data type please send an array in function parameter');
};

export default commentCounter;
