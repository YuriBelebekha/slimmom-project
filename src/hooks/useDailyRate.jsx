import { useSelector } from 'react-redux';
import {
  selectDailyRate,
  selectNotAllowedProducts,
  selectIsLoading,
  selectSummaries,
} from 'redux/dailyRate/dailyRateSelectors';

export const useDailyRate = () => {
  const dailyRate = useSelector(selectDailyRate);
  const notAllowedProducts = useSelector(selectNotAllowedProducts);
  const isLoading = useSelector(selectIsLoading);
  const summaries = useSelector(selectSummaries);

  return {
    dailyRate,
    notAllowedProducts,
    isLoading,
    summaries,
  };
};
