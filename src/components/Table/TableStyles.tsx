import styled from 'styled-components';
import { dpstyle } from '../Styled';

export const TableStyled = styled(dpstyle.div)`
  & table {
    width: 100%;
    border-collapse: collapse;
    & thead {
      & tr {
        height: 28px;
        border-top: 1px solid ${props => props.theme.greyLight};
        border-bottom: 1px solid ${props => props.theme.greyLight};
        & th {
          white-space: nowrap;
          padding: 0 16px 0 0;
          font-weight: 600;
          font-size: 14px;
          line-height: 150%;
          color: ${props => props.theme.greyDark};
          text-align: left;
        }
      }
    }
    & tbody {
      & tr {
        &.row--selected {
          background-color: ${props => props.theme.greyLight};
          td {
            .text {
              color: ${props => props.theme.activeColour} !important;
            }
          }
        }
        border-bottom: 1px solid ${props => props.theme.greyLighter};
        & td {
          padding: 0 16px 0 0;
          text-align: left;
          line-height: 44px;
          color: ${props => props.theme.staticColour};
          > * {
            white-space: nowrap;
            flex-wrap: nowrap;
          }
          & img {
            width: 25px;
            height: 25px;
            border-radius: 12px;
            vertical-align: middle;
            margin-right: 15px;
          }
        }
      }
    }
  }
`;

export const TableHeader = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  padding-top: 9px;
  padding-bottom: 11px;
`;

export const AllCheckStyle = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  flex: 1;
  .selected-text {
    padding-left: 15px;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 150%;
    color: ${props => props.theme.activeColour};
  }
`;

export const StyledPagination = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 24px;
  padding-bottom: 10px;
`;