import { Button } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const ButtonCss = styled(Button)`
  min-width: 180px;
  padding: 13px 22px;
  margin-top: 20px;

  font-family: verdanaBold;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: ${theme.palette.primary.accent};

  background-color: ${theme.palette.primary.white};

  border: 2px solid ${theme.palette.primary.accent};
  border-radius: 30px;

  transition: background-color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut},
                         color ${theme.transitions.duration.standard}ms ${theme.transitions.easing.easeOut};

  &:hover{
    background-color: ${theme.palette.primary.accent};
    border: 2px solid ${theme.palette.primary.accent};
    color: ${theme.palette.primary.white};
  };

  ${theme.breakpoints.up('tablet')} {
    margin-top: 0;
    margin-left: 32px;
  };
`;