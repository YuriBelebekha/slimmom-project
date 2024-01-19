import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const WrapperCss = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 40px 20px;

  background-color: ${theme.palette.primary.lightGrey};

  ${theme.breakpoints.up('tablet')} {
  }
`;

export const TitleCss = styled(Typography)`
  font-family: VerdanaBold;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${theme.palette.primary.main};
`;

export const ListCss = styled(List)``;

export const ListItemCss = styled(ListItem)`
  padding: 10px 0;
`;

export const ListItemTextCss = styled(ListItemText)`
  & .MuiTypography-root {
    font-family: VerdanaRegular;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: ${theme.palette.primary.darkGrey};
  }
`;
