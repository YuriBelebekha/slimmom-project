import { Form, Field, ErrorMessage } from 'formik';
import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const Title = styled(Typography)`
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
  max-width: 240px;

  ${theme.breakpoints.up('tablet')} {
    max-width: 530px;
  };
`;

export const InputWrapperCss = styled.div`
  display: flex;
  column-gap: 32px;
  flex-wrap: wrap;
`;

export const InputSectionCss = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldCss = styled(Field)`
  width: 240px;
  padding: 4px 0;
  margin-bottom: 32px;
  
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
  
`;

export const FieldsetCss = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
  
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${theme.palette.primary.darkGrey};  
`;

export const LabelCss = styled.label`
  position: relative;

  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: ${theme.palette.primary.darkGrey};  
`;

export const RadioBtnBoxCss = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  margin-bottom: 40px;

  & > label {
    display: flex;
    align-items: center;    
  };

  & > label > span {
    margin-left: 4px;
  };
`;
