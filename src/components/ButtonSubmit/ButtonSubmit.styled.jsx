import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ButtonSubmitCss = styled(Button)`
  min-width: 180px;
  padding: 13px 22px;

  font-family: verdanaBold;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: capitalize;

  background-color: ${({ theme }) => theme.palette.primary.accent};
  border-radius: 30px;
  box-shadow: 0px 4px 10px 0px ${theme.palette.primary.accent};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.primary.accent};
    box-shadow: 0px 2px 5px 0px ${theme.palette.primary.accent};
  }
`;
