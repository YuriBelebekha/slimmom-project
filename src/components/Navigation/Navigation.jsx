import { NavLink } from 'react-router-dom';
// import { useAuth } from 'hooks';

// MUI Styles
import { Typography } from '@mui/material';

export const Navigation = () => { 
  // const { isLoggedIn } = useAuth();  

  return (
    <nav>
      <Typography sx={{ fontSize: '14px' }}>
        <NavLink to="/">

        </NavLink>
      </Typography>

      <Typography sx={{ fontSize: '14px' }}>
        <NavLink to="/login">
            Log in
        </NavLink>
      </Typography>

      <Typography sx={{ fontSize: '14px' }}>
        <NavLink to="/registration">
            Registration
        </NavLink>
      </Typography>
    </nav>
  );
};