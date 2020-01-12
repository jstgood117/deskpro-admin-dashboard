import styled from 'styled-components';
import { dpstyle } from '../Styled';

export const TableStyled = styled(dpstyle.div)`
  > .overflow {
    overflow-y: auto;
    overflow-x: auto;

    & table {
      width: 100%;
      border-collapse: collapse;
      & thead {
        & tr {
          height: 28px;
          border-top: 1px solid ${props => props.theme.greyLight};
          border-bottom: 1px solid ${props => props.theme.greyLight};
          & th {
            :first-child {
              width: 30px;
            }
            cursor: pointer;
            white-space: nowrap;
            padding: 4px 16px 4px 10px;
            font-weight: 600;
            font-size: 14px;
            line-height: 150%;
            color: ${props => props.theme.greyDark};
            text-align: left;
            &:hover {
              background: rgba(232, 235, 238, 0.5);
              .filter-icon {
                margin-left: 8px;
                display: flex;
                background: ${props => props.theme.white};
                border-radius: 3px;
                width: 19px;
                height: 19px;
                svg {
                  margin: auto;
                  path {
                    fill: ${props => props.theme.static2Colour};
                  }
                }
              }
              .sort-icon {
                svg {
                  margin: auto;
                  .active {
                    fill: ${props => props.theme.activeColour};
                  }
                }
              }
            }
            .filter-icon {
              display: none;
            }
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
            :first-child {
              width: 30px;
            }
            padding: 4px 16px 4px 10px;
            text-align: left;
            line-height: 44px;
            color: ${props => props.theme.staticColour};
            vertical-align: middle;
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
    text-align: center;
  }
`;

export const StyledPagination = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 24px;
  padding-bottom: 10px;
`;

export const StyledTh = styled.div<{ alignRight: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.alignRight ? 'flex-end' : 'flex-right'};
  .sort-icon {
    display: flex;
    padding-left: 10px;
  }
`;

export const CardGrid = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr 1fr 1fr;
  grid-gap:20px;
`;