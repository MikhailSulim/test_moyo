import React from 'react';

import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import RegisterLink from '../components/RegisterLink/RegisterLink';

import './LoginPage.scss';

const LoginPage = ({onLogin}) => {
  return (
    <main className='login-page'>
      <Login onLogin={onLogin}/>
      <RegisterLink/>
    </main>
  );
};

export default LoginPage;