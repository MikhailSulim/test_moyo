import React from 'react';

import Login from '../components/Login/Login.tsx';
import RegisterLink from '../components/RegisterLink/RegisterLink.tsx';

import './LoginPage.scss';

interface LoginPageProps {
  onLogin: (values) => Promise<void>;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <main className="login-page">
      <Login onLogin={onLogin} />
      <RegisterLink />
    </main>
  );
};

export default LoginPage;
