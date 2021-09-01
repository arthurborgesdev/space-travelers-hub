import { GET_ROCKETS, GET_ROCKETS_SUCCESS, GET_ROCKETS_ERR } from '../slices/rocketsSlice';

// Actions

const RESERVE_ROCKET = 'rockets/rockets/RESERVE_ROCKET';

// Initial state

const initialState = {
  rockets: [],
};

// Action Creators

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_ROCKET:
    {
      const newRockets = state.rockets.map((rocket) => {
        if (rocket.id !== Number(action.payload)) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
      return { ...state, rockets: newRockets };
    }
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
