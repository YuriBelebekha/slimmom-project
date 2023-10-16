import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from '../AppBar';
import { Wrapper, ContainerCss } from './Layout.styled';


export const Layout = () => {
  return (
    <Wrapper>
      <AppBar />

      <ContainerCss>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>

        <ToastContainer />
      </ContainerCss>
    </Wrapper>
  );
};