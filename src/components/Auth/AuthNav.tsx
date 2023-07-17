import { NavLink } from 'react-router-dom';
import css from './Auth.module.css';

const AuthNav: React.FC = () => {
  return (
    <div className={css.authMenu}>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Sign in</NavLink>
    </div>
  );
};

export default AuthNav;
