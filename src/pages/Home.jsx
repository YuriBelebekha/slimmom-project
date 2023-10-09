import { Helmet, HelmetProvider } from 'react-helmet-async';

import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>


      <Box>
        <Typography>Some text</Typography>
      </Box>
    </HelmetProvider>
  )
};

export default Home;