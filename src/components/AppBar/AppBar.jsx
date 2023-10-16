import { Navigation } from '../Navigation';
// import { UserMenu } from '../UserMenu';
// import { AuthNav } from '../AuthNav';
// import { useAuth } from 'hooks';
import { AppBarBoxCss, AppBarContainerCss } from './AppBar.styled';

export const AppBar = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <header>
      <AppBarBoxCss>
        <AppBarContainerCss>
          <Navigation />

          {/* {isLoggedIn ? <UserMenu /> : <AuthNav />}         */}        
        </AppBarContainerCss>
      </AppBarBoxCss>
    </header>
  );
};