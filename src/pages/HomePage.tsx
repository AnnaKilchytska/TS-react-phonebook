import { NavLink } from 'react-router-dom';
import { selectIsLoggenIn } from 'redux/auth/selectors';
import css from './HomePage.module.css';
import React from 'react';
import { useAppSelector } from 'hooks/useAppSelector';

const HomePage: React.FC = () => {
  const isLoggedIn = useAppSelector(selectIsLoggenIn);

  return (
    <div className={css.homePageContainer}>
      <h1>This is your phone book!</h1>
      {!isLoggedIn ? (
        <p>
          Please, <NavLink to="/login">log in</NavLink> to reach your contacts!
        </p>
      ) : (
        <NavLink to="/contacts">Check your contacts!</NavLink>
      )}
      <div className={css.imageContainer}>
        {/* <img src="../../public/yarn-phone-g482e08332_1280.png" /> */}
      </div>
    </div>
  );
};

export default HomePage;
