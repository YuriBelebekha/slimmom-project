import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';
import { Typography } from '@mui/material';
import { theme } from '../../constants/theme';

export const Title = styled(Typography)`
  

  ${theme.breakpoints.up('tablet')} {
    
  };
`;

export const FormCss = styled(Form)`  
  

  ${theme.breakpoints.up('tablet')} {
    
  };

  ${theme.breakpoints.up('desktop')} {
    
  };
`;

export const InputWrapperCss = styled.div`
  

  ${theme.breakpoints.up('tablet')} {
    
  };
`;

export const FieldCss = styled(Field)`
  width: 240px;
  padding: 4px 0;
  margin-bottom: 32px;

  background-color: transparent;
  
  border-top: none;
  border-left: none;
  border-bottom: 1px solid;
  border-right: none;
  border-color: ${theme.palette.primary.grey};
  outline: none;  

  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;

  transition: border-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut};

  &:hover,
  &:focus {
    border-color: ${theme.palette.primary.accent};
  };
  
  & ~ span {
    position: absolute;
    top: 0;
    left: 0;
  };

  &:focus ~ span,
  &:not(:focus):valid ~ span {
    top: -16px;
    font-size: 10px;
    line-height: 14px;
    color: ${theme.palette.primary.accent};
  };
`;

export const ErrorMessageCss = styled(ErrorMessage)`
  position: absolute;
  top: 30px;
  left: 0;
  max-width: 240px;
  font-size: 7px;
  line-height: 10px;
  color: ${theme.palette.primary.errorMessage};
`;

export const LabelCss = styled.label`
  position: relative;

  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${theme.palette.primary.darkGrey};  
`;