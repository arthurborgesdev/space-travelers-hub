import { GET_MISSIONS, GET_MISSIONS_SUCCESS, GET_MISSIONS_ERR } from '../slices/missionsSlice';

// Actions

const TOGGLE_MISSION = 'missions/missions/TOGGLE_MISSION';

// Initial state

const initialState = {
  missions: [],
};

// Action Creators

export const toggleMission = (payload) => ({
  type: TOGGLE_MISSION,
  payload,
});

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MISSION:
    {
      const newMissions = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: !mission.reserved };
      });
      return { ...state, missions: newMissions };
    }
    case GET_MISSIONS:
      return { ...state, pending: true };
    case GET_MISSIONS_SUCCESS:
    {
      const data = action.missions;
      const subset = [];
      data.forEach((mission) => {
        subset.push(
          {
            mission_id: mission.mission_id,
            mission_name: mission.mission_name,
            description: mission.description,
          },
        );
      });
      return { ...state, pending: false, missions: subset };
    }
    case GET_MISSIONS_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
