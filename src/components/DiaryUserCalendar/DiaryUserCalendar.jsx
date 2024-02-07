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

let day;

export const DiaryUserCalendar = () => {
  const screenSize = useScreenSize();
  const dispatch = useDispatch();
  // dispatch(getUserInfo()).finally(() => {});

  day = async () => {
    return await dispatch(
      getInfoForDay({ date: convertDate(selectedDate) })
    ).then(arg => {
      return arg.payload;
    });
  };

  console.log(day());

  const onAcceptDate = value => {
    selectedDate = value;

    day = async () => {
      return await dispatch(
        getInfoForDay({ date: convertDate(selectedDate) })
      ).then(arg => {
        return arg.payload;
      });
    };

    console.log(day());
  };

  return (
    <>
      <DatePickerBoxCss>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            format="DD.MM.YYYY"
            onAccept={onAcceptDate}
            value={dayjs(selectedDate)}
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

      <DiaryEatenProductsList />
    </>
  );
};
