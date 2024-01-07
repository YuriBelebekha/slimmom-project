import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import DateRangeIcon from '@mui/icons-material/DateRange';

import { DiarySearchProduct } from '../DiarySearchProduct';

import {
  DatePickerBoxCss,
  DiaryListProductsBoxCss,
} from './DiaryUserCalendar.styled';

const currentDate = new Date();
const getCurrentDate = currentDate.getDate();
const getCurrentMonth = currentDate.getMonth() + 1;
const getCurrentFullYear = currentDate.getFullYear();

export const DiaryUserCalendar = () => {
  return (
    <>
      <DatePickerBoxCss>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            format="DD.MM.YYYY"
            defaultValue={dayjs(
              `${getCurrentFullYear}-${getCurrentMonth}-${getCurrentDate}`
            )}
          />
          <DateRangeIcon />
        </LocalizationProvider>
      </DatePickerBoxCss>

      <DiaryListProductsBoxCss>
        <DiarySearchProduct />
      </DiaryListProductsBoxCss>
    </>
  );
};
