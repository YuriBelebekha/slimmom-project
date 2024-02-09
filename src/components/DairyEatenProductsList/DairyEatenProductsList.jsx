import React from 'react';
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

  return (
    <WrapperCss>
      <VisuallyHidden component="h3">Products eaten per day</VisuallyHidden>

      {props.day.date ? (
        <VirtuosoCss
          style={{ height: '130px' }}
          // data={props.day.eatenProducts.map(item => item)}
          // totalCount={props.day.eatenProducts.length}
          itemContent={index => <div>{index + 1}</div>}
          components={{ Scroller }}
        />
      ) : (
        <div>The list of foods eaten today is empty</div>
      )}
    </WrapperCss>
  );
};
