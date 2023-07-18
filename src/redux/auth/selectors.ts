import { RootState } from 'redux/store';

export const selectUser = (state: RootState) => state.auth.user;
export const selectIsLoggenIn = (state: RootState) => state.auth.isLoggedIn!;
export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;
