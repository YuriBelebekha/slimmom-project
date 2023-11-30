import { NavLink } from 'react-router-dom';
import { Logo } from '../Logo';
import { AuthNav } from '../AuthNav';
import { UserNav } from '../UserNav';
import { useAuth } from 'hooks';
import { NavCss, NavBoxCss } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavCss>
      <NavBoxCss>
        <NavLink to="/">
          <Logo />
        </NavLink>
      </NavBoxCss>

      <NavBoxCss>{isLoggedIn ? <UserNav /> : <AuthNav />}</NavBoxCss>
    </NavCss>
  );
};
