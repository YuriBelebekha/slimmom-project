import { Virtuoso } from 'react-virtuoso';
import { Box, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { theme } from '../../constants/theme';

export const WrapperCss = styled(Box)`
  min-width: 280px;
  height: 200px;
  z-index: 2;

  ${theme.breakpoints.up('tablet')} {
    width: 610px;
    height: 245px;
  }

  ${theme.breakpoints.up('desktop')} {
    width: 625px;
    height: 315px;
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
  color: ${theme.palette.primary.main};

  ${theme.breakpoints.up('tablet')} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const ItemTitleBoxCss = styled(Box)`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 20px;
  padding-bottom: 8px;

  border-bottom: 1px solid ${theme.palette.primary.grey};
`;

export const ItemNutritionFactsBoxCss = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  text-align: right;

  &:nth-of-type(1) {
    border-bottom: 1px solid ${theme.palette.primary.grey};
  }
`;

export const ItemNutritionFactsTextCss = styled(Box)`
  border-bottom: 1px solid ${theme.palette.primary.grey};
  padding-bottom: 8px;

  &:nth-of-type(1) {
    width: 50px;
    margin-right: 10px;

    ${theme.breakpoints.up('tablet')} {
      width: 106px;
      margin-right: 45px;
    }

    ${theme.breakpoints.up('desktop')} {
      margin-right: 30px;
    }
  }

  &:nth-of-type(2) {
    width: 70px;
    margin-right: 10px;

    ${theme.breakpoints.up('tablet')} {
      width: 106px;
      margin-right: 30px;
    }
  }
`;

export const IconButtonCss = styled(IconButton)`
  margin-right: 10px;

  ${theme.breakpoints.up('tablet')} {
    margin-right: 30px;
  }
`;
