import { Container, Box } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const AppBarBoxCss = styled(Box)`
  ${theme.breakpoints.down('desktop')} {
    border-bottom: 2px solid ${theme.palette.primary.grey};
  };
`;

export const AppBarContainerCss = styled(Container)`  
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