import React from 'react';

import Login from '../components/Login/Login';
import RegisterLink from '../components/RegisterLink/RegisterLink';

import './LoginPage.scss';

interface LoginPageProps {
  onLogin: (values: {email: string, password: string}) => Promise<void>;
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
