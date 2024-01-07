import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { Modal } from '@mui/material';

import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ButtonContainedCss = styled(Button)`
  min-width: 48px;
  height: 48px;

  font-size: 24px;
  color: ${theme.palette.primary.white};

  border-radius: 50%;
  background-color: ${theme.palette.primary.accent};
  box-shadow: 0px 4px 10px 0px ${theme.palette.primary.accent};

  &:hover {
    background-color: ${theme.palette.primary.accent};
  }
`;

export const AddProductFormWrapperCss = styled(Box)`
  height: 100vh;
  margin-top: 122px;
  padding: 80px 20px;
  text-align: center;

  background-color: ${theme.palette.primary.white};
  outline: none;
`;

export const ModalCss = styled(Modal)`
  .MuiModal-backdrop {
    background-color: transparent;
  }
`;

export const KeyboardReturnIconWrapperCss = styled(Box)`
  position: absolute;
  top: 90px;
  pointer-events: none;
`;
