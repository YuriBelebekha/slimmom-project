import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DiaryUserCalendar } from 'components/DiaryUserCalendar';
import { DiaryUserSummary } from 'components/DiaryUserSummary';

const Diary = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Diary</title>
      </Helmet>

      <DiaryUserCalendar />

      <DiaryUserSummary />
    </HelmetProvider>
  );
};

export default Diary;
