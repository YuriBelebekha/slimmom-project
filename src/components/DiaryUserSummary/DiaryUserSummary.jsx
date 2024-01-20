import {
  WrapperCss,
  TitleCss,
  ListCss,
  ListItemCss,
  ListItemTextCss,
} from './DiaryUserSummary.styled';
import { getUserInfo } from '../../redux/userInfo/userInfoOperations';
import { useDispatch } from 'react-redux';
import { store } from '../../redux/store';

export const DiaryUserSummary = () => {
  const dispatch = useDispatch();
  dispatch(getUserInfo()).finally(() => {});

  const {
    userInfo: { userData, days },
  } = store.getState();
  console.log(userData);
  console.log(days);

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
