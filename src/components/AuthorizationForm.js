import React from 'react';
import { Link } from 'react-router-dom';

function AuthorizationForm({ name, title, button, isLoginSuggestion, children, onSubmit }) {

  return (
    <main className="authorization-form">
      <h2 className="authorization-form__title">{title}</h2>
      <form className="authorization-form__form" name={`${name}-form`} onSubmit={onSubmit}>
        {children}
        <span className="authorization-form__input-error authorization-form__password-error"></span>
        <button className="authorization-form__submit-button" type="submit">{button}</button>
      </form>
      {isLoginSuggestion && <p className="authorization-form__login-suggestion">Уже зарегистрированы? <Link
          to="/sign-in" className="authorization-form__login-link">Войти</Link></p>}
    </main>
  )
}

export default AuthorizationForm;
