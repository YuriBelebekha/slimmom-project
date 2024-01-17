import { useSelector } from 'react-redux';
import {
  selectDailyRate,
  selectNotAllowedProducts,
  selectIsLoading,
} from 'redux/dailyRate/dailyRateSelectors';

export const useDailyRate = () => {
  const dailyRate = useSelector(selectDailyRate);
  const notAllowedProducts = useSelector(selectNotAllowedProducts);
  const isLoading = useSelector(selectIsLoading);

  return {
    dailyRate,
    notAllowedProducts,
    isLoading,
  };
};
