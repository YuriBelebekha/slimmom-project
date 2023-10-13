import { Navigation } from '../Navigation';
// import { UserMenu } from '../UserMenu';
// import { AuthNav } from '../AuthNav';
// import { useAuth } from 'hooks';
import { theme } from '../../constants/theme';

// MUI STYLES
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header>
      <Box sx={{ borderBottom: `2px solid ${theme.palette.primary.grey}` }}>
        <Container sx={{
          [theme.breakpoints.up('mobile')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
          },
          [theme.breakpoints.up('tablet')]: {
            paddingLeft: '32px',
            paddingRight: '32px',
          },
          [theme.breakpoints.up('desktop')]: {
            paddingLeft: '16px',
            paddingRight: '16px',
          },
        }}>
          <Navigation />

          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />}         */}        
        </Container>
      </Box>
    </header>
  );
};