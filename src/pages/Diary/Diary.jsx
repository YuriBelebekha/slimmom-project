import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DiaryUserCalendar } from 'components/DiaryUserCalendar';

const Diary = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Diary</title>
      </Helmet>

      <DiaryUserCalendar />
    </HelmetProvider>
  );
};

export default Diary;
