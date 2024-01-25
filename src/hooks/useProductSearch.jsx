import { useSelector } from 'react-redux';
import { selectFoundProductsList } from 'redux/productSearch/productSearchSelectors';

export const useProductSearch = () => {
  const foundProductsList = useSelector(selectFoundProductsList);

  return {
    foundProductsList,
  };
};
