import { useState, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { getProductsFromList } from 'redux/productSearch/productSearchOperations';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { useScreenSize } from '../../hooks/useScreenSize';
import { store } from '../../redux/store';
import { theme } from '../../constants/theme';
import { VisuallyHidden } from '../VisuallyHidden';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';

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
  console.log(foundProductsList);

  const [productName, setProductName] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productId, setProductId] = useState('');

  const handleInputChange = event => {
    setProductName(event.target.value);
  };

  // START. Debounce on inputs
  const debouncedResults = useMemo(() => {
    return debounce(handleInputChange, 500);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });
  // END. Debounce on inputs

  if (productName) {
    dispatch(getProductsFromList(productName));
  }

  const handleChange = (_event, value) => {
    setSelectedProduct(value);
  };

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  console.log(foundProductsList);
  console.log(selectedProduct);

  // const handleClose = (event, reason) => {
  // console.log(foundProductsList);
  // console.log(selectedProduct);
  // console.log(reason);
  //   if (foundProductsList && selectedProduct) {
  //     foundProductsList.map(product => {
  //       console.log(product.title.en);
  //       console.log(selectedProduct);
  //       return product.title.en.toLowerCase() === selectedProduct.toLowerCase()
  //         ? setProductId(product._id)
  //         : setProductId('');
  //     });
  //   }
  // };
  console.log(selectedProduct, '-', productId);

  const formik = useFormik({
    initialValues: {
      search: '',
      weight: '',
    },

    validationSchema: searchProductFormValidationSchema,

    onSubmit: (values, { resetForm, setSubmitting }) => {
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
          freeSolo
          id="search"
          disableClearable
          value={selectedProduct}
          onInputChange={debouncedResults}
          onChange={handleChange}
          // onClose={handleClose}
          options={foundProductsList.map(option =>
            capitalizeFirstLetter(option.title.en)
          )}
          renderOption={(props, option) => {
            return (
              <li {...props} key={props.id}>
                {option}
              </li>
            );
          }}
          renderInput={params => (
            <TextFieldCss
              {...params}
              label="Enter product name"
              InputProps={{
                ...params.InputProps,
                type: 'search',
              }}
            />
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

// export const DiarySearchProductForm = () => {
//   const dispatch = useDispatch();
//   const screenSize = useScreenSize();
//   const [productName, setProductName] = useState('');
//   const [inputValue, setInputValue] = useState('');
//   const [productId, setProductId] = useState('');

//   const {
//     products: { foundProductsList },
//   } = store.getState();
//   // console.log(foundProductsList);

//   const handleInputChange = (event, value) => {
//     dispatch(getProductsFromList(event.target.value));
//     setInputValue(value);
//   };

//   const handleChange = (_event, value) => {
//     setProductName(value);
//     console.log(value);

//     foundProductsList.map(option => {
//       return option.title.en.toLowerCase() === value.toLowerCase()
//         ? setProductId(option._id)
//         : setProductId('');
//     });
//   };

//   function capitalizeFirstLetter(string) {
//     return string[0].toUpperCase() + string.slice(1);
//   }

//   const formik = useFormik({
//     initialValues: {
//       search: '',
//       weight: '',
//     },

//     validationSchema: searchProductFormValidationSchema,

//     onSubmit: (values, { resetForm, setSubmitting }) => {
//       const payload = {
//         search: productId,
//         weight: values.weight,
//       };

//       dispatch(getProductsFromList(payload)).finally(() => {
//         setSubmitting(false);
//       });

//       resetForm();
//     },
//   });

//   return (
//     <Box>
//       <VisuallyHidden component="h2">Search Product Form</VisuallyHidden>

//       <FormCss onSubmit={formik.handleSubmit}>
//         <Autocomplete
//           disablePortal
//           id="search"
//           value={productName}
//           inputValue={inputValue}
//           onInputChange={handleInputChange}
//           onChange={handleChange}
//           options={foundProductsList.map(option =>
//             capitalizeFirstLetter(option.title.en)
//           )}
//           sx={{ width: 300 }}
//           renderOption={(props, option) => {
//             return (
//               <li {...props} key={props.id}>
//                 {option}
//               </li>
//             );
//           }}
//           renderInput={params => (
//             <TextFieldCss {...params} label="Enter product name" />
//           )}
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
