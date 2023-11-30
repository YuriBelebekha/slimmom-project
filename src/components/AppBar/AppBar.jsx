import { Navigation } from '../Navigation';
import { AppBarBoxCss, AppBarContainerCss } from './AppBar.styled';

export const AppBar = () => {
  return (
    <header>
      <AppBarBoxCss>
        <AppBarContainerCss>
          <Navigation />
        </AppBarContainerCss>
      </AppBarBoxCss>
    </header>
  );
};
