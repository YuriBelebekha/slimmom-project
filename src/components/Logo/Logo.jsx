import {
  LogoBoxCss,
  MainLogoCss,
  MainLogoTextCss,
  MainLogoTextDiaryCss,
} from './Logo.styled';
import { useAuth } from 'hooks';

export const Logo = () => {
  const { isLoggedIn } = useAuth();

  return (
    <LogoBoxCss>
      <MainLogoCss />

      {isLoggedIn ? <MainLogoTextDiaryCss /> : <MainLogoTextCss />}
    </LogoBoxCss>
  );
};
