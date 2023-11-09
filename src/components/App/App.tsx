import React from 'react';

import LoginPage from '../../Pages/LoginPage';
import { LOGIN_ERROR_TEXT } from '../../utils/constants';
import Header from '../Header/Header';

import './App.scss';

const App:React.FC = () => {
  function cbLogin({ email, password }:{email:string; password: string}) {
    // функция-заглушка для имитации неудачного запроса к серверу при авторизации
    return new Promise<void>((res, rej) => {
      setTimeout(() => {
        console.log(email, password);
        rej(new Error(LOGIN_ERROR_TEXT));
      }, 2000);
    });
  }

  return (
    <div className="app">
      <Header />
      <LoginPage onLogin={cbLogin} />
    </div>
  );
};

export default App;
