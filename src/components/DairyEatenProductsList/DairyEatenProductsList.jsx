import React from 'react';

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
    day: { eatenProducts },
  } = props;

  return (
    <WrapperCss>
      <VisuallyHidden component="h3">Products eaten per day</VisuallyHidden>

      {props.day.date ? (
        <VirtuosoCss
          style={{}}
          data={eatenProducts}
          totalCount={eatenProducts.length}
          itemContent={(_index, { title, weight, kcal }) => (
            <ItemBoxCss>
              <ItemTitleBoxCss>{title}</ItemTitleBoxCss>

              <ItemNutritionFactsBoxCss>
                <ItemNutritionFactsTextCss>
                  {weight} <span>g</span>
                </ItemNutritionFactsTextCss>
                <ItemNutritionFactsTextCss>
                  {Math.round(kcal)} <span>kcal</span>
                </ItemNutritionFactsTextCss>

                <IconButtonCss>
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
