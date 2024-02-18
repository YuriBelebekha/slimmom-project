import React from 'react';

import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  WrapperCss,
  VirtuosoCss,
  VirtuosoBoxCss,
  ItemBoxCss,
  ItemTitleBoxCss,
  ItemNutritionFactsBoxCss,
  ItemNutritionFactsTextCss,
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
          style={{ height: '200px' }}
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

                <IconButton>
                  <CloseIcon fontSize="small" />
                </IconButton>
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

// return (
//   <WrapperCss>
//     <VisuallyHidden component="h3">Products eaten per day</VisuallyHidden>

//     {props.day.date ? (
//       <VirtuosoCss
//         style={{ height: '200px' }}
//         data={eatenProducts}
//         totalCount={eatenProducts.length}
//         itemContent={(_index, { title, weight, kcal }) => (
//           <List>
//             <ListItemCss
//               secondaryAction={
//                 <IconButton edge="end" aria-label="delete">
//                   <CloseIcon fontSize="small" />
//                 </IconButton>
//               }
//             >
//               <ListItemTextCss primary={title} />
//               <ListItemTextCss primary={weight} secondary="g" />
//               <ListItemTextCss primary={Math.round(kcal)} secondary="kcal" />
//             </ListItemCss>
//           </List>
//         )}
//         components={{ Scroller }}
//       />
//     ) : (
//       <div>The list of foods eaten today is empty</div>
//     )}
//   </WrapperCss>
// );
