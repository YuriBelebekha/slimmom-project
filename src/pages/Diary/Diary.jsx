import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DiaryUserCalendar } from 'components/DiaryUserCalendar';
import { DiaryUserSummary } from 'components/DiaryUserSummary';

const Diary = () => {
  const getSelectedDate = value => {
    console.log(value);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Diary</title>
      </Helmet>

      <DiaryUserCalendar func={getSelectedDate} />

      <DiaryUserSummary />
    </HelmetProvider>
  );
};

export default Diary;
