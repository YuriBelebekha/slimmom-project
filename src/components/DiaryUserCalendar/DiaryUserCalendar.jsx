import { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { useDispatch } from 'react-redux';

import { DiarySearchProductMobile } from '../DiarySearchProductMobile';
import { DiarySearchProduct } from '../DiarySearchProduct/DiarySearchProduct';
import { DiaryEatenProductsList } from '../DairyEatenProductsList/DairyEatenProductsList';
import { useScreenSize } from '../../hooks/useScreenSize';
// import { getUserInfo } from '../../redux/userInfo/userInfoOperations';
import { getInfoForDay } from 'redux/day/dayOperations';
import { theme } from '../../constants/theme';

import {
  DatePickerBoxCss,
  DiaryListProductsBoxCss,
} from './DiaryUserCalendar.styled';

const currentDate = new Date();
export let selectedDate = currentDate;

function convertDate(date) {
  return String(dayjs(date).format('YYYY-MM-DD'));
}

export const DiaryUserCalendar = () => {
  const [dayInfo, setDayInfo] = useState();
  const screenSize = useScreenSize();
  const dispatch = useDispatch();

  // const todaysDate = currentDate;

  const getDayFetch = dispatch(
    getInfoForDay({ date: convertDate(selectedDate) })
  ).then(arg => {
    return arg.payload;
  });

  const getDay = async () => {
    const result = await getDayFetch;
    console.log('result in getDay: ', result);
    return result;
  };

  getDay().finally(data => setDayInfo(data));

  console.log(dayInfo);
  // dispatch(getUserInfo()).finally(() => {});

  // const getDayFetch = dispatch(
  //   getInfoForDay({ date: convertDate(selectedDate) })
  // ).then(arg => {
  //   return arg.payload;
  // });

  // const getDay = async () => {
  //   const a = await getDayFetch;
  //   // console.log(a);
  //   return a;
  // };
  const handleAcceptDate = useCallback(value => {
    selectedDate = value;
    console.log(convertDate(selectedDate));

    // getDay().then(data => {
    //   setDayInfo(data);
    // });
    // console.log(dayInfo);
  }, []);

  useEffect(() => {
    handleAcceptDate(selectedDate);

    // getDay().then(data => {
    //   setDayInfo(data);
    // });
    // console.log(dayInfo);
  }, [handleAcceptDate]);

  // day = async () => {
  //   return await dispatch(
  //     getInfoForDay({ date: convertDate(selectedDate) })
  //   ).then(arg => {
  //     return arg.payload;
  //   });
  // };
  // console.log(day());

  // const onAcceptDate = value => {
  //   selectedDate = value;

  // getDay().then(data => {
  //   console.log('data: ', data);

  //   setDayInfo(data);
  // });

  // day = async () => {
  //   return await dispatch(
  //     getInfoForDay({ date: convertDate(selectedDate) })
  //   ).then(arg => {
  //     return arg.payload;
  //   });
  // };
  // console.log(day());
  // };

  return (
    <>
      <DatePickerBoxCss>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            format="DD.MM.YYYY"
            onAccept={handleAcceptDate}
            value={dayjs(selectedDate)}
            maxDate={dayjs(currentDate)}
          />
          <DateRangeIcon />
        </LocalizationProvider>
      </DatePickerBoxCss>

      <DiaryListProductsBoxCss>
        {screenSize.width < theme.breakpoints.values.tablet ? (
          <DiarySearchProductMobile />
        ) : (
          <DiarySearchProduct />
        )}
      </DiaryListProductsBoxCss>

      <DiaryEatenProductsList day={dayInfo} />
    </>
  );
};
