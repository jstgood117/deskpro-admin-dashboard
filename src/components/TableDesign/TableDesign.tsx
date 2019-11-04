import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import { ISortItem } from '../../resources/interfaces';
import { SortIcon } from '../Sort';

/** Table */
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

/** TableHead */
const TableHead = styled.thead`
  background: transparent;
`;

/** TableBody */
const TableBody = styled.tbody`
  background: ${props => props.theme.secondaryColour};
`;

/** TableRow */
const TableRow = styled.tr<{ isSelected?: boolean }>`
  border-top: 1px solid ${props => props.theme.greyLight};
  border-bottom: 1px solid ${props => props.theme.greyLight};
  ${props =>
    props.isSelected &&
    css`
      background: ${_props => _props.theme.hoverColour};
    `}
`;

/** TableCell */
type CellAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';
interface ITableHeadCellProps {
  textAlign: CellAlign;
  hover?: boolean;
}
const TableHeadCellTextStyled = styled.th(props => props.theme.p2);
const TableBodyCellTextStyled = styled.td(props => props.theme.p1);
const TableHeadCell = styled(TableHeadCellTextStyled)<ITableHeadCellProps>`
  padding: 0 16px;
  line-height: 26px;
  color: ${props => props.theme.greyDark};
  text-align: ${props => props.textAlign};
  position: relative;
  ${props =>
    props.hover &&
    css`
      cursor: pointer;
      border: solid 1px ${_props => _props.theme.greyLight};
      border-left-color: transparent;
      border-right-color: transparent;
      &:hover {
        background: ${props.theme.textHover};
        border-color: ${props.theme.greyLight};
        &:not(:first-child) {
          :before {
            position: absolute;
            top: 0;
            left: 0;
            content: '';
            width: 1px;
            height: 100%;
            background: ${props.theme.greyLight};
          }
        }
        &:first-child {
          border-left-color: ${props.theme.textHover};
        }
        &:last-child {
          border-right-color: ${props.theme.textHover};
        }
      }
    `}
`;
const TableBodyCell = styled(TableBodyCellTextStyled)<{ textAlign: CellAlign }>`
  padding: 0;
  text-align: ${props => props.textAlign};
  line-height: 44px;
  color: ${props => props.theme.staticColour};
  padding: 0 16px;
  position: relative;
  & img {
    vertical-align: middle;
  }
`;
const HeadCellContainer = styled.div`
  display: flex;
  align-items: center;
  .sort-icon {
    visibility: hidden;
  }
  &.sort-selected,
  &:hover {
    .sort-icon {
      visibility: visible;
    }
  }
`;
export interface ITableCellCommonProps {
  container?: 'head' | 'body';
  textAlign?: CellAlign;
  className?: string;
  style?: CSSProperties;
  onCellClick?: (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>
  ) => void;
}
export interface ITableCellSortProps {
  sortProps?: {
    sortItem?: ISortItem;
    sortSelected?: ISortItem;
    onSelectSort?: (item: ISortItem) => void;
  };
}
export type TableCellProps = ITableCellCommonProps & ITableCellSortProps;
const TableCell: React.SFC<TableCellProps> = ({
  container = 'body',
  textAlign = 'inherit',
  className,
  style,
  sortProps,
  onCellClick,
  ...props
}) => {
  const emptyStyle = isEmpty(props.children) ? { minWidth: 34 } : {};

  /*** Body Cell ***/
  if (container !== 'head') {
    return (
      <TableBodyCell
        textAlign={textAlign}
        className={className}
        style={{ ...emptyStyle, ...style }}
        onClick={event => onCellClick && onCellClick(event)}
      >
        {props.children}
      </TableBodyCell>
    );
  }

  /*** Head Cell ***/
  const { sortItem, sortSelected, onSelectSort } = sortProps || {};
  const hasSort = !!sortItem;
  const isSortSelected =
    hasSort && sortSelected && sortSelected.field === sortItem.field;

  const selectSort = (item: ISortItem) => {
    if (!onSelectSort || !item.sort) {
      return;
    }
    const _sortItem =
      sortSelected && sortSelected.field === item.field ? sortSelected : item;
    const sort = _sortItem.sort === 'asc' ? 'desc' : 'asc';

    onSelectSort({
      ...item,
      sort
    });
  };

  let children = null;
  if (hasSort) {
    const label = sortItem.label || props.children;
    children = (
      <HeadCellContainer className={isSortSelected ? 'sort-selected' : ''}>
        {label}
        {hasSort && sortItem.sort && (
          <SortIcon
            className={'sort-icon' + (isSortSelected ? '-selected' : '')}
            style={{ marginLeft: 10 }}
            sortType={isSortSelected && sortSelected.sort}
          />
        )}
      </HeadCellContainer>
    );
  } else {
    children = props.children;
  }

  return (
    <TableHeadCell
      textAlign={textAlign}
      className={className}
      style={{ ...emptyStyle, ...style }}
      onClick={event => {
        if(onCellClick) { onCellClick(event);}
        if(hasSort) { selectSort(sortItem); }
      }}
      hover={hasSort}
    >
      {children}
    </TableHeadCell>
  );
};

export { Table, TableHead, TableRow, TableCell, TableBody };