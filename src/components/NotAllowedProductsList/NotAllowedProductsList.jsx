import React from 'react';
import { useDailyRate } from 'hooks';
import { NavLink } from 'react-router-dom';
import {
  WrapperCss,
  TitleCss,
  VirtuosoCss,
  VirtuosoBoxCss,
  ButtonSubmitCss,
  BtnBoxCss,
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
    <WrapperCss>
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

      <BtnBoxCss>
        <NavLink to="/registration">
          <ButtonSubmitCss type="button">Start losing weight</ButtonSubmitCss>
        </NavLink>
      </BtnBoxCss>
    </WrapperCss>
  );
};
