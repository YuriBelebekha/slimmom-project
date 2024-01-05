import { ButtonContainedCss } from './ButtonContained.styled';

export const ButtonContained = ({ name }) => {
  return (
    <ButtonContainedCss type="button" variant="contained">
      {name}
    </ButtonContainedCss>
  );
};
