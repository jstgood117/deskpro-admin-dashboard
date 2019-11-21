import styled from 'styled-components';
import { customSortMethod } from '../../utils/sort';
import { ITableColumn } from '../../resources/interfaces';
import { dpstyle } from '../Styled';

export const TableStyled = styled(dpstyle.div)`
  & table {
    width: 100%;
    border-collapse: collapse;

    & thead {
      & tr {
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

const generateSortType = (sortType: string) => {
  if (!sortType) {
    return 'alphanumeric';
  }

  switch (sortType) {
    case 'ALPHANUMERIC':
      return 'alphanumeric';
    default:
      return customSortMethod;
  }
};

export type TableProps = {
  data: any[];
  columns: any[];
  fetchData?: any;
  loading?: boolean;
  pageCount?: number;
};

export const transformColumnData = (columns: ITableColumn[], intl: any) => {
  const newCols = columns.map((column: ITableColumn) => {
    return {
      id: column.title,
      Header: intl.formatMessage({ id: `admin_common.${column.title}` }),
      accessor: column.data[0].path,
      type: column.field,
      sortType: generateSortType(column.sort)
    };
  });

  return newCols;
};
