import styled from '@emotion/styled';
import { Container } from '@mui/material';
import { theme } from '../../constants/theme';

export const Wrapper = styled.div`
  position: relative;

  ${theme.breakpoints.up('tablet')} {
    min-height: 1024px;
  };

  ${theme.breakpoints.up('desktop')} {
    min-height: 850px;
  };  
`;

export const ContainerCss = styled(Container)`  
  ${theme.breakpoints.up('mobile')} {
    padding: 32px 20px 100px;
  };

  ${theme.breakpoints.up('tablet')} {
    padding: 100px 32px 100px;
  };

  ${theme.breakpoints.up('desktop')} {
    padding: 150px 16px 110px;
  };
`;