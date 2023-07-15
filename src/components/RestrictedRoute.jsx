import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggenIn } from 'redux/auth/selectors';

export default function RestrictedRoute({ component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
