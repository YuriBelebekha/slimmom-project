import styled from '@emotion/styled';
import { Box, Typography, TextField } from '@mui/material';
import { theme } from '../../constants/theme';

export const TitleCss = styled(Typography)`
  text-align: center;
  margin-bottom: 55px;

  font-family: VerdanaBold;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${theme.palette.primary.accent};

  ${theme.breakpoints.up('tablet')} {
    text-align: left;
  }
`;

export const FormCss = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${theme.breakpoints.up('tablet')} {
    align-items: start;
  }
`;

export const TextFieldCss = styled(TextField)`
  width: 280px;
  padding: 4px 0;
  margin-bottom: 32px;

  & label {
    font-family: VerdanaBold;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
  }

  & label.Mui-focused {
    color: ${theme.palette.primary.accent};
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${theme.palette.primary.accent};
  }

  & .MuiInput-root {
    font-family: VerdanaBold;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
    background: transparent;
  }

  & .MuiFormHelperText-root {
    position: absolute;
    bottom: -20px;
  }

  ${theme.breakpoints.up('tablet')} {
    width: 240px;
  }
`;

export const ButtonsBoxCss = styled(Box)`
  display: flex;
  flex-direction: column;
  margin-top: 28px;

  ${theme.breakpoints.up('tablet')} {
    flex-direction: row;
  }
`;
