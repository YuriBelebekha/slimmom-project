import { Virtuoso } from 'react-virtuoso';
import { Typography } from '@mui/material';
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
  font-family: VerdanaRegular;
  font-size: 14px;
  line-height: 34px;
  color: ${theme.palette.primary.darkGrey};

  &&::-webkit-scrollbar-track {
    background-color: #f0f1f3;
  }
`;
