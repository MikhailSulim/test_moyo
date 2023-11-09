import React from 'react';

import './RegisterLink.scss';

const RegisterLink = () => {
  return (
    <div className='register-link'>
      <p className='register-link__text'>Ещё нет аккаунта?</p>
      <a href='/' className='register-link__link'>Зарегистрироваться</a>
    </div>
  );
};

export default RegisterLink;