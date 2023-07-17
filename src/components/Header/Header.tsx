import AuthNav from 'components/Auth/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { selectIsLoggenIn } from 'redux/auth/selectors';
import css from './Header.module.css';
import { useAppSelector } from 'hooks/useAppSelector';

const Header = () => {
  const isLoggedIn = useAppSelector(selectIsLoggenIn);

  return (
    <div className={css.headerContainer}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
export default Header;
