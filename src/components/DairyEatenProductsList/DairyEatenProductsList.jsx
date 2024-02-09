export const DiaryEatenProductsList = props => {
  console.log(props.day);

  return (
    <>
      <div>{props.day.date}</div>
    </>
  );
};
