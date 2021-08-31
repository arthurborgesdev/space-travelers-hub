import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getMissions from '../../redux/slices/missionsSlice';

const Missions = () => {
  const state = useSelector((state) => state.missionsReducer);

  const dispatch = useDispatch();

  useEffect(async () => {
    if (!state.missions.length) {
      await dispatch(getMissions());
    }
  }, []);
  const mission = 'Mission';
  return (
    <table>
      <thead>
        <tr>
          <th>{mission}</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
    </table>
  );
};

export default Missions;
