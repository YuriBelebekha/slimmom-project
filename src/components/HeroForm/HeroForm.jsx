// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { Box, Button } from '@mui/material';
import { FormCss, FieldCss, ErrorMessageCss, TypographyCss } from './HeroForm.styled';

const heroFormValidationSchema = yup.object().shape({
  height:
    yup
      .number()
      .integer('An integer value must be entered')
      .min(120, 'The entered value must not be less than 120 (cm)')
      .max(220, 'The entered value should not exceed 220 (cm)')
      .required('Entering this value is required'),
  age:
    yup
      .number()
      .integer('An integer value must be entered')
      .min(18, 'The entered value must not be less than 18 (years)')
      .max(70, 'The entered value should not exceed 70 (years)')
      .required('Entering this value is required'),
  currentWeight:
    yup
      .number()
      .integer('An integer value must be entered')
      .min(35, 'The entered value must not be less than 35 (kg)')
      .max(180, 'The entered value should not exceed 180 (kg)')
      .required('Entering this value is required'),
  desiredWeight:
    yup
      .number()
      .integer('An integer value must be entered')
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
  bloodType: '',
};

export const HeroForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Box component="section">
      <TypographyCss component="h1">
        Calculate your daily calorie intake right now
      </TypographyCss>

      <Formik
        initialValues={initialValues}
        validationSchema={heroFormValidationSchema}
        onSubmit={handleSubmit}
      >
        <FormCss>
          <label htmlFor="height">
            <FieldCss type="number" name="height" placeholder="Height *" />
            <ErrorMessageCss component="div" name="height" />
          </label>
          
          <label htmlFor="age">
            <FieldCss type="number" name="age" placeholder="Age *" />
            <ErrorMessageCss component="div" name="age" />
          </label>

          <label htmlFor="currentWeight">
            <FieldCss type="number" name="currentWeight"  placeholder="Current weight *" />
            <ErrorMessageCss component="div" name="currentWeight" />
          </label>

          <label htmlFor="desiredWeight">
            <FieldCss type="number" name="desiredWeight" placeholder="Desired weight *" />
            <ErrorMessageCss component="div" name="desiredWeight" />
          </label>

          <fieldset>
            <legend>Blood type *</legend>

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

            <ErrorMessageCss component="div" name="bloodType" />
          </fieldset>
          
          <Button type="submit">
            Start losing weight
          </Button>
        </FormCss>
      </Formik>
    </Box>
  );
};