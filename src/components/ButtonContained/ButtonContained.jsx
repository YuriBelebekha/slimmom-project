import { ButtonContainedCss } from './ButtonContained.styled';

export const ButtonContained = ({ name }) => {
  return (
    <ButtonContainedCss type="button" variant="contained" size="small">
      {name}
    </ButtonContainedCss>
  );
};
