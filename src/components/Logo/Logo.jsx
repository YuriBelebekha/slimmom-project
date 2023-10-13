import { ReactComponent as MainLogo } from '../../images/logo/slimmom-logo.svg';
import { ReactComponent as MainLogoText } from '../../images/logo/slimmom-logo-text.svg';
import { theme } from '../../constants/theme';

// EMOTION Styles
import styled from '@emotion/styled';

const CssMainLogo = styled(MainLogo)({
  [theme.breakpoints.up('desktop')]: {
    width: '69px',
    height: '66px',
  },
});

const CssMainLogoText = styled(MainLogoText)({
  marginLeft: '10px',

  [theme.breakpoints.up('desktop')]: {
    transform: 'translate(-10px, -3px)',
  },
});

export const Logo = () => {
  return (
    <>
      <CssMainLogo />
      <CssMainLogoText />
    </>    
  );
};