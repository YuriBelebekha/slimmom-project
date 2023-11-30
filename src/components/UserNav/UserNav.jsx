import { NavLinkCss } from './UserNav.styled';

export const UserNav = () => {
  return (
    <>
      <NavLinkCss to="/diary">Diary</NavLinkCss>
      <NavLinkCss to="/calculator">Calculator</NavLinkCss>
    </>
  );
};
