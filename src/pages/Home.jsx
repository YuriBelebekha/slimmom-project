import { Helmet, HelmetProvider } from 'react-helmet-async';

// import { Box } from '@mui/material';
// import { VisuallyHiddenH1 } from '../components/VisuallyHidden/VisuallyHidden.styled';
import { CalculateForm } from '../components/CalculateForm';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Home</title>
      </Helmet>

      <CalculateForm />
    </HelmetProvider>
  );
};

export default Home;
