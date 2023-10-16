import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { theme } from '../../constants/theme';

export const Wrapper = styled.div`
  height: 100vh;
`;

// color: ${({ theme }) => theme.palette.primary.accent};

export const ContainerCss = styled(Container)`
  ${theme.breakpoints.up('mobile')} {
    padding-left: 20px;
    padding-right: 20px;
  };

  ${theme.breakpoints.up('tablet')} {
    padding-left: 32px;
    padding-right: 32px;
  };

  ${theme.breakpoints.up('desktop')} {
    padding-left: 16px;
    padding-right: 16px;
  };
`;