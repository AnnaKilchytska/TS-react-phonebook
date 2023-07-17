// import { Tab } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggenIn } from 'redux/auth/selectors';
import css from './Navigation.module.css';

const Navigation: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggenIn);

  return (
    <div className={css.navigation}>
      <NavLink to="/">Home</NavLink>

      {isLoggedIn && (
        <NavLink className={css.navigationItem} to="/contacts">
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
