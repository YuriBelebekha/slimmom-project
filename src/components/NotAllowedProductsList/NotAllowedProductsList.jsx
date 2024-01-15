import React from 'react';
import { useDailyRate } from 'hooks';
import {
  TitleCss,
  VirtuosoCss,
  VirtuosoBoxCss,
} from './NotAllowedProductsList.styled';

export const NotAllowedProductsList = () => {
  const {
    dailyRate: { notAllowedProducts },
  } = useDailyRate();

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
    <>
      <TitleCss component="h3">Foods you should not eats</TitleCss>

      <VirtuosoCss
        style={{ height: '130px' }}
        data={notAllowedProducts}
        totalCount={notAllowedProducts.length}
        itemContent={index => (
          <div>
            {index + 1}. {notAllowedProducts[index]}
          </div>
        )}
        components={{ Scroller }}
      />
    </>
  );
};
