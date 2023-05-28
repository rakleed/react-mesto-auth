import logo from '../images/logo.svg';
import { Routes, Route, NavLink } from 'react-router-dom';

function Header({onSignOut, email}) {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип сайта" />
        <Routes>
          <Route path="/sign-up" element={<NavLink to="/sign-in" className="header__link">Войти</NavLink>} />
          <Route path="/sign-in" element={<NavLink to="/sign-up" className="header__link">Регистрация</NavLink>} />
          <Route path="/" element={<>
            <div className="header__container">
              <p className="header__email">{email}</p>
              <NavLink to="/sign-in" className="header__link header__link_faded" onClick={onSignOut}>Выйти</NavLink>
            </div>
          </>} />
        </Routes>
    </header>
  )
}

export default Header;
