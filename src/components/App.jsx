import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const HomePage = lazy(() => import('../pages/Home'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const RegistrationPage = lazy(() =>
  import('../pages/Registration/Registration')
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />

        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="" component={<LoginPage />} />}
        />

        <Route
          path="/registration"
          element={
            <RestrictedRoute redirectTo="" component={<RegistrationPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
