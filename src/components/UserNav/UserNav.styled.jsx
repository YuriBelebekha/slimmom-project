import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';
import { Menu } from '@mui/material';
import { theme } from '../../constants/theme';
import styled from '@emotion/styled';

export const NavLinkCss = styled(NavLink)`
  text-decoration: none;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${theme.palette.primary.darkGrey};

  &:last-child {
    margin-left: 14px;
  }

  &.active {
    color: ${theme.palette.primary.main};
  }

  ${theme.breakpoints.up('tablet')} {
    &:last-child {
      margin-left: 24px;
    }
  }

  ${theme.breakpoints.up('desktop')} {
    &:first-of-type {
      margin-left: 10px;
      padding: 9px 0 3px 20px;
      border-left: 2px solid ${theme.palette.primary.grey};
    }

    &:last-child {
      padding: 9px 0 3px;
    }
  }
`;

export const BoxCss = styled.div`
  ${theme.breakpoints.down('desktop')} {
    display: none;
  }
`;

export const MobileMenuBoxCss = styled(Box)`
  width: 48px;

  & button {
    padding: 0;
  }

  ${theme.breakpoints.up('desktop')} {
    display: none;
  }
`;

export const MenuCss = styled(Menu)`
  & .MuiPaper-root {
    position: static;
    display: flex;
    justify-content: center;
    max-width: calc(100%);
    min-height: calc(90vh);
    margin-top: 82px;
    border-radius: 0px;
    background-color: ${theme.palette.primary.bgcMobileMenu};
    text-align: center;
  }

  & .MuiList-root {
    width: 280px;
    padding: 60px 0;

    & .MuiButtonBase-root {
      display: block;
      padding: 0;

      text-align: center;

      & > a {
        font-family: VerdanaBold;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: ${theme.palette.primary.white};
      }

      & > a.active {
        color: ${theme.palette.primary.darkGrey};
      }
    }

    ${theme.breakpoints.up('tablet')} {
      padding: 100px 0;
    }
  }
`;
