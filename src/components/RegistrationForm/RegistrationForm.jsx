import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

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
  username: yup
    .string('Enter your name')
    .min(3, 'Minimum 3 characters length')
    .max(254, 'Maximum 254 characters length')
    .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Minimum 8 characters length')
    .max(100, 'Maximum 100 characters length')
    .required('Password is required'),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },

    validationSchema: registrationFormValidationSchema,

    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);

      const payload = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      dispatch(register(payload)).finally(() => {
        setSubmitting(false);
      });

      resetForm();
    },
  });

  return (
    <Box component="section">
      <TitleCss component="h1">Registration</TitleCss>

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
  );
};
