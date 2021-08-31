import { GET_ROCKETS, GET_ROCKETS_SUCCESS, GET_ROCKETS_ERR } from '../slices/rocketsSlice';

// Initial state

const initialState = {
  rockets: [],
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return { ...state, pending: true };
    case GET_ROCKETS_SUCCESS:
      return { ...state, pending: false, rockets: action.rockets };
    case GET_ROCKETS_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
