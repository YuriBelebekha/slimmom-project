import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box } from '@mui/material';
import {
  TitleCss,
  FormCss,
  TextFieldCss,
  ButtonsBoxCss,
} from './LoginForm.styled';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import { Button } from '../Button/Button';

const loginFormValidationSchema = yup.object().shape({
  email:
    yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
  password:
    yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
});

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginFormValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <Box component="section">
      <TitleCss component="h1">
        Log In
      </TitleCss>

      <FormCss onSubmit={formik.handleSubmit}>
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
          <ButtonSubmit name="Log In" />

          <NavLink to="/registration">
            <Button name="Register" />
          </NavLink>
        </ButtonsBoxCss>
      </FormCss>
    </Box>
  )
};