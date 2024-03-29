import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const WrapperCss = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  column-gap: 80px;
  margin-top: 40px;
  padding: 40px 20px;

  background-color: ${theme.palette.primary.lightGrey};

  & .MuiBox-root > a {
    display: none;
  }

  & > div > h3 {
    padding: 0;
    border: none;
  }

  ${theme.breakpoints.up('tablet')} {
    flex-direction: row;
    padding: 56px 32px;
  }

  ${theme.breakpoints.up('desktop')} {
    flex-direction: column;
    top: 210px;
    left: auto;
    right: 10px;
    background-color: transparent;
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

export const ListCss = styled(List)`
  width: 280px;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ListItemCss = styled(ListItem)`
  padding: 5px 0;
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

export const TextCss = styled(Typography)`
  margin-top: 20px;

  font-family: VerdanaRegular;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${theme.palette.primary.darkGrey};
`;

export const WrapperInnerCss = styled(Box)`
  width: 280px;

  ${theme.breakpoints.up('tablet')} {
    width: 380px;
  }
`;
