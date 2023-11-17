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

  & .Mui-checked {    
    color: ${theme.palette.primary.accent};
  };

  & .MuiFormGroup-root {

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
  // &:checked {
  //   appearance: none;
  //   border: 5px solid ${theme.palette.primary.white};
  //   border-radius: 50%;
  //   box-shadow: ${theme.palette.primary.darkGrey} 0 0 0 1px;
  //   background: ${theme.palette.primary.accent};

  //   & ~ span {
  //     color: ${theme.palette.primary.accent};
  //   };
  // };

// export const ButtonsBoxCss = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   margin-top: 28px;

//   ${theme.breakpoints.up('tablet')} {
//     flex-direction: row;
//   };
// `;

    



// import { Form, Field, ErrorMessage } from 'formik';
// import { Typography } from '@mui/material';
// import styled from '@emotion/styled';
// import { theme } from '../../constants/theme';

// export const Title = styled(Typography)`
//   max-width: 280px;
//   margin-bottom: 34px;

//   font-family: VerdanaBold;
//   font-weight: 700;
//   font-size: 18px;
//   line-height: 25px;

//   ${theme.breakpoints.up('tablet')} {
//     max-width: 530px;
//     margin-bottom: 68px;

//     font-size: 34px;
//     line-height: 48px;
//   };
// `;

// export const FormCss = styled(Form)`  
//   display: flex;
//   flex-direction: column;
//   align-items: center;
  // max-width: 240px;

  // ${theme.breakpoints.up('tablet')} {
  //   max-width: 530px;
  //   align-items: start;
  // };

  // ${theme.breakpoints.up('desktop')} {
  //   max-width: 530px;
  //   align-items: end;
  // };
// `;

// export const InputWrapperCss = styled.div`
//   display: flex;
//   column-gap: 32px;
//   flex-wrap: wrap;
//   margin-bottom: 8px;

//   ${theme.breakpoints.up('tablet')} {
//     margin-bottom: 28px;
//   };
// `;

// export const InputSectionCss = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const FieldCss = styled(Field)`
//   width: 240px;
//   padding: 4px 0;
//   margin-bottom: 32px;

//   background-color: transparent;
  
//   border-top: none;
//   border-left: none;
//   border-bottom: 1px solid;
//   border-right: none;
//   border-color: ${theme.palette.primary.grey};
//   outline: none;  

//   font-size: 14px;
//   font-weight: 700;
//   line-height: 17px;
//   letter-spacing: 0.04em;

//   transition: border-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut};

//   &:hover,
//   &:focus {
//     border-color: ${theme.palette.primary.accent};
//   };
  
//   & ~ span {
//     position: absolute;
//     top: 0;
//     left: 0;
//   };

//   &:focus ~ span,
//   &:not(:focus):valid ~ span {
//     top: -16px;
//     font-size: 10px;
//     line-height: 14px;
//     color: ${theme.palette.primary.accent};
//   };
// `;

// export const ErrorMessageCss = styled(ErrorMessage)`
//   position: absolute;
//   top: 30px;
//   left: 0;
//   max-width: 240px;
//   font-size: 7px;
//   line-height: 10px;
//   color: ${theme.palette.primary.errorMessage};
// `;

// export const FieldsetCss = styled.fieldset`
//   border: none;
//   margin: 0;
//   padding: 0;
  
//   font-size: 14px;
//   font-weight: 700;
//   line-height: 17px;
//   letter-spacing: 0.04em;
//   color: ${theme.palette.primary.darkGrey};  
// `;

// export const LabelCss = styled.label`
//   position: relative;

//   font-size: 14px;
//   font-weight: 700;
//   line-height: 17px;
//   letter-spacing: 0.04em;
//   color: ${theme.palette.primary.darkGrey};
// `;

// export const RadioBtnBoxCss = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 8px;
//   margin-bottom: 40px;

//   & > label {
//     display: flex;
//     align-items: center;    
//   };

//   & > label > span {
//     margin-left: 4px;
//   };

//   ${theme.breakpoints.up('tablet')} {
//     padding-top: 8px;
//     border-top: 1px solid ${theme.palette.primary.grey};
//   };
// `;

// export const RadioBtnCss = styled(Field)`
//   width: 20px;
//   height: 20px;

  // &:checked {
  //   appearance: none;
  //   border: 5px solid ${theme.palette.primary.white};
  //   border-radius: 50%;
  //   box-shadow: ${theme.palette.primary.darkGrey} 0 0 0 1px;
  //   background: ${theme.palette.primary.accent};

  //   & ~ span {
  //     color: ${theme.palette.primary.accent};
  //   };
  // };
// `;