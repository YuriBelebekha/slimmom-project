import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CalculateFormUser } from 'components/CalculateFormUser';

const Calculator = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Calculator</title>
      </Helmet>

      <CalculateFormUser />
    </HelmetProvider>
  );
};

export default Calculator;
