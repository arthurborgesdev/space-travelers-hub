import React from 'react';
import MissionsProfile from '../missions/MissionsProfile';

const Profile = () => (
  <div>
    <div className="my-missions-container">
      <h2>My Missions</h2>
      <MissionsProfile />
    </div>
    <div>My Rockets</div>
  </div>
);

export default Profile;
