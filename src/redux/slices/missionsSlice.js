const GET_MISSIONS = 'books/MISSIONSslice/GET_MISSIONS';
const GET_MISSIONS_SUCCESS = 'MISSIONS/MISSIONSslice/GET_MISSIONS_SUCCESS';
const GET_MISSIONS_ERR = 'MISSIONS/MISSIONSslice/GET_MISSIONS_ERR';

const MissionsURL = 'https://api.spacexdata.com/v3/missions';

const getMissions = () => async (dispatch) => {
  dispatch({ type: GET_MISSIONS });
  const response = await fetch(MissionsURL);
  const missions = await response.json();
  return dispatch({ type: GET_MISSIONS_SUCCESS, missions });
};

export {
  getMissions as default,
  GET_MISSIONS,
  GET_MISSIONS_SUCCESS,
  GET_MISSIONS_ERR,
};
