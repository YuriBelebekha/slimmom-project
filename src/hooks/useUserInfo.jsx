import { useSelector } from 'react-redux';
import { selectUserData, selectDays } from 'redux/userInfo/userInfoSelectors';

export const useUserInfo = () => {
  const userData = useSelector(selectUserData);
  const days = useSelector(selectDays);

  return {
    userData,
    days,
  };
};
