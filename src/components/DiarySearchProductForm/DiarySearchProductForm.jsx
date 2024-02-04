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

import { Box } from '@mui/material';
import {
  FormCss,
  AutocompleteCss,
  TextFieldCss,
} from './DiarySearchProductForm.styled';

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

  const convertSelectedDate = dayjs(selectedDate).format('YYYY-MM-DD');
  // console.log(convertSelectedDate);

  const {
    products: { foundProductsList },
  } = store.getState();
  // console.log(foundProductsList);
  // const allData = store.getState();
  // console.log(allData);

  const [productName, setProductName] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productId, setProductId] = useState('');

  const handleInputChange = (event, _value, reason) => {
    setProductName(event.target.value);
  };

  // START. Debounce on inputs
  const debouncedResults = useMemo(() => {
    return debounce(handleInputChange, 500);
  }, []);

  useEffect(() => {
    dispatch(getProductsFromList(productName));

    return () => {
      debouncedResults.cancel();
    };
  });
  // END. Debounce on inputs

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
      console.log(payload);
      dispatch(dayData(payload)).finally(() => {
        setSubmitting(false);
      });

      resetForm();
    },
  });

  return (
    <Box>
      <VisuallyHidden component="h2">Search Product Form</VisuallyHidden>

      <FormCss onSubmit={formik.handleSubmit}>
        <AutocompleteCss
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
