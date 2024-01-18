import { useDispatch } from 'react-redux';
import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { getDailyRateByUserId } from 'redux/dailyRate/dailyRateOperations'; // change to getDailyRateUserId

import { RadioGroup, Radio, FormControlLabel, FormLabel } from '@mui/material';
import {
  SectionCss,
  TitleCss,
  FormCss,
  TextFieldCss,
  InputWrapperCss,
  InputGroupBoxCss,
  FormControlCss,
  ButtonSubmitCss,
} from './CalculateFormUser.styled';
import LinearIndeterminate from '../ProgressLine/ProgressLine';
import { useDailyRate } from 'hooks';

const calculateFormValidationSchema = yup.object().shape({
  height: yup
    .number('Enter your height')
    .integer('An integer value must be entered')
    .min(120, 'Value must not be less than 120 (cm)')
    .max(220, 'Value should not exceed 220 (cm)')
    .required('Height is required'),
  age: yup
    .number('Enter your age')
    .integer('An integer value must be entered')
    .min(18, 'Value must not be less than 18 (years)')
    .max(70, 'Value should not exceed 70 (years)')
    .required('Age is required'),
  currentWeight: yup
    .number('Enter your current weight')
    .integer('An integer value must be entered')
    .min(35, 'Value must not be less than 35 (kg)')
    .max(180, 'Value should not exceed 180 (kg)')
    .required('Current weight is required'),
  desiredWeight: yup
    .number('Enter your desired weight')
    .integer('An integer value must be entered')
    .min(35, 'Value must not be less than 35 (kg)')
    .max(180, 'Value should not exceed 180 (kg)')
    .required('Desired weight is required'),
  bloodType: yup
    .string('Enter your blood type')
    .required('Blood type is required'),
});

export const CalculateFormUser = () => {
  const dispatch = useDispatch();

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '1',
    },

    validationSchema: calculateFormValidationSchema,

    onSubmit: (values, { resetForm, setSubmitting }) => {
      const payload = {
        height: values.height,
        age: values.age,
        weight: values.currentWeight,
        desiredWeight: values.desiredWeight,
        bloodType: Number(values.bloodType),
      };
      dispatch(getDailyRateByUserId(payload)).finally(() => {
        setSubmitting(true);
      });

      resetForm();
    },
  });

  const {
    dailyRate: { isLoading },
  } = useDailyRate();

  return (
    <SectionCss component="section">
      {isLoading ? <LinearIndeterminate /> : <></>}

      <TitleCss component="h2">
        Calculate your daily calorie intake right now
      </TitleCss>

      <FormCss onSubmit={formik.handleSubmit}>
        <InputWrapperCss>
          <InputGroupBoxCss>
            <TextFieldCss
              variant="standard"
              id="height"
              name="height"
              label="Height *"
              type="number"
              value={formik.values.height}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.height && Boolean(formik.errors.height)}
              helperText={formik.touched.height && formik.errors.height}
            />

            <TextFieldCss
              variant="standard"
              id="age"
              name="age"
              label="Age *"
              type="number"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.age && Boolean(formik.errors.age)}
              helperText={formik.touched.age && formik.errors.age}
            />

            <TextFieldCss
              variant="standard"
              id="currentWeight"
              name="currentWeight"
              label="Current weight *"
              type="number"
              value={formik.values.currentWeight}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.currentWeight &&
                Boolean(formik.errors.currentWeight)
              }
              helperText={
                formik.touched.currentWeight && formik.errors.currentWeight
              }
            />
          </InputGroupBoxCss>

          <InputGroupBoxCss>
            <TextFieldCss
              variant="standard"
              id="desiredWeight"
              name="desiredWeight"
              label="Desired weight *"
              type="number"
              value={formik.values.desiredWeight}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.desiredWeight &&
                Boolean(formik.errors.desiredWeight)
              }
              helperText={
                formik.touched.desiredWeight && formik.errors.desiredWeight
              }
            />

            <FormControlCss>
              <FormLabel id="bloodType">Blood type *</FormLabel>

              <RadioGroup
                row
                aria-labelledby="bloodType"
                name="bloodType"
                value={formik.values.bloodType}
                onChange={formik.handleChange}
              >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
              </RadioGroup>
            </FormControlCss>
          </InputGroupBoxCss>
        </InputWrapperCss>

        <ButtonSubmitCss type="submit">Start losing weight</ButtonSubmitCss>
      </FormCss>
    </SectionCss>
  );
};
