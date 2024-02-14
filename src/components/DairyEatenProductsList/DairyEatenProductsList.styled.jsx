import { Virtuoso } from 'react-virtuoso';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const WrapperCss = styled(Box)`
  min-width: 260px;
  z-index: 2;

  ${theme.breakpoints.up('tablet')} {
    width: 380px;
  }

  ${theme.breakpoints.up('desktop')} {
    margin-left: 0;
  }
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
