import React, { useCallback, useEffect, useState } from 'react';

import useFormValidate from '../../hooks/useFormValidate';
import Input from '../Input/Input';
import Logo from '../Logo/Logo';
import SocialAuthenticator from '../SocialAuthenticator/SocialAuthenticator';
import SubmitBtn from '../SubmitBtn/SubmitBtn';

import './Login.scss';

const Login = ({onLogin}) => {
  const { values, errors, onChange, resetValidation, isFormValid } = useFormValidate();
  const [errorLogin, setErrorLogin] = useState('');
  const [btnText, setBtnText] = useState('войти');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setErrorLogin('');
      setBtnText('авторизация...');
      onLogin(values).then().catch(err=>setErrorLogin(err.message)).finally(()=>setBtnText('войти'));
      // resetValidation();
    },
    [values]
  );

  const onClearError = () => {
    if (errorLogin !== '') setErrorLogin(''); 
  };

  return (
    <div className="login">
      <Logo place="main" />

      <form className="login__form" name="form-login" onSubmit={onSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="Email"
          isValid={!errors.email}
          error={errors.email || ''}
          onChange={onChange}
          value={values.email || ''}
          pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
          title="Email должен быть в формате example@example.com"
        />

        <Input
          name="password"
          type="password"
          placeholder="Пароль"
          isValid={!errors.password}
          error={errors.password || ''}
          onChange={onChange}
          value={values.password || ''}
          minLength={8}
          pattern="^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).+$"
          title="Пароль должен быть более 8 символов и содержать минимум 1 букву латинского алфавита, 1 цифру и 1 спецсимвол"
        />

        {errorLogin !== '' && <span className="login__error">{errorLogin}</span>}

        <SubmitBtn isEnable={isFormValid} onClick={onClearError} btnText={btnText}/>

        <a href="/" className="login__recover">
          Забыли пароль?
        </a>
      </form>

      <SocialAuthenticator/>
    </div>
  );
};

export default Login;
