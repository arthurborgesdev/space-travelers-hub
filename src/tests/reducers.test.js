import missionsReducer, { toggleMission } from '../redux/missions/missions';
import rocketsReducer, { toggleReserveRocket } from '../redux/rockets/rockets';

describe('test initial state', () => {
  test('should return the initial state of missions reducer', () => {
    expect(missionsReducer(undefined, {})).toEqual({
      missions: [],
    });
  });
  test('should return the initial state of rockets reducer', () => {
    expect(rocketsReducer(undefined, {})).toEqual({
      rockets: [],
    });
  });
});

describe('test toggle reserved action', () => {
  test('should return the mission with reverted reserved value', () => {
    const exampleInitialState = {
      missions: [
        {
          mission_id: '9D1B7E0',
          reserved: true,
        },
      ],
    };
    expect(missionsReducer(exampleInitialState, toggleMission('9D1B7E0'))).toEqual(
      {
        missions: [
          {
            mission_id: '9D1B7E0',
            reserved: false,
          },
        ],
      },
    );
  });

  test('should return the rockets with reverted reserved value', () => {
    const initialRocketState = {
      rockets: [
        {
          id: 1,
          reserved: true,
        },
      ],
    };
    expect(rocketsReducer(initialRocketState, toggleReserveRocket(1))).toEqual(
      {
        rockets: [
          {
            id: 1,
            reserved: false,
          },
        ],
      },
    );
  });
});
