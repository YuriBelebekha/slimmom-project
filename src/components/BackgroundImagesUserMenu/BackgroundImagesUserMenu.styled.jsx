import { ImageList, ImageListItem } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

import 'animate.css';

// tablet
export const ImageListTabletCss = styled(ImageList)`
  display: none;
  margin: 0;

  ${theme.breakpoints.up('tablet')} {
    display: block;
  }

  ${theme.breakpoints.up('desktop')} {
    display: none;
  }
`;

export const ImageListItemTabletCss = styled(ImageListItem)`
  position: absolute;

  ${theme.breakpoints.up('tablet')} {
    &:nth-of-type(1) {
      bottom: 0;
      right: 0;
      width: 602px;
      z-index: 1;

      animation: fadeInRight;
      animation-duration: 3000ms;
    }
  }
`;

// desktop
export const ImageListDesktopCss = styled(ImageList)`
  display: none;
  margin: 0;

  ${theme.breakpoints.up('desktop')} {
    display: block;
  }
`;

export const ImageListItemDesktopCss = styled(ImageListItem)`
  position: absolute;

  ${theme.breakpoints.up('desktop')} {
    &:nth-of-type(1) {
      top: 35px;
      right: 0;
      z-index: 1;

      animation: fadeInRight;
      animation-duration: 3000ms;
    }
  }
`;
