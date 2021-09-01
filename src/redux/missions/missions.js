import { GET_MISSIONS, GET_MISSIONS_SUCCESS, GET_MISSIONS_ERR } from '../slices/missionsSlice';

// Actions

const JOIN_MISSION = 'missions/missions/JOIN_MISSION';

// Initial state

const initialState = {
  missions: [],
};

// Action Creators

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION:
    {
      const newMissions = state.missions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
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
