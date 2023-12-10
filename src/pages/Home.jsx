import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CalculateForm } from '../components/CalculateForm';

const Home = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Home</title>
      </Helmet>

      <CalculateForm />
    </HelmetProvider>
  );
};

export default Home;
