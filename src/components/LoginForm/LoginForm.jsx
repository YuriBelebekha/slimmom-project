import { Formik } from 'formik';
import * as yup from 'yup';
import { Box } from '@mui/material';
import {
  FormCss,
  FieldCss,
  ErrorMessageCss,
  Title,
  InputWrapperCss,
  LabelCss,
} from './LoginForm.styled';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';

const loginFormValidationSchema = yup.object().shape({
  email:
    yup
      .string()
      .email('Must be a valid email')
      .required('Entering this value is required'),
  password:
    yup
      .string()
      .min(8, 'Must be at least 8 characters long')
      .max(30, 'Must contain no more than 30 characters')
      .required('Entering this value is required'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Box component="section">
      <Title component="h1">
        Log In
      </Title>

      <Formik
        initialValues={initialValues}
        validationSchema={loginFormValidationSchema}
        onSubmit={handleSubmit}
      >
        <FormCss autoComplete='off'>
          <InputWrapperCss>
            <LabelCss htmlFor="email">
                <FieldCss
                  type="email"
                  name="email"
                  required
                />
                <span>Email *</span>
                <ErrorMessageCss component="div" name="email" />
            </LabelCss>
            
            <LabelCss htmlFor="password">
              <FieldCss
                type="text"
                name="password"
                required
              />
              <span>Password *</span>
              <ErrorMessageCss component="div" name="password" />
            </LabelCss>
          </InputWrapperCss>

          <ButtonSubmit name="Log In" />
        </FormCss>
      </Formik>
    </Box>
  )
};