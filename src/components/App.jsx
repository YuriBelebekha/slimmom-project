import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const RegistrationPage = lazy(() =>
  import('../pages/Registration/Registration')
);
const DiaryPage = lazy(() => import('../pages/Diary/Diary'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/diary" component={<LoginPage />} />
          }
        />

        <Route
          path="/registration"
          element={
            <RestrictedRoute
              redirectTo="/diary"
              component={<RegistrationPage />}
            />
          }
        />

        <Route
          path="/diary"
          element={
            <PrivateRoute redirectTo="/login" component={<DiaryPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
