import React from 'react';
import { useSelector } from 'react-redux';

const MissionsProfile = () => {
  const state = useSelector((state) => state.missionsReducer.missions);

  const joined = state.filter((mission) => mission.reserved);

  const showJoined = joined.map((mission) => (
    <div key={mission.mission_id}>{mission.mission_name}</div>
  ));

  return (
    <div>
      {showJoined}
    </div>
  );
};

export default MissionsProfile;
