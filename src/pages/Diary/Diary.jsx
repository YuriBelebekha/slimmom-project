import { Helmet, HelmetProvider } from 'react-helmet-async';

const Diary = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Diary</title>
      </Helmet>

      <div>Hello, this is Diary</div>
    </HelmetProvider>
  );
};

export default Diary;
