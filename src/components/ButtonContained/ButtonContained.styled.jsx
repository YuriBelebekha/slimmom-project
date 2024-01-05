import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ButtonContainedCss = styled(Button)`
  width: 48px !important;
  height: 48px;

  border-radius: 50%;
  background-color: ${theme.palette.primary.accent};
  box-shadow: 0px 4px 10px 0px ${theme.palette.primary.accent};
`;
