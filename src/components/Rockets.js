import React from 'react';

const Rockets = () => {
  const rockets = {
    title: 'Falcon 1',
    description: 'The Falcon 1 was an expendable...',
    reserved: true,
  };

  return (
    <div className="rocket-container">
      <img className="rocket-image" alt="rocket" src="https://picsum.photos/200/150" />
      <div className="rocket-right-panel">
        <p className="rocket-title">{rockets.title}</p>
        <p className="rocket-description">
          {
            rockets.reserved
              ? <input className="reserved-notification" type="button" value="Reserved" />
              : null
          }
          {rockets.description}
        </p>
        {
          rockets.reserved
            ? <input className="rocket-cancel" type="button" value="Cancel reservation" />
            : <input className="rocket-reserve" type="button" value="Reserve Rocket" />
        }
      </div>
    </div>
  );
};

export default Rockets;
