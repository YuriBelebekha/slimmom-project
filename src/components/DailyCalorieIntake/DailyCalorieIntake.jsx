import { useDailyRate } from 'hooks';
import { TitleCss, KcalValueTextCss } from './DailyCalorieIntake.styled';

export const DailyCalorieIntake = () => {
  const {
    dailyRate: { dailyRate },
  } = useDailyRate();

  return (
    <>
      <TitleCss component="h2">
        Your recommended daily calorie intake is
      </TitleCss>
      <KcalValueTextCss>
        {Math.round(dailyRate)} <span>kcal</span>
      </KcalValueTextCss>
    </>
  );
};
