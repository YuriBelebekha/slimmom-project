import * as React from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import {
  ButtonContainedCss,
  AddProductFormWrapperCss,
  ModalCss,
  KeyboardReturnIconWrapperCss,
} from './DiarySearchProduct.styled';

export const DiarySearchProduct = () => {
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
          Lorem ipsum dolor sit
        </AddProductFormWrapperCss>
      </ModalCss>

      <ButtonContainedCss onClick={handleOpen}>+</ButtonContainedCss>
    </div>
  );
};
