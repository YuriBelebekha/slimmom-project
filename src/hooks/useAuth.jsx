import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectAccessToken,
  selectRefreshToken,
  selectSid,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const accessToken = useSelector(selectAccessToken);
  const refreshToken = useSelector(selectRefreshToken);
  const sid = useSelector(selectSid);

  return {
    isLoggedIn,
    user,
    isRefreshing,
    accessToken,
    refreshToken,
    sid,
  };
};
