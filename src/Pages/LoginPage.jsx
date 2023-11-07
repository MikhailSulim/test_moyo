import React from 'react';

import Header from '../components/Header/Header';
import Login from '../components/Login/Login';

import './LoginPage.scss';

const LoginPage = () => {
  return (
    <main className='login-page'>
      
      <Login/>
    </main>
  );
};

export default LoginPage;