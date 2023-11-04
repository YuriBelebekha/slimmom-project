import { Formik } from 'formik';
import * as yup from 'yup';

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
