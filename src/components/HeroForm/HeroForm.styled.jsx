import styled from '@emotion/styled';
import { Box, Typography, TextField, FormControl } from '@mui/material';
import { theme } from '../../constants/theme';

export const SectionCss = styled(Box)`
  max-width: 280px;

  ${theme.breakpoints.up('tablet')} {
    max-width: 530px;
  };
`;

export const TitleCss = styled(Typography)`
  text-align: center;
  margin-bottom: 55px;
  text-align: left;

  font-family: VerdanaBold;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: ${theme.palette.primary.main};

  ${theme.breakpoints.up('tablet')} {
    margin-bottom: 60px;
    
    font-size: 34px;
    line-height: 48px;
    text-align: left;
  };
`;

export const FormCss = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;  

  ${theme.breakpoints.up('tablet')} {
    align-items: start;    
  };

  ${theme.breakpoints.up('desktop')} {
    align-items: end;
  };
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
  };

  & label.Mui-focused {
    color: ${theme.palette.primary.accent};
  };

  & .MuiInput-underline:after {
    border-bottom-color: ${theme.palette.primary.accent};    
  };

  & .MuiInput-root {
    font-family: VerdanaBold;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
    background: transparent;
  };
  
  & .MuiFormHelperText-root {
    position: absolute;
    bottom: -20px;
  };

  ${theme.breakpoints.up('tablet')} {
    width: 240px;
  };
`;

export const InputWrapperCss = styled(Box)`
  display: flex;
  flex-direction: column;

  ${theme.breakpoints.up('tablet')} {
    flex-direction: row;
    margin-bottom: 38px;
  };  
`;

export const InputGroupBoxCss = styled(Box)`
  display: flex;
  flex-direction: column;

  ${theme.breakpoints.up('tablet')} {
    &:last-child {
      margin-left: 32px;
    };
  };

  ${theme.breakpoints.up('desktop')} {
    &:last-child {
      margin-right: 18px;
    };
  };
`;

export const FormControlCss = styled(FormControl)`
  margin-bottom: 40px;

  & label.Mui-focused {
    color: ${theme.palette.primary.accent};
  };

  & > label {
    font-family: VerdanaBold;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
  };

  & .MuiFormControlLabel-root > .Mui-checked {
    color: ${theme.palette.primary.accent};

    & ~ .MuiTypography-root {
      color: ${theme.palette.primary.accent};
    };
  };

  & .MuiTypography-root {
    font-family: VerdanaBold;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
  };

  ${theme.breakpoints.up('tablet')} {
    margin-bottom: 0;

    & > label {
      padding-top: 20px;
      padding-bottom: 11px;
      border-bottom: 1px solid ${theme.palette.primary.darkGrey};    
    };    
  };
`;