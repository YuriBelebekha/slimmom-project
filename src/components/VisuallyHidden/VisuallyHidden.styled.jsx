import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const VisuallyHiddenH1 = styled(Typography)`  
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;