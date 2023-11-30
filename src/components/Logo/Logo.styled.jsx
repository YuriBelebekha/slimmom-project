import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { ReactComponent as MainLogo } from '../../images/logo/slimmom-logo.svg';
import { ReactComponent as MainLogoText } from '../../images/logo/slimmom-logo-text.svg';
import { ReactComponent as MainLogoTextDiary } from '../../images/logo/slimmom-logo-text.svg';
import { theme } from '../../constants/theme';

export const MainLogoCss = styled(MainLogo)`
  ${theme.breakpoints.up('desktop')} {
    width: 69px;
    height: 66px;
  },
`;

export const MainLogoTextCss = styled(MainLogoText)`
  margin-left: 10px;

  ${theme.breakpoints.down('tablet')} {
    display: none;
  }

  ${theme.breakpoints.up('desktop')} {
    margin-left: 0;
    transform: translate(-10px, 22px);
  }
`;

export const MainLogoTextDiaryCss = styled(MainLogoTextDiary)`
  margin-left: 10px;

  ${theme.breakpoints.up('desktop')} {
    margin-left: 0;
    transform: translate(-10px, 22px);
  }
`;

export const LogoBoxCss = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
