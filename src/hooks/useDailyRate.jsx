import { useSelector } from 'react-redux';
import {
  selectDailyRate,
  selectNotAllowedProducts,
} from 'redux/dailyRate/dailyRateSelectors';

export const useDailyRate = () => {
  const dailyRate = useSelector(selectDailyRate);
  const notAllowedProducts = useSelector(selectNotAllowedProducts);

  return {
    dailyRate,
    notAllowedProducts,
  };
};
