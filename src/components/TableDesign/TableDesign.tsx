import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import isEmpty from 'lodash/isEmpty';

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
      background: ${props => props.theme.hoverColour};
    `}
`;

/** TableCell */
type CellAlign = 'inherit' | 'left' | 'center' | 'right' | 'justify';
const TablHeadCellTextStyled = styled.th(props => props.theme.p2);
const TablBodyCellTextStyled = styled.td(props => props.theme.p1);
const TablHeadCell = styled(TablHeadCellTextStyled)<{ textAlign: CellAlign }>`
  padding: 0 16px;
  line-height: 26px;
  color: ${props => props.theme.greyDark};
  text-align: ${props => props.textAlign};
  position: relative;
`;
const TablBodyCell = styled(TablBodyCellTextStyled)<{ textAlign: CellAlign }>`
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
const TableCell: React.SFC<{
  container?: 'head' | 'body';
  textAlign?: CellAlign;
  className?: string;
  style?: CSSProperties;
  onCellClick?: (
    event: React.MouseEvent<HTMLTableCellElement, MouseEvent>
  ) => void;
}> = ({
  container = 'body',
  textAlign = 'inherit',
  className,
  style,
  onCellClick,
  ...props
}) => {
  const Component = container === 'head' ? TablHeadCell : TablBodyCell;

  const emptyStyle = isEmpty(props.children) ? { minWidth: 34 } : {};
  return (
    <Component
      textAlign={textAlign}
      className={className}
      style={{ ...emptyStyle, ...style }}
      onClick={onCellClick}
    >
      {props.children}
    </Component>
  );
};

export { Table, TableHead, TableRow, TableCell, TableBody };