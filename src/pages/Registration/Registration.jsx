import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';

const Registration = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Registration</title>
      </Helmet>

      <RegistrationForm />
    </HelmetProvider>
  )
};

export default Registration;