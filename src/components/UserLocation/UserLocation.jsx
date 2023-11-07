import React, { useEffect, useState } from 'react';

import geoApi from './../../utils/GeoApi';

import './UserLocation.scss';

const UserLocation = () => {
  const [location, setLocation] = useState('Санкт-Петербург');

  useEffect(() => {
    geoApi
      .getCity()
      .then((res) => setLocation(res.city))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="user-location">
      <svg>
        <use xlinkHref="/sprite.svg#place" />
      </svg>
      <span className='user-location__text'>{location}</span>
    </div>
  );
};

export default UserLocation;
