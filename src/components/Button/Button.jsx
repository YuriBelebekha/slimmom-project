import { ButtonCss } from './Button.styled';

export const Button = ({ name }) => {  
  return (
    <ButtonCss type="button" variant="outlined" >
      {name}
    </ButtonCss>
  )
};