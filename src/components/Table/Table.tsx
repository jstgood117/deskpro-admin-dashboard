import React from 'react';
import styled from 'styled-components';
import { customSortMethod } from '../../utils/sort';
import { ITableColumn } from '../../resources/interfaces';
import { dpstyle } from '../Styled';
import Checkbox from '../Checkbox';
import * as Cell from './Cell';

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

export const StyledExportButton = styled(dpstyle.div)`
  padding-right: 24px;
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

export const getTable = (
  headerGroups: [],
  getTableBodyProps: () => void,
  page: [],
  prepareRow: (row: any) => void,
  checked: object,
  getTableProps: () => void,
  handleCheckboxChange: (
    event: React.SyntheticEvent<HTMLInputElement, Event>
  ) => void
) => {
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup: any, indexOuter: number) => (
          <tr key={indexOuter} {...headerGroup.getHeaderGroupProps()}>
            <th />
            {headerGroup.headers.map((column: any, indexInner: number) => (
              <th
                key={indexInner}
                {...column.getHeaderProps(column.getSortByToggleProps())}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map((row: any, indexOuter: number) => {
          prepareRow(row);
          return (
            <tr
              key={indexOuter}
              {...row.getRowProps()}
              className={
                checked.hasOwnProperty(row.original.id.toString())
                  ? 'row--selected'
                  : ''
              }
            >
              <td>
                <Checkbox
                  value={row.original.id}
                  checked={
                    checked.hasOwnProperty(row.original.id.toString())
                      ? true
                      : false
                  }
                  onChange={handleCheckboxChange}
                />
              </td>
              {row.cells.map((cell: any, indexInner: number) => (
                <td key={indexInner} {...cell.getCellProps()}>
                  {Cell.create(cell)}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
