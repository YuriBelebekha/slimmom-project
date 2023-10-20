import { Form, Field, ErrorMessage } from 'formik';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const TypographyCss = styled(Typography)`
  max-width: 280px;
  margin-bottom: 34px;

  font-family: VerdanaBold;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;

  ${theme.breakpoints.up('tablet')} {
    max-width: 530px;
    margin-bottom: 68px;

    font-size: 34px;
    line-height: 48px;
  };
`;

export const FormCss = styled(Form)`  
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  max-width: 240px;
`;

export const FieldCss = styled(Field)`
  width: 100%;
  padding: 4px 0;

  border-top: none;
  border-left: none;
  border-bottom: 1px solid;
  border-right: none;
  border-color: ${theme.palette.primary.darkGrey};
  outline: none;  

  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;

  transition: border-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut};

  &:hover,
  &:focus {
    border-color: ${theme.palette.primary.accent};
    background: transparent;
  };
`;

export const ErrorMessageCss = styled(ErrorMessage)`
  
`;

export const LabelCss = styled.label`
  
`;