import { useFormik } from 'formik';
import * as React from 'react';
import * as yup from 'yup';
import { RadioGroup, Radio, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import {
  SectionCss,
  TitleCss,
  FormCss,
  TextFieldCss,
  InputWrapperCss,
  InputGroupBoxCss,
} from './HeroForm.styled';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';

const heroFormValidationSchema = yup.object().shape({
  height:
    yup
      .number('Enter your height')
      .integer('An integer value must be entered')
      .min(120, 'The entered value must not be less than 120 (cm)')
      .max(220, 'The entered value should not exceed 220 (cm)')
      .required('Height is required'),
  age:
    yup
      .number('Enter your age')
      .integer('An integer value must be entered')
      .min(18, 'The entered value must not be less than 18 (years)')
      .max(70, 'The entered value should not exceed 70 (years)')
      .required('Age is required'),
  currentWeight:
    yup
      .number('Enter your current weight')
      .integer('An integer value must be entered')
      .min(35, 'The entered value must not be less than 35 (kg)')
      .max(180, 'The entered value should not exceed 180 (kg)')
      .required('Current weight is required'),
  desiredWeight:
    yup
      .number('Enter your desired weight')
      .integer('An integer value must be entered')
      .min(35, 'The entered value must not be less than 35 (kg)')
      .max(180, 'The entered value should not exceed 180 (kg)')
      .required('Desired weight is required'),
  bloodType:
    yup
      .string('Enter your blood type')
      .required('Blood type is required'),
});

export const HeroForm = () => {
  const formik = useFormik({
    initialValues: {
      height: '',
      age: '',
      currentWeight: '',
      desiredWeight: '',
      bloodType: '1',
    },
    validationSchema: heroFormValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });

  return (
    <SectionCss component="section">
      <TitleCss component="h1">
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
              error={formik.touched.currentWeight && Boolean(formik.errors.currentWeight)}
              helperText={formik.touched.currentWeight && formik.errors.currentWeight}
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
              error={formik.touched.desiredWeight && Boolean(formik.errors.desiredWeight)}
              helperText={formik.touched.desiredWeight && formik.errors.desiredWeight}
            />

            <FormControl>
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
            </FormControl>
          </InputGroupBoxCss>
        </InputWrapperCss>

        <ButtonSubmit name="Start losing weight" />
      </FormCss>
    </SectionCss>
  )
};





// import { Formik } from 'formik';
// import * as yup from 'yup';
// import { Box } from '@mui/material';
// import {
//   FormCss,
//   FieldCss,
//   ErrorMessageCss,
//   Title,
//   InputWrapperCss,
//   InputSectionCss,
//   FieldsetCss,
//   LabelCss,
//   RadioBtnBoxCss,
//   RadioBtnCss
// } from './HeroForm.styled';
// import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';

// const heroFormValidationSchema = yup.object().shape({
//   height:
//     yup
//       .number()
//       .integer('An integer value must be entered')
//       .min(120, 'The entered value must not be less than 120 (cm)')
//       .max(220, 'The entered value should not exceed 220 (cm)')
//       .required('Entering this value is required'),
//   age:
//     yup
//       .number()
//       .integer('An integer value must be entered')
//       .min(18, 'The entered value must not be less than 18 (years)')
//       .max(70, 'The entered value should not exceed 70 (years)')
//       .required('Entering this value is required'),
//   currentWeight:
//     yup
//       .number()
//       .integer('An integer value must be entered')
//       .min(35, 'The entered value must not be less than 35 (kg)')
//       .max(180, 'The entered value should not exceed 180 (kg)')
//       .required('Entering this value is required'),
//   desiredWeight:
//     yup
//       .number()
//       .integer('An integer value must be entered')
//       .min(35, 'The entered value must not be less than 35 (kg)')
//       .max(180, 'The entered value should not exceed 180 (kg)')
//       .required('Entering this value is required'),
//   bloodType:
//     yup
//       .string()
//       .required('Entering this value is required'),
// });

// const initialValues = {
//   height: '',
//   age: '',
//   currentWeight: '',
//   desiredWeight: '',
//   bloodType: '1',
// };

// export const HeroForm = () => {
//   const handleSubmit = (values, { resetForm }) => {
//     console.log(values);
//     resetForm();
//   };
  
//   return (
//     <Box component="section">
//       <Title component="h1">
//         Calculate your daily calorie intake right now
//       </Title>

//       <Formik
//         initialValues={initialValues}
//         validationSchema={heroFormValidationSchema}
//         onSubmit={handleSubmit}
//       >
//         <FormCss autoComplete='off'>
//           <InputWrapperCss>
//             <InputSectionCss>
//               <LabelCss htmlFor="height">
//                 <FieldCss
//                   type="number"
//                   min="120"
//                   max="220"
//                   name="height"
//                   required
//                 />
//                 <span>Height *</span>
//                 <ErrorMessageCss component="div" name="height" />
//               </LabelCss>
              
//               <LabelCss htmlFor="age">
//                 <FieldCss
//                   type="number"
//                   min="18"
//                   max="70"
//                   name="age"
//                   required
//                 />
//                 <span>Age *</span>
//                 <ErrorMessageCss component="div" name="age" />
//               </LabelCss>

//               <LabelCss htmlFor="currentWeight">
//                 <FieldCss
//                   type="number"
//                   min="35"
//                   max="180"
//                   name="currentWeight"
//                   required
//                 />
//                 <span>Current weight *</span>
//                 <ErrorMessageCss component="div" name="currentWeight" />
//               </LabelCss>
//             </InputSectionCss>

//             <InputSectionCss>
//               <LabelCss htmlFor="desiredWeight">
//                 <FieldCss
//                   type="number"
//                   min="35"
//                   max="180"
//                   name="desiredWeight"
//                   required
//                 />
//                 <span>Desired weight *</span>
//                 <ErrorMessageCss component="div" name="desiredWeight" />
//               </LabelCss>            

//               <FieldsetCss>
//                 <legend>Blood type *</legend>

//                 <RadioBtnBoxCss>
//                   <label htmlFor="1">
//                     <RadioBtnCss
//                       type="radio"
//                       value="1"
//                       name="bloodType"
//                     />
//                     <span>1</span>
//                   </label>

//                   <label htmlFor="2">
//                     <RadioBtnCss
//                       type="radio"
//                       value="2"
//                       name="bloodType"
//                     />
//                     <span>2</span>
//                   </label>

//                   <label htmlFor="3">
//                     <RadioBtnCss
//                       type="radio"
//                       value="3"
//                       name="bloodType"
//                     />
//                     <span>3</span>
//                   </label>
                  
//                   <label htmlFor="4">
//                     <RadioBtnCss
//                       type="radio"
//                       value="4"
//                       name="bloodType"
//                     />
//                     <span>4</span>
//                   </label>
//                 </RadioBtnBoxCss>
                
//                 <ErrorMessageCss component="div" name="bloodType" />  
//               </FieldsetCss>
//             </InputSectionCss>
//           </InputWrapperCss>
          
//           <ButtonSubmit name="Start losing weight" />
//         </FormCss>
//       </Formik>
//     </Box>
//   );
// };