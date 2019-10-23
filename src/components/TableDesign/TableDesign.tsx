import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import isEmpty from 'lodash/isEmpty';

/** Table */
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

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
      background: ${props => props.theme.hoverColour};
    `}
`;

/** TableCell */
const TablHeadCellTextStyled = styled.th(props => props.theme.p2);
const TablBodyCellTextStyled = styled.td(props => props.theme.p1);
const TablHeadCell = styled(TablHeadCellTextStyled)`
  padding: 0;
  line-height: 26px;
  color: ${props => props.theme.greyDark};
  text-align: left;
`;
const TablBodyCell = styled(TablBodyCellTextStyled)`
  padding: 0;
  text-align: left;
  line-height: 44px;
  color: ${props => props.theme.staticColour};
  & img {
    vertical-align: middle;
    margin-right: 15px;
  }
`;

const TableCell: React.SFC<{
  container?: 'head' | 'body';
  className?: string;
  style?: CSSProperties;
  onCellClick?: (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>
  ) => void;
}> = ({ container = 'body', className, style, onCellClick, ...props }) => {
  const Component = container === 'head' ? TablHeadCell : TablBodyCell;

  const emptyStyle = isEmpty(props.children) ? { minWidth: 34 } : {};
  return (
    <Component
      className={className}
      style={{ ...emptyStyle, ...style }}
      onClick={onCellClick}
    >
      {props.children}
    </Component>
  );
};

export { Table, TableHead, TableRow, TableCell, TableBody };