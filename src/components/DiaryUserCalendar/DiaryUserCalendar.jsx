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

export const DiaryUserCalendar = () => {
  const screenSize = useScreenSize();
  const dispatch = useDispatch();
  // dispatch(getUserInfo()).finally(() => {});
  let infoForDay;

  const onAcceptDate = value => {
    selectedDate = value;

    const convertSelectedDate = dayjs(selectedDate).format('YYYY-MM-DD');
    infoForDay = dispatch(
      getInfoForDay({ date: String(convertSelectedDate) })
    ).then(arg => {
      return arg.payload;
    });

    const result = async () => {
      const a = await infoForDay;
      console.log(a);
    };

    result();
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

      <DiaryEatenProductsList props={infoForDay} />
    </>
  );
};
