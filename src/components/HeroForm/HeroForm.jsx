import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Typography, Box, Button } from '@mui/material';

const heroFormValidationSchema = yup.object().shape({
  height:
    yup
      .number()
      .integer('An integer value must be entered')
      .positive('The entered value must be positive')
      .min(120, 'The entered value must not be less than 120 (cm)')
      .max(220, 'The entered value should not exceed 220 (cm)')
      .required('Entering this value is required'),
  age:
    yup
      .number()
      .integer('An integer value must be entered')
      .positive('The entered value must be positive')
      .min(18, 'The entered value must not be less than 18 (years)')
      .max(70, 'The entered value should not exceed 70 (years)')
      .required('Entering this value is required'),
  currentWeight:
    yup
      .number()
      .integer('An integer value must be entered')
      .positive('The entered value must be positive')
      .min(35, 'The entered value must not be less than 35 (kg)')
      .max(180, 'The entered value should not exceed 180 (kg)')
      .required('Entering this value is required'),
  desiredWeight:
    yup
      .number()
      .integer('An integer value must be entered')
      .positive('The entered value must be positive')
      .min(35, 'The entered value must not be less than 35 (kg)')
      .max(180, 'The entered value should not exceed 180 (kg)')
      .required('Entering this value is required'),
  bloodType:
    yup
      .string()
      .required('Entering this value is required'),
});

const initialValues = {
  height: '',
  age: '',
  currentWeight: '',
  desiredWeight: '',
  bloodType: '1',
};

export const HeroForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Box component="section">
      <Typography component="h1">
        Calculate your daily calorie intake right now
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={heroFormValidationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="height">
            Height *
            <Field type="number" name="height" />
            <ErrorMessage component="div" name="height" />
          </label>
          
          <label htmlFor="age">
            Age *
            <Field type="number" name="age" />
            <ErrorMessage component="div" name="age" />
          </label>

          <label htmlFor="currentWeight">
            Current weight *
            <Field type="number" name="currentWeight" />
            <ErrorMessage component="div" name="currentWeight" />
          </label>

          <label htmlFor="desiredWeight">
            Desired weight *
            <Field type="number" name="desiredWeight" />
            <ErrorMessage component="div" name="desiredWeight" />
          </label>

          <Box>
            <label htmlFor="1">
              <Field type="radio" value="1" name="bloodType" />1
            </label>

            <label htmlFor="2">
              <Field type="radio" value="2" name="bloodType" />2
            </label>

            <label htmlFor="3">
              <Field type="radio" value="3" name="bloodType" />3
            </label>
            
            <label htmlFor="4">
              <Field type="radio" value="4" name="bloodType" />4
            </label>
          </Box>
          
          <Button type="submit">
            Start losing weight
          </Button>
        </Form>
      </Formik>
    </Box>
  );
};