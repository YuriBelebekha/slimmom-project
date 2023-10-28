import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from '../AppBar';
import { BackgroundImages } from '../BackgroundImages';
import { Wrapper, ContainerCss } from './Layout.styled';


export const Layout = () => {
  return (
    <Wrapper>
      <BackgroundImages />

      <AppBar />

      <ContainerCss component="main">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>

        <ToastContainer />
      </ContainerCss>
    </Wrapper>
  );
};