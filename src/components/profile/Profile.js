import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">
      <div className="missions-column">
        <h2>My Missions</h2>
      </div>
      <div className="rockets-column">
        <h2>My Rockets</h2>
        {
          reservedRockets.map((rocket) => (
            <div key={rocket.id} className="rocket-name">{rocket.rocket_name}</div>
          ))
        }
      </div>
    </div>
  );
};

export default Profile;
