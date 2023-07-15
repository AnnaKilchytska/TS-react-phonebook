import AuthNav from 'components/Auth/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggenIn } from 'redux/auth/selectors';
import css from './Header.module.css';

function Header() {
  const isLoggedIn = useSelector(selectIsLoggenIn);

  return (
    <div className={css.headerContainer}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}
export default Header;
