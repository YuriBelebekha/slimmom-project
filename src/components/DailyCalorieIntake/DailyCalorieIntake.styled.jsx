import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { theme } from '../../constants/theme';

export const TitleCss = styled(Typography)`
  text-align: center;
  margin-bottom: 42px;
  text-align: left;

  font-family: VerdanaBold;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: ${theme.palette.primary.main};

  ${theme.breakpoints.up('tablet')} {
    margin-bottom: 60px;

    font-size: 34px;
    line-height: 48px;
    text-align: left;
  }
`;

export const KcalValueTextCss = styled(Typography)`
  margin-bottom: 32px;

  font-family: VerdanaBold;
  font-weight: 700;
  font-size: 48px;
  line-height: 68px;
  letter-spacing: 0.04em;
  color: ${theme.palette.secondary.accent};
  text-align: center;

  & span {
    font-size: 16px;
    line-height: 19px;
  }
`;
