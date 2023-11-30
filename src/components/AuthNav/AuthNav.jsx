import { NavLinkCss } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <>
      <NavLinkCss to="/login">Log in</NavLinkCss>
      <NavLinkCss to="/registration">Registration</NavLinkCss>
    </>
  );
};
