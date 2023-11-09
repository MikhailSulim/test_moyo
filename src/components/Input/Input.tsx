import React, { ChangeEvent } from 'react';

import './Input.scss';

interface InputProps {
  name: string;
  type: 'email' | 'password';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  minLength?: number;
  pattern: string;
  title: string;
  value: string;
  placeholder: string;
  isValid: boolean;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  placeholder,
  title,
  minLength,
  onChange,
  pattern,
  isValid,
}) => {
  return (
    <input
      className={`input input_type_${type} ${!isValid && 'input_error'}`}
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      required={true}
      title={title}
      minLength={minLength}
      pattern={pattern}
      onChange={onChange}
      autoComplete="off"
    />
  );
};

export default Input;
