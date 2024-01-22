import {
  WrapperCss,
  TitleCss,
  ListCss,
  ListItemCss,
  ListItemTextCss,
} from './DiaryUserSummary.styled';
import { store } from '../../redux/store';
// import { selectedDate } from '../DiaryUserCalendar/DiaryUserCalendar';

export const DiaryUserSummary = () => {
  const {
    userInfo: { userData, days },
  } = store.getState();
  console.log(userData);
  console.log(days);
  // console.log(days[0].daySummary.kcalLeft);

  // const selectedDate = '31.12.2020';

  return (
    <WrapperCss>
      <TitleCss component="h3">Summary for {}</TitleCss>

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
