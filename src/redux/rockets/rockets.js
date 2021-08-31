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
    {
      const data = action.rockets;
      const subset = [];
      data.forEach((rocket) => {
        subset.push(
          {
            id: rocket.id,
            rocket_name: rocket.rocket_name,
            description: rocket.description,
            flickr_images: rocket.flickr_images,
          },
        );
      });
      return { ...state, pending: false, rockets: subset };
    }
    case GET_ROCKETS_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
