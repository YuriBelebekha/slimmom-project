import { Helmet, HelmetProvider } from 'react-helmet-async';

// import { Box } from '@mui/material';
// import { VisuallyHiddenH1 } from '../components/VisuallyHidden/VisuallyHidden.styled';
import { HeroForm } from '../components/HeroForm';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Home</title>
      </Helmet>
      
      <HeroForm />
    </HelmetProvider>
  )
};

export default Home;