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
          cursor: pointer;
          white-space: nowrap;
          padding: 4px 16px 4px 10px;
          font-weight: normal;
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
              &:hover {
                background: ${props => props.theme.hoverColour};
                svg {
                  path {
                    fill: ${props => props.theme.activeColour};
                  }
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

          &.th-action-buttons {
            min-width: 100px;
            width: 100px;
          }

          position: relative;
          .resizer {
            top: 0;
            right: 0;
            width: 6px;
            position: absolute;
            cursor: col-resize;
            background-color: #9fccf3;
            user-select: none;
            height: 100%;
            transform: translateX(50%);
            z-index: 1;
            opacity: 0;

            :hover,
            :focus,
            :active {
              opacity: 1;
            }
          }
        }
      }
    }
    & tbody {
      & .groupRow {
        border-bottom: solid 1px #b0bbc3;
        & .groupCol {
          background-image: none;
          padding: 4px 0 4px 10px;
          & .groupTitle {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            max-width: 310;
            cursor: pointer;
            & span:nth-child(1) {
              margin-right: auto;
              margin-left: 0;
              color: ${props => props.theme.activeColour};
              font-family: Rubik;
              font-weight: 500;
              font-size: 15px;
              line-height: 150%;
            }
          }
        }
      }
      & tr {
        height: 44px;
        &.row--selected {
          background-color: ${props => props.theme.hoverColour};
          td {
            .text {
              color: ${props => props.theme.activeColour} !important;
            }
          }
        }
        &.hasSubRows {
          background-image: linear-gradient(
            90deg,
            ${props => props.theme.greyLight} 1px,
            transparent 0px
          );
          background-repeat: no-repeat;
          background-position: 18px 22px;
          .checkBox {
            background-position: 30px 42px;
          }
          .firstColumn {
            background-position: 30px 42px;
          }
        }
        &.hasSubRows.non-checkboxes {
          background-position: 22px 22px;
        }
        &.subrow {
          background-image: linear-gradient(
              90deg,
              ${props => props.theme.greyLight} 1px,
              transparent 0px
            ),
            linear-gradient(
              ${props => props.theme.greyLight} 1px,
              transparent 0px
            );
          background-repeat: no-repeat;
          background-position: 18px 0, 18px 20px;
          background-size: auto, 22px;
          .checkBox {
            background-position: 30px 42px;
          }
          .firstColumn {
            background-position: 30px 42px;
          }
        }
        &.subrow.non-checkboxes {
          background-position: 22px 0, 22px 22px;
          background-size: auto, 22px;
        }
        &.isLastSubRow {
          background-image: linear-gradient(
              90deg,
              ${props => props.theme.greyLight} 1px,
              transparent 1px
            ),
            linear-gradient(
              ${props => props.theme.greyLight} 1px,
              transparent 0px
            );
          background-repeat: no-repeat;
          background-position: 18px 0, 18px 20px;
          background-size: 2px 20px, 22px;
        }
        &.isLastSubRow.non-checkboxes {
          background-position: 22px 0, 22px 22px;
          background-size: 2px 22px, 22px;
        }
        & td {
          background-image: linear-gradient(#eff0f0 1px, transparent 0);
          background-repeat: no-repeat;
          background-position: 0px 42px;
          padding: 4px 16px 4px 10px;
          text-align: left;
          color: ${props => props.theme.staticColour};
          vertical-align: middle;
          .multiple-ticket {
            max-width: 100px;
            display: flex;
            margin-right: 10px;
            .image {
              min-width: 25px;
              img {
                margin-right: 0 !important;
              }
            }
          }
          &.checkBox {
            padding-right: 6px;
            padding-left: 10px;
            width: 16px;
          }
          & * {
            flex-wrap: nowrap;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          & img {
            width: 25px;
            height: 25px;
            border-radius: 12px;
            vertical-align: middle;
            margin-right: 15px;
          }
        }
        .action-buttons {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          visibility: hidden;
        }
        &:hover .action-buttons {
          visibility: visible;
        }
      }
    }
    .lastColumn {
      width:100%;
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
  padding-left: 5px;
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
  .select__control {
    min-width: auto;
    .select__single-value {
      margin-right: 4px;
    }
  }
`;
export const StyledHeaderPagination = styled(dpstyle.div)`
  .select__control {
    min-width: auto;
    .select__single-value {
      margin-right: 4px;
    }
  }
`;

export const StyledTh = styled.div<{ alignRight: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.alignRight ? 'flex-end' : 'flex-right')};
  .sort-icon {
    display: flex;
    padding-left: 10px;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const GroupCaret = styled.span`
  margin-left: 10px;
  & path {
    fill: #4c4f50;
  }
`;
