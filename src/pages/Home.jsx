import { Helmet, HelmetProvider } from 'react-helmet-async';

import { VisuallyHiddenH1 } from '../components/VisuallyHidden/VisuallyHidden.styled';
import { Box } from '@mui/material';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>


      <Box component="section">
        <VisuallyHiddenH1 component="h1">Hero</VisuallyHiddenH1>
      </Box>
    </HelmetProvider>
  )
};

export default Home;