import React from 'react';
import useForm from '../hooks/useForm';
import AuthorizationForm from './AuthorizationForm';

function Login({onLogin}) {
  const { values, handleChange } = useForm({email: '', password: ''});

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <AuthorizationForm
      name="login"
      title="Вход"
      button="Войти"
      isLoginSuggestion={false}
      onSubmit={handleSubmit}
    >
      <label className="authorization-form__label">
        <input
          className="authorization-form__input authorization-form__input_title_email"
          type="email"
          name="email"
          id="authorization-form__email"
          placeholder="Email"
          autoComplete="email"
          minLength="6"
          maxLength="50"
          required
          value={values.email ?? ''}
          onChange={handleChange}
        />
        {/* TODO: try to rename input name from  ̀title` to `name` */}
      </label>
      <span className="authorization-form__input-error authorization-form__email-error"></span>
      <label className="authorization-form__label">
        <input
          className="authorization-form__input authorization-form__input_title_password"
          type="password"
          name="password"
          id="authorization-form__password"
          placeholder="Пароль"
          autoComplete="current-password"
          required
          value={values.password ?? ''}
          onChange={handleChange}
        />
      </label>
    </AuthorizationForm>
  )
}

export default Login;
