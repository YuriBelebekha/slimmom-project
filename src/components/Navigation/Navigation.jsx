import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import { NavCss, NavBoxCss, NavLinkCss } from './Navigation.styled';
// import { useAuth } from 'hooks';

export const Navigation = () => { 
  // const { isLoggedIn } = useAuth();

  return (
    <NavCss>
      <NavBoxCss>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </NavBoxCss>

      <NavBoxCss>        
        <NavLinkCss to="/login">        
          Log in        
        </NavLinkCss>

        <NavLinkCss to="/registration">        
          Registration        
        </NavLinkCss>
      </NavBoxCss>
    </NavCss>
  );
};