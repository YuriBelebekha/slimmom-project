import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box } from '@mui/material';
import {
  TitleCss,
  FormCss,
  TextFieldCss,
  ButtonsBoxCss,
} from './RegistrationForm.styled';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import { Button } from '../Button/Button';

const registrationFormValidationSchema = yup.object().shape({
  username:
    yup
      .string('Enter your name')
      .min(1, 'Password should be of minimum 1 characters length')
      .max(30, 'Must contain no more than 30 characters')
      .required('Name is required'),
  email:
    yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  password:
    yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .max(30, 'Must contain no more than 30 characters')
      .required('Password is required'),
});

export const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: registrationFormValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <Box component="section">
      <TitleCss component="h1">
        Registration
      </TitleCss>

      <FormCss onSubmit={formik.handleSubmit}>
        <TextFieldCss
          variant="standard"
          id="username"
          name="username"
          label="Name *"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.username)}
          helperText={formik.touched.username && formik.errors.username}
        />
        
        <TextFieldCss
          variant="standard"
          id="email"
          name="email"
          label="Email *"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        
        <TextFieldCss
          variant="standard"
          id="password"
          name="password"
          label="Password *"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <ButtonsBoxCss>
          <ButtonSubmit name="Registration" />
          
          <NavLink to="/login">
            <Button name="Log in" />
          </NavLink>          
        </ButtonsBoxCss>
      </FormCss>
    </Box>
  )
};