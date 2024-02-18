import { Virtuoso } from 'react-virtuoso';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const WrapperCss = styled(Box)`
  min-width: 280px;
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

export const ItemBoxCss = styled(Box)`
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  font-family: VerdanaRegular;
  font-size: 12px;
  line-height: 18px;
`;

export const ItemTitleBoxCss = styled(Box)`
  width: 320px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 10px;

  border-bottom: 1px solid ${theme.palette.primary.grey};
`;

export const ItemNutritionFactsBoxCss = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 180px;

  text-align: right;

  &:nth-of-type(1) {
    border-bottom: 1px solid ${theme.palette.primary.grey};
  }
`;

export const ItemNutritionFactsTextCss = styled(Box)`
  border-bottom: 1px solid ${theme.palette.primary.grey};

  &:nth-of-type(1) {
    width: 50px;
    margin-right: 10px;
  }

  &:nth-of-type(2) {
    width: 70px;
    margin-right: 10px;
  }
`;
