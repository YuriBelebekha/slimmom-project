import { Virtuoso } from 'react-virtuoso';
import { Box, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const WrapperCss = styled(Box)`
  width: 280px;
  z-index: 2;

  ${theme.breakpoints.up('tablet')} {
    width: 380px;
  }

  ${theme.breakpoints.up('desktop')} {
    margin-left: 0;
  }
`;

export const TitleCss = styled(Typography)`
  margin-bottom: 20px;
  padding-top: 20px;

  font-family: VerdanaBold;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${theme.palette.primary.main};
  text-align: left;

  border-top: 1px solid ${theme.palette.primary.grey};
`;

export const VirtuosoCss = styled(Virtuoso)`
  width: 100%;
  font-family: VerdanaRegular;
  font-size: 14px;
  line-height: 34px;
  color: ${theme.palette.primary.darkGrey};
`;

export const VirtuosoBoxCss = styled(Box)`
  &&::-webkit-scrollbar {
    width: 6px;
  }

  &&::-webkit-scrollbar-track {
    background: ${theme.palette.primary.lightGrey};
  }

  &&::-webkit-scrollbar-thumb {
    height: 40px;
    background: ${theme.palette.secondary.accent};
  }
`;

export const BtnBoxCss = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const ButtonSubmitCss = styled(Button)`
  min-width: 180px;
  padding: 13px 22px;
  margin-top: 40px;

  font-family: verdanaBold;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: ${theme.palette.primary.white};

  background-color: ${({ theme }) => theme.palette.primary.accent};
  border-radius: 30px;
  box-shadow: 0px 4px 10px 0px ${theme.palette.primary.accent};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.primary.accent};
    box-shadow: 0px 2px 5px 0px ${theme.palette.primary.accent};
  }
`;
