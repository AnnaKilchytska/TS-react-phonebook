import { useAppSelector } from 'hooks/useAppSelector';
import { Navigate } from 'react-router-dom';
import { selectIsLoggenIn, selectIsRefreshing } from 'redux/auth/selectors';
import { IRouteProps } from 'models/Interfaces';

const PrivateRoute: React.FC<IRouteProps> = ({
  component,
  redirectTo = '/',
}) => {
  const isLoggedIn = useAppSelector(selectIsLoggenIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};

export default PrivateRoute;
