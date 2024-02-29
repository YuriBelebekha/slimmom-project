import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { deleteEatenProductForDate } from 'redux/day/dayOperations';

import CloseIcon from '@mui/icons-material/Close';
import {
  WrapperCss,
  VirtuosoCss,
  VirtuosoBoxCss,
  ItemBoxCss,
  ItemTitleBoxCss,
  ItemNutritionFactsBoxCss,
  ItemNutritionFactsTextCss,
  IconButtonCss,
} from './DairyEatenProductsList.styled';
import { VisuallyHidden } from '../VisuallyHidden';

export const DiaryEatenProductsList = props => {
  const dispatch = useDispatch();
  // const [eatenProductId, setEatenProductId] = useState('');

  const Scroller = React.forwardRef(({ style, ...props }, ref) => {
    return (
      <VirtuosoBoxCss
        data-virtuoso
        style={{
          ...style,
        }}
        ref={ref}
        {...props}
      />
    );
  });
  const {
    day: { id: dayId, eatenProducts },
  } = props;
  console.log('props: ', props);

  const handleOnDeleteButtonClick = e => {
    // console.log(e.currentTarget);
    const eatenProductId = e.currentTarget.getAttribute(
      'data-eaten-product-id'
    );
    // console.log('dayId: ', dayId);
    // console.log('eatenProductId: ', eatenProductId);
    dispatch(deleteEatenProductForDate({ dayId, eatenProductId }));
  };

  ////////////////////////////////////////////////////////
  useEffect(() => {}, []);

  return (
    <WrapperCss>
      <VisuallyHidden component="h3">Products eaten per day</VisuallyHidden>

      {props.day.date && props.day.eatenProducts.length > 0 ? (
        <VirtuosoCss
          data={eatenProducts}
          totalCount={eatenProducts.length}
          itemContent={(_index, { title, weight, kcal, id }) => (
            <ItemBoxCss>
              <ItemTitleBoxCss>{title}</ItemTitleBoxCss>

              <ItemNutritionFactsBoxCss>
                <ItemNutritionFactsTextCss>
                  {weight} <span>g</span>
                </ItemNutritionFactsTextCss>
                <ItemNutritionFactsTextCss>
                  {Math.round(kcal)} <span>kcal</span>
                </ItemNutritionFactsTextCss>

                <IconButtonCss
                  data-eaten-product-id={id}
                  onClick={handleOnDeleteButtonClick}
                >
                  <CloseIcon fontSize="small" />
                </IconButtonCss>
              </ItemNutritionFactsBoxCss>
            </ItemBoxCss>
          )}
          components={{ Scroller }}
        />
      ) : (
        <div>The list of foods eaten today is empty</div>
      )}
    </WrapperCss>
  );
};
