const GET_ROCKETS = 'books/booksslice/GET_BOOKS';
const GET_ROCKETS_SUCCESS = 'books/booksslice/GET_BOOKS_SUCCESS';
const GET_ROCKETS_ERR = 'books/booksslice/GET_BOOKS_ERR';

const rocketsURL = 'https://api.spacexdata.com/v3/rockets';

const getRockets = () => async (dispatch) => {
  dispatch({ type: GET_ROCKETS });
  const response = await fetch(rocketsURL);
  const books = await response.json();
  return dispatch({ type: GET_ROCKETS_SUCCESS, rockets });
};

export {
  getRockets as default,
  GET_ROCKETS,
  GET_ROCKETS_SUCCESS,
  GET_ROCKETS_ERR,
};