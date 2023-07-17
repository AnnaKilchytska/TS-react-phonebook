import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import css from './UserMenu.module.css';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';

const UserMenu: React.FC = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <div className={css.userMenuContainer}>
      <span className={css.userMenuItem}>{user.email}</span>
      <button
        className={css.userMenuButton}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
