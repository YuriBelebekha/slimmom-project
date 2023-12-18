import { Helmet, HelmetProvider } from 'react-helmet-async';

const Diary = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Diary</title>
      </Helmet>
    </HelmetProvider>
  );
};

export default Diary;
