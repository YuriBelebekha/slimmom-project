import { ButtonSubmitCss } from './ButtonSubmit.styled';

export const ButtonSubmit = ({ name }) => {  
  return (
    <ButtonSubmitCss type="submit" variant="contained" >
      {name}
    </ButtonSubmitCss>
  )
};