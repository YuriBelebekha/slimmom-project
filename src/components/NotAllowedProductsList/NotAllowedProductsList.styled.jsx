import { Virtuoso } from 'react-virtuoso';
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

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

  &&::-webkit-scrollbar-thumb:hover {
    background: ${theme.palette.primary.accent};
  }
`;
