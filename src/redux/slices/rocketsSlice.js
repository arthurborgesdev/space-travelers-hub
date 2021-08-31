const GET_ROCKETS = 'books/rocketsslice/GET_ROCKETS';
const GET_ROCKETS_SUCCESS = 'rockets/rocketsslice/GET_ROCKETS_SUCCESS';
const GET_ROCKETS_ERR = 'rockets/rocketsslice/GET_ROCKETS_ERR';

const rocketsURL = 'https://api.spacexdata.com/v3/rockets';

const getRockets = () => async (dispatch) => {
  dispatch({ type: GET_ROCKETS });
  const response = await fetch(rocketsURL);
  const rockets = await response.json();
  return dispatch({ type: GET_ROCKETS_SUCCESS, rockets });
};

export {
  getRockets as default,
  GET_ROCKETS,
  GET_ROCKETS_SUCCESS,
  GET_ROCKETS_ERR,
};