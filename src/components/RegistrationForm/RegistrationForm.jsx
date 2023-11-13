import { NavLink } from 'react-router-dom';
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
} from './RegistrationForm.styled';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import { Button } from '../Button/Button';

const registrationFormValidationSchema = yup.object().shape({
  username:
    yup
      .string()
      .min(1, 'Must be at least 1 characters long')
      .max(30, 'Must contain no more than 30 characters')
      .required('Entering this value is required'),
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
  username: '',
  email: '',
  password: '',
};

export const RegistrationForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Box component="section">
      <Title component="h1">
        Registration
      </Title>

      <Formik
        initialValues={initialValues}
        validationSchema={registrationFormValidationSchema}
        onSubmit={handleSubmit}
      >
        <FormCss autoComplete='off'>
          <InputWrapperCss>
            <LabelCss htmlFor="username">
                <FieldCss
                  type="username"
                  name="username"
                  required
                />
                <span>Name *</span>
                <ErrorMessageCss component="div" name="username" />
            </LabelCss>

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

          <ButtonSubmit name="Registration" />

          <NavLink to="/login">
            <Button name="Log In" />
          </NavLink>
        </FormCss>
      </Formik>
    </Box>
  )
};