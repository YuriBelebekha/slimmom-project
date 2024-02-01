// import { useEffect } from 'react';
import { store } from '../../redux/store';

export const DiaryEatenProductsList = () => {
  const {
    day: { date },
  } = store.getState();
  console.log(store.getState());

  // useEffect(() => {
  //   return () => {};
  // });

  return (
    <>
      <div>{date}</div>
    </>
  );
};
