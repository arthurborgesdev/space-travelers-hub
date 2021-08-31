import React from 'react';
import { useSelector } from 'react-redux';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets) || [];

  rockets.map((rocket) => (
    <div key={rocket.id} className="rocket-container">
      <img className="rocket-image" alt="rocket" src={rocket.flickr_images[0]} />
      <div className="rocket-right-panel">
        <p className="rocket-title">{rocket.rocket_name}</p>
        <p className="rocket-description">
          {
            rocket.reserved
              ? <input className="reserved-notification" type="button" value="Reserved" />
              : null
          }
          {rocket.description}
        </p>
        {
          rockets.reserved
            ? <input className="rocket-cancel" type="button" value="Cancel reservation" />
            : <input className="rocket-reserve" type="button" value="Reserve Rocket" />
        }
      </div>
    </div>
  ));
};

export default Rockets;
