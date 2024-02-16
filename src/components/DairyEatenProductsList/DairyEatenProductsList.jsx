import React from 'react';

import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import {
  WrapperCss,
  VirtuosoCss,
  VirtuosoBoxCss,
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
            <List>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <CloseIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={title} />
                <ListItemText primary={weight} secondary="gram" />
                <ListItemText primary={Math.round(kcal)} secondary="kcal" />
              </ListItem>
            </List>
          )}
          components={{ Scroller }}
        />
      ) : (
        <div>The list of foods eaten today is empty</div>
      )}
    </WrapperCss>
  );
};
