import {
  WrapperCss,
  TitleCss,
  ListCss,
  ListItemCss,
  ListItemTextCss,
} from './DiaryUserSummary.styled';
import { useDailyRate, useAuth } from 'hooks';

export const DiaryUserSummary = () => {
  const { dailyRate } = useDailyRate();
  console.log(dailyRate);

  const data = useAuth();
  console.log(data);

  return (
    <WrapperCss>
      <TitleCss component="h3">Summary for 13.08.2023</TitleCss>

      <ListCss>
        <ListItemCss>
          <ListItemTextCss primary="Left" sx={{ width: '60%' }} />
          <ListItemTextCss
            primary="000"
            sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
          />
          <ListItemTextCss primary="kcal" sx={{ width: '12%' }} />
        </ListItemCss>
        <ListItemCss>
          <ListItemTextCss primary="Consumed" sx={{ width: '60%' }} />
          <ListItemTextCss
            primary="000"
            sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
          />
          <ListItemTextCss primary="kcal" sx={{ width: '12%' }} />
        </ListItemCss>
        <ListItemCss>
          <ListItemTextCss primary="Daily rate" sx={{ width: '60%' }} />
          <ListItemTextCss
            primary="000"
            sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
          />
          <ListItemTextCss primary="kcal" sx={{ width: '12%' }} />
        </ListItemCss>
        <ListItemCss>
          <ListItemTextCss primary="n% of normal" sx={{ width: '60%' }} />
          <ListItemTextCss
            primary="000"
            sx={{ width: '28%', paddingRight: '7px', textAlign: 'right' }}
          />
          <ListItemTextCss primary="%" sx={{ width: '12%' }} />
        </ListItemCss>
      </ListCss>
    </WrapperCss>
  );
};
