import { NavLink } from 'react-router-dom';
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
