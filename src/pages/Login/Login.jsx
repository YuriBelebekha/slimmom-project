import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Login</title>
      </Helmet>

      <LoginForm />
    </HelmetProvider>
  );
};

export default Login;
