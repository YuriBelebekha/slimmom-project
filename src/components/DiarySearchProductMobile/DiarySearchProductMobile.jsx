import React, { forwardRef, useImperativeHandle } from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { DiarySearchProductForm } from '../DiarySearchProductForm';

import {
  ButtonContainedCss,
  AddProductFormWrapperCss,
  ModalCss,
  KeyboardReturnIconWrapperCss,
} from './DiarySearchProductMobile.styled';

export const DiarySearchProductMobile = forwardRef(
  ({ parentFunctionDiaryUserCalendar }, ref) => {
    const handleChildEvent = () => {
      parentFunctionDiaryUserCalendar();
    };

    useImperativeHandle(ref, () => ({
      callParentFunction: handleChildEvent,
    }));

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <ModalCss
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <AddProductFormWrapperCss>
            <KeyboardReturnIconWrapperCss>
              <KeyboardReturnIcon />
            </KeyboardReturnIconWrapperCss>

            <DiarySearchProductForm
              handleAcceptDateFunction={handleChildEvent}
            />
          </AddProductFormWrapperCss>
        </ModalCss>

        <ButtonContainedCss onClick={handleOpen}>+</ButtonContainedCss>
      </div>
    );
  }
);
