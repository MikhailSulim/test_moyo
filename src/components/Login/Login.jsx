import React from 'react';

import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

import './Login.scss';

const Login = () => {
  return (
    <div className='login'>
      <Logo place='main'/>
      
      <form className='login__form'>
        <Input type='email'/>
        <Input type='password'/>
        <SubmitBtn/>
        <a href='/' className='login__recover'>Забыли пароль?</a>
  

      </form>

      <div className='login__social'>
        <svg>
          <use xlinkHref='/sprite.svg#vk'/>
        </svg> 
        <svg>
          <use xlinkHref='/sprite.svg#google'/>
        </svg> 
        <svg>
          <use xlinkHref='/sprite.svg#yandex'/>
        </svg> 
      </div>
    </div>
  );
};

export default Login;