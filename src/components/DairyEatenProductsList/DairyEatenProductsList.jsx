// import { useEffect } from 'react';
import { store } from '../../redux/store';

export const DiaryEatenProductsList = props => {
  const {
    day: { date },
  } = store.getState();
  // console.log(store.getState());

  console.log(props);

  // useEffect(() => {
  //   return () => {};
  // });

  return (
    <>
      <div>{date}</div>
    </>
  );
};
