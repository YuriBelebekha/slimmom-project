import * as React from 'react';
import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {
  NavLinkCss,
  BoxCss,
  MobileMenuBoxCss,
  MenuCss,
} from './UserNav.styled';

export const UserNav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <BoxCss>
        <NavLinkCss to="/diary">Diary</NavLinkCss>
        <NavLinkCss to="/calculator">Calculator</NavLinkCss>
      </BoxCss>

      <MobileMenuBoxCss>
        <Button
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </Button>

        <MenuCss
          id="basic-menu"
          // anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        >
          <MenuItem onClick={handleClose}>
            <NavLinkCss to="/diary">Diary</NavLinkCss>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <NavLinkCss to="/calculator">Calculator</NavLinkCss>
          </MenuItem>
        </MenuCss>
      </MobileMenuBoxCss>
    </>
  );
};
