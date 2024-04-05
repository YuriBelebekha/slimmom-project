import { useState, useEffect, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import { isEqual } from 'lodash';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import DateRangeIcon from '@mui/icons-material/DateRange';

import { DiarySearchProductMobile } from '../DiarySearchProductMobile';
import { DiarySearchProduct } from '../DiarySearchProduct/DiarySearchProduct';
import { DiaryEatenProductsList } from '../DairyEatenProductsList/DairyEatenProductsList';
import { useScreenSize } from '../../hooks/useScreenSize';
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
  const [dayInfo, setDayInfo] = useState('');
  const screenSize = useScreenSize();
  const dispatch = useDispatch();

  const childRefDiaryUserCalendar = useRef(null); // dev

  const handleAcceptDate = useCallback(
    value => {
      selectedDate = value;
      dispatch(getInfoForDay({ date: convertDate(selectedDate) })).then(
        args => {
          // console.log('args: ', args);
          setDayInfo(prevState => {
            if (!isEqual(prevState, args.payload)) {
              return { ...args.payload };
            }
            return prevState;
          });
        }
      );
    },
    [dispatch]
  );

  const handleSetDayInfo = selectedDate => {
    dispatch(getInfoForDay({ date: convertDate(selectedDate) })).then(args => {
      setDayInfo(prevState => {
        if (!isEqual(prevState, args.payload)) {
          return { ...args.payload };
        }
        return prevState;
      });
    });
  };

  useEffect(() => {
    handleAcceptDate(selectedDate);
  }, [dayInfo, handleAcceptDate]);

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
          <DiarySearchProductMobile
          // ref={childRefDiaryUserCalendar} // dev
          // parentFunctionDiaryUserCalendar={handleSetDayInfo} // dev
          />
        ) : (
          <DiarySearchProduct
            ref={childRefDiaryUserCalendar} // dev
            parentFunctionDiaryUserCalendar={handleSetDayInfo} // dev
          />
        )}
      </DiaryListProductsBoxCss>

      <DiaryEatenProductsList day={dayInfo} />
    </>
  );
};

// import { useState, useEffect, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
// import dayjs from 'dayjs';
// import { isEqual } from 'lodash';

// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
// import DateRangeIcon from '@mui/icons-material/DateRange';

// import { DiarySearchProductMobile } from '../DiarySearchProductMobile';
// import { DiarySearchProduct } from '../DiarySearchProduct/DiarySearchProduct';
// import { DiaryEatenProductsList } from '../DairyEatenProductsList/DairyEatenProductsList';
// import { useScreenSize } from '../../hooks/useScreenSize';
// import { getInfoForDay } from 'redux/day/dayOperations';
// import { theme } from '../../constants/theme';

// import {
//   DatePickerBoxCss,
//   DiaryListProductsBoxCss,
// } from './DiaryUserCalendar.styled';

// const currentDate = new Date();
// export let selectedDate = currentDate;

// function convertDate(date) {
//   return String(dayjs(date).format('YYYY-MM-DD'));
// }

// export const DiaryUserCalendar = () => {
//   const [dayInfo, setDayInfo] = useState('');
//   const screenSize = useScreenSize();
//   const dispatch = useDispatch();

//   const handleAcceptDate = useCallback(
//     value => {
//       selectedDate = value;
//       dispatch(getInfoForDay({ date: convertDate(selectedDate) })).then(
//         args => {
//           console.log('args: ', args);
//           setDayInfo(prevState => {
//             if (!isEqual(prevState, args.payload)) {
//               return { ...args.payload };
//             }
//             return prevState;
//           });
//         }
//       );
//     },
//     [dispatch]
//   );

//   useEffect(() => {
//     handleAcceptDate(selectedDate);
//   }, [dayInfo, handleAcceptDate]);

//   return (
//     <>
//       <DatePickerBoxCss>
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//           <MobileDatePicker
//             format="DD.MM.YYYY"
//             onAccept={handleAcceptDate}
//             value={dayjs(selectedDate)}
//             maxDate={dayjs(currentDate)}
//           />
//           <DateRangeIcon />
//         </LocalizationProvider>
//       </DatePickerBoxCss>

//       <DiaryListProductsBoxCss>
//         {screenSize.width < theme.breakpoints.values.tablet ? (
//           <DiarySearchProductMobile />
//         ) : (
//           <DiarySearchProduct />
//         )}
//       </DiaryListProductsBoxCss>

//       <DiaryEatenProductsList day={dayInfo} />
//     </>
//   );
// };
