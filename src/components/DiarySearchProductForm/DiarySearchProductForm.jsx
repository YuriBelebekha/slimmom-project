import { useDispatch } from 'react-redux';
import { store } from '../../redux/store';
import { getProductsFromList } from 'redux/productSearch/productSearchOperations';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { VisuallyHidden } from '../VisuallyHidden';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import { useScreenSize } from '../../hooks/useScreenSize';

import { theme } from '../../constants/theme';
import { Box, Autocomplete } from '@mui/material';
import { FormCss, TextFieldCss } from './DiarySearchProductForm.styled';

const searchProductFormValidationSchema = yup.object().shape({
  // search: yup
  //   .string('Enter product name')
  //   .min(2, 'Minimum 2 characters length')
  //   .max(50, 'Maximum 50 characters length')
  //   .required('Product name is required'),
  weight: yup
    .number('Enter your password')
    .min(1, 'Minimum 1 gram')
    .max(3000, 'Maximum 3000 grams')
    .positive()
    .required('Weight is required'),
});

export const DiarySearchProductForm = () => {
  const dispatch = useDispatch();
  const screenSize = useScreenSize();

  const {
    products: { foundProductsList },
  } = store.getState();

  const handleChange = e => {
    dispatch(getProductsFromList(e.target.value));
  };

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  const formik = useFormik({
    initialValues: {
      search: '',
      weight: '',
    },

    validationSchema: searchProductFormValidationSchema,

    onSubmit: (values, { resetForm, setSubmitting }) => {
      console.log(values);

      const payload = {
        search: values.search,
        weight: values.weight,
      };
      dispatch(getProductsFromList(payload)).finally(() => {
        setSubmitting(false);
      });

      resetForm();
    },
  });

  return (
    <Box>
      <VisuallyHidden component="h2">Search Product Form</VisuallyHidden>

      <FormCss onSubmit={formik.handleSubmit}>
        <Autocomplete
          disablePortal
          id="search"
          onInputChange={handleChange}
          options={foundProductsList.map(option =>
            capitalizeFirstLetter(option.title.en)
          )}
          sx={{ width: 300 }}
          renderOption={(props, option) => {
            return (
              <li {...props} key={props.id}>
                {option}
              </li>
            );
          }}
          renderInput={params => (
            <TextFieldCss {...params} label="Enter product name" />
          )}
        />

        <TextFieldCss
          variant="standard"
          id="weight"
          name="weight"
          label="Enter grams"
          value={formik.values.weight}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.weight && Boolean(formik.errors.weight)}
          helperText={formik.touched.weight && formik.errors.weight}
        />

        {screenSize.width < theme.breakpoints.values.tablet ? (
          <ButtonSubmit name="Add" />
        ) : (
          <ButtonSubmit name="+" />
        )}
      </FormCss>
    </Box>
  );
};

// import { useDispatch } from 'react-redux';
// import { selectProductFromList } from 'redux/productSearch/productSearchOperations';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { VisuallyHidden } from '../VisuallyHidden';
// import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
// import { useScreenSize } from '../../hooks/useScreenSize';
// import { theme } from '../../constants/theme';

// import { Box } from '@mui/material';
// import { FormCss, TextFieldCss } from './DiarySearchProductForm.styled';

// const searchProductFormValidationSchema = yup.object().shape({
//   search: yup
//     .string('Enter product name')
//     .min(2, 'Minimum 2 characters length')
//     .max(50, 'Maximum 50 characters length')
//     .required('Product name is required'),
//   weight: yup
//     .number('Enter your password')
//     .min(1, 'Minimum 1 gram')
//     .max(3000, 'Maximum 3000 grams')
//     .positive()
//     .required('Weight is required'),
// });

// export const DiarySearchProductForm = () => {
//   const dispatch = useDispatch();
//   const screenSize = useScreenSize();

//   const formik = useFormik({
//     initialValues: {
//       search: '',
//       weight: '',
//     },

//     validationSchema: searchProductFormValidationSchema,

//     onSubmit: (values, { resetForm, setSubmitting }) => {
//       console.log(values);

//       const payload = {
//         search: values.search,
//         weight: values.weight,
//       };
//       dispatch(selectProductFromList(payload)).finally(() => {
//         setSubmitting(false);
//       });

//       resetForm();
//     },
//   });
//   // console.log(formik.handleChange);

//   return (
//     <Box>
//       <VisuallyHidden component="h2">Search Product Form</VisuallyHidden>

//       <FormCss onSubmit={formik.handleSubmit}>
//         <TextFieldCss
//           variant="standard"
//           id="search"
//           name="search"
//           label="Enter product name"
//           value={formik.values.search}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.search && Boolean(formik.errors.search)}
//           helperText={formik.touched.search && formik.errors.search}
//         />

//         <TextFieldCss
//           variant="standard"
//           id="weight"
//           name="weight"
//           label="Enter grams"
//           value={formik.values.weight}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           error={formik.touched.weight && Boolean(formik.errors.weight)}
//           helperText={formik.touched.weight && formik.errors.weight}
//         />

//         {screenSize.width < theme.breakpoints.values.tablet ? (
//           <ButtonSubmit name="Add" />
//         ) : (
//           <ButtonSubmit name="+" />
//         )}
//       </FormCss>
//     </Box>
//   );
// };
