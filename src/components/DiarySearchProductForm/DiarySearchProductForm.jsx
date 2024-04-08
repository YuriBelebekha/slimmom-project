import { useState, useMemo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { getProductsFromList } from 'redux/productSearch/productSearchOperations';
import { dayData } from 'redux/day/dayOperations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';

import { useScreenSize } from '../../hooks/useScreenSize';
import { store } from '../../redux/store';
import { theme } from '../../constants/theme';
import { VisuallyHidden } from '../VisuallyHidden';
import { ButtonSubmit } from '../ButtonSubmit/ButtonSubmit';
import { selectedDate } from '../DiaryUserCalendar/DiaryUserCalendar';

import { Autocomplete, Box } from '@mui/material';
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

function convertDate(date) {
  return String(dayjs(date).format('YYYY-MM-DD'));
}

export const DiarySearchProductForm = ({ handleAcceptDateFunction }) => {
  const dispatch = useDispatch();
  const screenSize = useScreenSize();

  const convertSelectedDate = convertDate(selectedDate);

  const {
    products: { foundProductsList },
  } = store.getState();
  // const allData = store.getState();
  // console.log('allData: ', allData);

  const [productName, setProductName] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productId, setProductId] = useState('');

  const handleInputChange = (event, _value) => {
    setProductName(event.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleInputChange, 500);
  }, []);

  useEffect(() => {
    dispatch(getProductsFromList(productName));

    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults, dispatch, productName]);

  const handleChange = (_event, value, reason) => {
    reason === 'selectOption'
      ? setSelectedProduct(value)
      : setSelectedProduct('');

    foundProductsList.map(option => {
      return option.title.en.toLowerCase() === value.toLowerCase()
        ? setProductId(option._id)
        : null;
    });
  };

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  const formik = useFormik({
    initialValues: {
      date: '',
      productId: '',
      weight: '',
    },

    validationSchema: searchProductFormValidationSchema,

    onSubmit: (values, { resetForm, setSubmitting }) => {
      const payload = {
        date: convertSelectedDate,
        productId: productId,
        weight: Number(values.weight),
      };
      // console.log('payload: ', payload);
      dispatch(dayData(payload)).finally(() => {
        setSubmitting(false);
        handleAcceptDateFunction(); // dev
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
              variant="standard"
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
