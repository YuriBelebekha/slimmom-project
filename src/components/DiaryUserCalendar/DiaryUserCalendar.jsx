import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import DateRangeIcon from '@mui/icons-material/DateRange';

import { DiarySearchProductMobile } from '../DiarySearchProductMobile';
import { DiarySearchProduct } from '../DiarySearchProduct/DiarySearchProduct';
import { useScreenSize } from '../../hooks/useScreenSize';
import { theme } from '../../constants/theme';

import {
  DatePickerBoxCss,
  DiaryListProductsBoxCss,
} from './DiaryUserCalendar.styled';

const currentDate = new Date();
const getCurrentDate = currentDate.getDate();
const getCurrentMonth = currentDate.getMonth() + 1;
const getCurrentFullYear = currentDate.getFullYear();

export const DiaryUserCalendar = () => {
  const screenSize = useScreenSize();

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
        {screenSize.width < theme.breakpoints.values.tablet ? (
          <DiarySearchProductMobile />
        ) : (
          <DiarySearchProduct />
        )}
      </DiaryListProductsBoxCss>
    </>
  );
};