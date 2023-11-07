import React from 'react';

import './Input.scss';

const Input = ({type}) => {
  return (
    <input type={type} className={`input input_${type}`}/>
  );
};

export default Input;