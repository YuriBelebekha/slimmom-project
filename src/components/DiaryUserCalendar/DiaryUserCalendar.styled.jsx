import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const DatePickerBoxCss = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 48px;
  width: 155px;

  ${theme.breakpoints.up('tablet')} {
    width: 260px;
  }

  & > .MuiSvgIcon-root {
    fill: ${theme.palette.primary.darkGrey};
  }

  & > .MuiFormControl-root input {
    padding: 0;
    font-family: VerdanaBold;
    font-size: 18px;
    line-height: 22px;

    ${theme.breakpoints.up('tablet')} {
      font-size: 34px;
      line-height: 41px;
    }
  }
`;

export const DiaryListProductsBoxCss = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 20px;

  ${theme.breakpoints.up('tablet')} {
    padding-right: 0;
    padding-left: 0;
    justify-content: start;
  }
`;
