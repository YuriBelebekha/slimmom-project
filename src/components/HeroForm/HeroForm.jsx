import { Formik } from 'formik';
import * as yup from 'yup';
import { Box } from '@mui/material';
import {
  FormCss,
  FieldCss,
  ErrorMessageCss,
  Title,
  InputWrapperCss,
  InputSectionCss,
  FieldsetCss,
  LabelCss,
  RadioBtnBoxCss,
  RadioBtnCss
} from './HeroForm.styled';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';

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
  bloodType: '1',
};

export const HeroForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };
  
  return (
    <Box component="section">
      <Title component="h1">
        Calculate your daily calorie intake right now
      </Title>

      <Formik
        initialValues={initialValues}
        validationSchema={heroFormValidationSchema}
        onSubmit={handleSubmit}
      >
        <FormCss autoComplete='off'>
          <InputWrapperCss>
            <InputSectionCss>
              <LabelCss htmlFor="height">
                <FieldCss
                  type="number"
                  min="120"
                  max="220"
                  name="height"
                  required
                />
                <span>Height *</span>
                <ErrorMessageCss component="div" name="height" />
              </LabelCss>
              
              <LabelCss htmlFor="age">
                <FieldCss
                  type="number"
                  min="18"
                  max="70"
                  name="age"
                  required
                />
                <span>Age *</span>
                <ErrorMessageCss component="div" name="age" />
              </LabelCss>

              <LabelCss htmlFor="currentWeight">
                <FieldCss
                  type="number"
                  min="35"
                  max="180"
                  name="currentWeight"
                  required
                />
                <span>Current weight *</span>
                <ErrorMessageCss component="div" name="currentWeight" />
              </LabelCss>
            </InputSectionCss>

            <InputSectionCss>
              <LabelCss htmlFor="desiredWeight">
                <FieldCss
                  type="number"
                  min="35"
                  max="180"
                  name="desiredWeight"
                  required
                />
                <span>Desired weight *</span>
                <ErrorMessageCss component="div" name="desiredWeight" />
              </LabelCss>            

              <FieldsetCss>
                <legend>Blood type *</legend>

                <RadioBtnBoxCss>
                  <label htmlFor="1">
                    <RadioBtnCss
                      type="radio"
                      value="1"
                      name="bloodType"
                    />
                    <span>1</span>
                  </label>

                  <label htmlFor="2">
                    <RadioBtnCss
                      type="radio"
                      value="2"
                      name="bloodType"
                    />
                    <span>2</span>
                  </label>

                  <label htmlFor="3">
                    <RadioBtnCss
                      type="radio"
                      value="3"
                      name="bloodType"
                    />
                    <span>3</span>
                  </label>
                  
                  <label htmlFor="4">
                    <RadioBtnCss
                      type="radio"
                      value="4"
                      name="bloodType"
                    />
                    <span>4</span>
                  </label>
                </RadioBtnBoxCss>
                
                <ErrorMessageCss component="div" name="bloodType" />  
              </FieldsetCss>
            </InputSectionCss>
          </InputWrapperCss>
          
          <ButtonSubmit name="Start losing weight" />
        </FormCss>
      </Formik>
    </Box>
  );
};