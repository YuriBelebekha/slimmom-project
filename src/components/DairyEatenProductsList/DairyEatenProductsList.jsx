import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';
import { deleteEatenProductForDate } from 'redux/day/dayOperations';

import { getInfoForDay } from 'redux/day/dayOperations';

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
  const [dayInfo, setDayInfo] = useState(props);

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

  console.log('props: ', props);
  console.log('dayInfo: ', dayInfo);

  // const {
  //   day: { date, id: dayId, eatenProducts },
  // } = props;

  const {
    day: { date, id: dayId, eatenProducts },
  } = dayInfo;
  // console.log('eatenProducts: ', eatenProducts);

  const handleOnDeleteButtonClick = e => {
    e.preventDefault();
    const eatenProductId = e.currentTarget.getAttribute(
      'data-eaten-product-id'
    );
    dispatch(deleteEatenProductForDate({ dayId, eatenProductId }));
    toast.success('Deleted', ToastOptions);

    /////////////////////////
    dispatch(getInfoForDay({ date })).then(args => {
      setDayInfo({ day: args.payload });
    });
  };

  //////////////////////
  useEffect(() => {}, [dayInfo]);

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
