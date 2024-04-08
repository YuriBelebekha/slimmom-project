import React, { forwardRef, useImperativeHandle } from 'react';

import { DiarySearchProductForm } from '../DiarySearchProductForm';
import { BoxCss } from './DiarySearchProduct.styled';

export const DiarySearchProduct = forwardRef(
  ({ parentFunctionDiaryUserCalendar }, ref) => {
    const handleChildEvent = () => {
      parentFunctionDiaryUserCalendar();
    };

    useImperativeHandle(ref, () => ({
      callParentFunction: handleChildEvent,
    }));

    return (
      <BoxCss>
        <DiarySearchProductForm handleAcceptDateFunction={handleChildEvent} />
      </BoxCss>
    );
  }
);
