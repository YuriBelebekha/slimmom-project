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
      padding: 12px 0 3px 20px;
      border-left: 2px solid ${theme.palette.primary.grey};
    }

    &:last-child {
      padding: 12px 0 3px;
    }
  }
`;

export const BoxCss = styled(Box)`
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

export const UserMenuBackgroundColor = styled(Box)`
  ${theme.breakpoints.up('desktop')} {
    position: absolute;
    top: 0;
    right: 0;
    width: 515px;
    height: 100%;
    background-color: ${theme.palette.primary.bgcUserBlock};
  }
`;

export const UserNavMenuBoxCss = styled(Box)`
  position: absolute;
  top: 82px;
  right: 0;
  height: 40px;
  width: 100%;
  text-align: right;
  background-color: ${theme.palette.primary.bgcUserBlock};
  z-index: 2;

  & > span {
    display: inline-block;
    padding: 12px 15px 3px;
    margin-top: 3px;
    font-family: verdanaBold;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    color: ${theme.palette.primary.main};
    border-right: 2px solid ${theme.palette.primary.grey};
  }

  & > button {
    font-family: verdanaBold;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    color: ${theme.palette.primary.darkGrey};
  }

  ${theme.breakpoints.up('tablet')} {
    top: 18px;
    right: 90px;
    width: 35%;
    background-color: transparent;
  }

  ${theme.breakpoints.up('desktop')} {
    right: 0;
    padding-top: 95px;
    padding-right: 15px;
  }
`;
