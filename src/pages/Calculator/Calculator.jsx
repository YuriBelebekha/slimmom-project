import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CalculateFormUser } from 'components/CalculateFormUser';
import { DiaryUserSummary } from 'components/DiaryUserSummary';

const Calculator = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>SlimMom | Calculator</title>
      </Helmet>

      <CalculateFormUser />

      <DiaryUserSummary />
    </HelmetProvider>
  );
};

export default Calculator;
