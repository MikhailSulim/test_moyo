import Header from './components/Header/Header';
import LoginPage from './Pages/LoginPage';
import { LOGIN_ERROR_TEXT } from './utils/constants';

import './App.scss';

function App() {
  function cbLogin({ email, password }) {
    // функция-заглушка для имитации неудачного запроса к серверу при авторизации
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log(email, password);
        rej(new Error(LOGIN_ERROR_TEXT));
      }, 2000);
    });
  }

  return (
    <div className="App">
      <Header />
      <LoginPage onLogin={cbLogin} />
    </div>
  );
}

export default App;
