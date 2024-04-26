import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getInfoForDay } from 'redux/day/dayOperations';
import { isEqual } from 'lodash';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DiaryUserCalendar } from 'components/DiaryUserCalendar';
import { DiaryUserSummary } from 'components/DiaryUserSummary';

const Diary = () => {
  const [dayInfo, setDayInfo] = useState('');
  const dispatch = useDispatch();

  const getSelectedDate = value => {
    dispatch(getInfoForDay({ date: value })).then(args => {
      setDayInfo(prevState => {
        if (!isEqual(prevState, args.payload)) {
          return { ...args.payload };
        }
        return prevState;
      });
    });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Diary</title>
      </Helmet>

      <DiaryUserCalendar func={getSelectedDate} />

      <DiaryUserSummary props={dayInfo} />
    </HelmetProvider>
  );
};

export default Diary;
