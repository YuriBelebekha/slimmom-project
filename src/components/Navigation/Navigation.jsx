import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
// import { useAuth } from 'hooks';

// MUI Styles
import { Typography } from '@mui/material';

export const Navigation = () => { 
  // const { isLoggedIn } = useAuth();

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '14px',
      textTransform: 'uppercase',
      textDecoration: 'none',
    }}>      
      <NavLink to="/">
        <Logo />
      </NavLink>      

      <NavLink to="/login">
        <Typography>
            Log in
        </Typography>
      </NavLink>

      <NavLink to="/registration">
        <Typography>
          Registration
        </Typography>
      </NavLink>
    </nav>
  );
};