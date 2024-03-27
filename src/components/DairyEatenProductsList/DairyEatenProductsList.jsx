import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ToastOptions } from 'services/toast-options';
import { getInfoForDay } from 'redux/day/dayOperations';
import { deleteEatenProductForDate } from 'redux/day/dayOperations';
// import { isEqual } from 'lodash';

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

  const {
    day: { date: dateFromProps },
  } = props;

  const {
    day: { date, id: dayId, eatenProducts },
  } = dayInfo;

  const getDayInfo = useCallback(
    date => {
      if (!props.day.date) {
        return;
      }

      dispatch(getInfoForDay({ date })).then(args => {
        setDayInfo({ day: args.payload });
      });
    },
    [dispatch, props.day.date]
  );

  const handleOnDeleteButtonClick = e => {
    e.preventDefault();
    const eatenProductId = e.currentTarget.getAttribute(
      'data-eaten-product-id'
    );
    dispatch(deleteEatenProductForDate({ dayId, eatenProductId }));
    toast.success('Deleted', ToastOptions);

    dispatch(getInfoForDay({ date })).then(args => {
      setDayInfo({ day: args.payload });
    });
  };

  useEffect(() => {
    if (!props.day.date) {
      setDayInfo({ day: '' });
      return;
    }

    getDayInfo(dateFromProps);
  }, [dateFromProps, getDayInfo, props]);

  return (
    <WrapperCss>
      <VisuallyHidden component="h3">Products eaten per day</VisuallyHidden>

      {dayInfo.day.date && dayInfo.day.eatenProducts.length > 0 ? (
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
