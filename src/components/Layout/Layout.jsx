import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from '../AppBar';

import { Wrapper } from './Layout.styled';
import { theme } from '../../constants/theme';

// MUI STYLES
import { Container } from '@mui/material';

export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />

      <Container sx={{
        [theme.breakpoints.up('mobile')]: {
          paddingLeft: '20px',
          paddingRight: '20px',
        },
        [theme.breakpoints.up('tablet')]: {
          paddingLeft: '32px',
          paddingRight: '32px',
        },
        [theme.breakpoints.up('desktop')]: {
          paddingLeft: '16px',
          paddingRight: '16px',
        },
      }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>

        <ToastContainer />
      </Container>
    </Wrapper>
  );
};