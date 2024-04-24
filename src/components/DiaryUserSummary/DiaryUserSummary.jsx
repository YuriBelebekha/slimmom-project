import dayjs from 'dayjs';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

import {
  WrapperCss,
  TitleCss,
  ListCss,
  ListItemCss,
  ListItemTextCss,
  TextCss,
  WrapperInnerCss,
} from './DiaryUserSummary.styled';
import { store } from '../../redux/store';
import { selectedDate } from '../DiaryUserCalendar/DiaryUserCalendar';
import { NotAllowedProductsList } from 'components/NotAllowedProductsList';

// import { getInfoForDay } from 'redux/day/dayOperations';

const userDaySummaryForDate = {
  kcalLeftForDate: '000',
  kcalConsumedForDate: '000',
  dailyRateForDate: '000',
  percentsOfDailyRateForDate: '000',
};

export const DiaryUserSummary = props => {
  const convertSelectedDate = dayjs(selectedDate).format('DD.MM.YYYY');
  // console.log('convertSelectedDate: ', convertSelectedDate);
  console.log('props inside DiaryUserSummary: ', props);

  // const dispatch = useDispatch();
  // dispatch(getInfoForDay({ date: '2024-04-24' })).then(({ payload }) => {
  //   console.log('payload: ', payload);
  // });

  const {
    day: { daySummary },
  } = store.getState();

  // console.log('from store: ', daySummary);

  if (daySummary) {
    const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
      daySummary;

    userDaySummaryForDate.kcalLeftForDate = Math.round(kcalLeft).toString();
    userDaySummaryForDate.kcalConsumedForDate =
      Math.round(kcalConsumed).toString();
    userDaySummaryForDate.dailyRateForDate = Math.round(dailyRate).toString();
    userDaySummaryForDate.percentsOfDailyRateForDate =
      Math.round(percentsOfDailyRate).toString();
  }

  const {
    kcalLeftForDate,
    kcalConsumedForDate,
    dailyRateForDate,
    percentsOfDailyRateForDate,
  } = userDaySummaryForDate;

  return (
    <WrapperCss>
      <div>
        <TitleCss component="h3">Summary for {convertSelectedDate}</TitleCss>

        <ListCss>
          <ListItemCss>
            <ListItemTextCss primary="Left" sx={{ width: '60%' }} />
            <ListItemTextCss
              primary={kcalLeftForDate}
              sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
            />
            <ListItemTextCss primary="kcal" sx={{ width: '12%' }} />
          </ListItemCss>

          <ListItemCss>
            <ListItemTextCss primary="Consumed" sx={{ width: '60%' }} />
            <ListItemTextCss
              primary={kcalConsumedForDate}
              sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
            />
            <ListItemTextCss primary="kcal" sx={{ width: '12%' }} />
          </ListItemCss>

          <ListItemCss>
            <ListItemTextCss primary="Daily rate" sx={{ width: '60%' }} />
            <ListItemTextCss
              primary={dailyRateForDate}
              sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
            />
            <ListItemTextCss primary="kcal" sx={{ width: '12%' }} />
          </ListItemCss>

          <ListItemCss>
            <ListItemTextCss primary="n% of normal" sx={{ width: '60%' }} />
            <ListItemTextCss
              primary={percentsOfDailyRateForDate}
              sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
            />
            <ListItemTextCss primary="%" sx={{ width: '12%' }} />
          </ListItemCss>
        </ListCss>
      </div>

      {dailyRateForDate !== '000' ? (
        <NotAllowedProductsList />
      ) : (
        <WrapperInnerCss>
          <TitleCss component="h3">Foods you should not eat</TitleCss>
          <TextCss>Your diet will be displayed here</TextCss>
        </WrapperInnerCss>
      )}
    </WrapperCss>
  );
};

// import dayjs from 'dayjs';

// import {
//   WrapperCss,
//   TitleCss,
//   ListCss,
//   ListItemCss,
//   ListItemTextCss,
//   TextCss,
//   WrapperInnerCss,
// } from './DiaryUserSummary.styled';
// import { store } from '../../redux/store';
// import { selectedDate } from '../DiaryUserCalendar/DiaryUserCalendar';
// import { NotAllowedProductsList } from 'components/NotAllowedProductsList';

// export const DiaryUserSummary = () => {
//   const {
//     userInfo: { days },
//   } = store.getState();
//   // const allData = store.getState();
//   // console.log('store.getState: ', allData);

//   const convertSelectedDate = dayjs(selectedDate).format('DD.MM.YYYY');
//   console.log('convertSelectedDate: ', convertSelectedDate);

//   const userDaySummaryForDate = {
//     kcalLeft: '000',
//     kcalConsumed: '000',
//     dailyRate: '000',
//     percentsOfDailyRate: '000',
//   };

//   const userDaySummaryArray = days.map(value => {
//     console.log('value: ', value);
//     if (dayjs(value.date).format('DD.MM.YYYY') === convertSelectedDate) {
//       const {
//         daySummary: { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate },
//       } = value;

//       const userDaySummary = {
//         kcalLeft,
//         kcalConsumed,
//         dailyRate,
//         percentsOfDailyRate: Math.round(percentsOfDailyRate),
//       };
//       return userDaySummary;
//     } else {
//       return null;
//     }
//   });

//   userDaySummaryArray.forEach(value => {
//     if (value) {
//       userDaySummaryForDate.kcalLeft = value.kcalLeft;
//       userDaySummaryForDate.kcalConsumed = value.kcalConsumed;
//       userDaySummaryForDate.dailyRate = value.dailyRate;
//       userDaySummaryForDate.percentsOfDailyRate = value.percentsOfDailyRate;
//     }
//   });

//   const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } =
//     userDaySummaryForDate;

//   return (
//     <WrapperCss>
//       <div>
//         <TitleCss component="h3">Summary for {convertSelectedDate}</TitleCss>

//         <ListCss>
//           <ListItemCss>
//             <ListItemTextCss primary="Left" sx={{ width: '60%' }} />
//             <ListItemTextCss
//               primary={kcalLeft}
//               sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
//             />
//             <ListItemTextCss primary="kcal" sx={{ width: '12%' }} />
//           </ListItemCss>
//           <ListItemCss>
//             <ListItemTextCss primary="Consumed" sx={{ width: '60%' }} />
//             <ListItemTextCss
//               primary={kcalConsumed}
//               sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
//             />
//             <ListItemTextCss primary="kcal" sx={{ width: '12%' }} />
//           </ListItemCss>
//           <ListItemCss>
//             <ListItemTextCss primary="Daily rate" sx={{ width: '60%' }} />
//             <ListItemTextCss
//               primary={dailyRate}
//               sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
//             />
//             <ListItemTextCss primary="kcal" sx={{ width: '12%' }} />
//           </ListItemCss>
//           <ListItemCss>
//             <ListItemTextCss primary="n% of normal" sx={{ width: '60%' }} />
//             <ListItemTextCss
//               primary={percentsOfDailyRate}
//               sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
//             />
//             <ListItemTextCss primary="%" sx={{ width: '12%' }} />
//           </ListItemCss>
//         </ListCss>
//       </div>

//       {dailyRate !== '000' ? (
//         <NotAllowedProductsList />
//       ) : (
//         <WrapperInnerCss>
//           <TitleCss component="h3">Foods you should not eat</TitleCss>
//           <TextCss>Your diet will be displayed here</TextCss>
//         </WrapperInnerCss>
//       )}
//     </WrapperCss>
//   );
// };
