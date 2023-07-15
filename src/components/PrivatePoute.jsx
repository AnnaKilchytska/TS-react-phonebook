import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggenIn, selectIsRefreshing } from 'redux/auth/selectors';

export default function PrivateRoute({ component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
}
