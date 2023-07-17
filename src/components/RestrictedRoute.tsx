import { useAppSelector } from 'hooks/useAppSelector';
import { Navigate } from 'react-router-dom';
import { selectIsLoggenIn } from 'redux/auth/selectors';
import { IRouteProps } from 'models/Interfaces';

const RestrictedRoute: React.FC<IRouteProps> = ({
  component,
  redirectTo = '/',
}) => {
  const isLoggedIn = useAppSelector(selectIsLoggenIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

export default RestrictedRoute;
