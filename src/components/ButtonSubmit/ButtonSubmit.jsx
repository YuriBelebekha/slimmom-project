import { ButtonCss } from './ButtonSubmit.styled';

export const ButtonSubmit = ({ name }) => {  
  return (
    <ButtonCss type="submit" variant="contained" >
      {name}
    </ButtonCss>
  )
};