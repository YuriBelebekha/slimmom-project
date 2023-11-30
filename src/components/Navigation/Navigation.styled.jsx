import { Box } from '@mui/material';
import { theme } from '../../constants/theme';
import styled from '@emotion/styled';

export const NavCss = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 0 16px;

  ${theme.breakpoints.up('desktop')} {
    justify-content: left;
    align-items: end;
    padding-top: 80px;
    padding-bottom: 0;
  }
`;

export const NavBoxCss = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
