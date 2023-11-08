import React from 'react';

import './Input.scss';

const Input = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className={`input input_${type}`}/>
  );
};

export default Input;