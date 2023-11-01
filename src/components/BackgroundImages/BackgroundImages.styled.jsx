import { ImageList, ImageListItem } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

// tablet
export const ImageListTabletCss = styled(ImageList)`
  display: none;
  margin: 0;

  ${theme.breakpoints.up('tablet')} {    
    display: block;    
  };

  ${theme.breakpoints.up('desktop')} {
    display: none;
  };
`;

export const ImageListItemTabletCss = styled(ImageListItem)`
  position: absolute;

  ${theme.breakpoints.up('tablet')} {
    &:nth-child(1) {      
      width: 491px;
      height: 431px;      
      right: 0;
      bottom: 0;
      z-index: -1;
    };

    &:nth-child(2) {      
      width: 308px;
      height: 303px;
      right: 38px;
      bottom: 158px;
      z-index: -1;
    };

    &:nth-child(3) {      
      width: 602px;
      height: 531px;
      left: 0;
      bottom: 0;
      z-index: -2;
    };

    &:nth-child(4) {
      width: 521px;
      height: 563px;
      right: 0;
      bottom: 0;
      z-index: -3;
    };
  };
`;

// desktop
export const ImageListDesktopCss = styled(ImageList)`
  display: none;
  margin: 0;

  ${theme.breakpoints.up('desktop')} {
    display: block;
  };
`;

export const ImageListItemDesktopCss = styled(ImageListItem)`
  position: absolute;

  ${theme.breakpoints.up('desktop')} {
    &:nth-child(1) {      
      width: 498px;
      height: 450px;      
      top: 0;
      right: 0;
      z-index: -1;
    };

    &:nth-child(2) {      
      width: 362px;
      height: 374px;
      right: 0;
      bottom: 0;
      z-index: -1;
    };

    &:nth-child(3) {      
      width: 746px;
      height: 820px;
      top: 0;
      right: 195px;
      z-index: -1;
    };

    &:nth-child(4) {
      width: 603px;
      height: 816px;
      right: 0;
      bottom: 0;
      z-index: -3;
    };
  };
`;