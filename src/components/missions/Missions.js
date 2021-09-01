import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getMissions from '../../redux/slices/missionsSlice';
import { toggleMission } from '../../redux/missions/missions';

const Missions = () => {
  const state = useSelector((state) => state.missionsReducer.missions);

  const dispatch = useDispatch();

  useEffect(async () => {
    if (!state.length) {
      await dispatch(getMissions());
    }
  }, []);

  const toggleClickEvent = (e) => {
    const missionID = e.target.parentNode.parentNode.id;
    dispatch(toggleMission(missionID));
  };

  const missionsTable = state.map((mission) => (
    <tr key={mission.mission_id} id={mission.mission_id}>
      <td className="mission-title">{mission.mission_name}</td>
      <td className="mission-description">{mission.description}</td>
      <td className="mission-reserve">
        {
          mission.reserved
            ? <span className="active-member">Active Member</span>
            : <span className="inactive-member">NOT A MEMBER</span>
        }
      </td>
      <td className="mission-btn">
        {
          mission.reserved
            ? <button type="button" className="leave-btn" onClick={toggleClickEvent}>Leave Mission</button>
            : <button type="button" className="join-btn" onClick={toggleClickEvent}>Join Mission</button>
        }
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {missionsTable}
      </tbody>
    </table>
  );
};

export default Missions;
