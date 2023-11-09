import React from 'react';

import './Input.scss';

const Input = ({ name, type, placeholder, isValid, ...props }) => {
  return (
    <input
      className={`input input_type_${type} ${!isValid && 'input_error'}`}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      required
      autoComplete='off'
      {...props}
    />
  );
};

export default Input;