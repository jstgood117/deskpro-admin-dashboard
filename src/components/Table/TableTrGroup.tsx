import React, { FC, SyntheticEvent } from 'react';
import styled from 'styled-components';

import Checkbox from '../Checkbox';
import Icon from '../Icon';
import TableTr from './TableTr';

export type Props = {
  row: any;
  checked: any;
  hasActions: boolean;
  prepareRow: any;
  handleCheckboxChange?: (
    e: SyntheticEvent<HTMLInputElement>,
    rows: any
  ) => void;
};

const GroupCaret = styled.span`
  margin-left: 10px;
  & path {
    fill: #4c4f50;
  }
`;

const TableTrGroup: FC<Props> = ({
  row,
  checked,
  hasActions,
  prepareRow,
  handleCheckboxChange
}) => {
  return (
    <React.Fragment>
      <tr
        {...row.getRowProps()}
        style={{
          borderBottom: '1px solid #b0bbc3'
        }}
      >
        {hasActions && (
          <td className='checkBox' style={{ backgroundImage: 'none' }}>
            <Checkbox
              value={row.id}
              checked={checked.hasOwnProperty(row.id)}
              onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                handleCheckboxChange(e, row.subRows);
              }}
            />
          </td>
        )}
        <td
          colSpan={1}
          style={{
            backgroundImage: 'none',
            padding: '4px 0px 4px 10px'
          }}
        >
          <div
            {...row.getExpandedToggleProps()}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: 310,
              cursor: 'pointer'
            }}
          >
            <span
              style={{
                marginRight: 'auto',
                marginLeft: 0, // hasActions ? 16 : 0,
                color: '#1C3E55',
                fontFamily: 'Rubik',
                fontWeight: 500,
                fontSize: 15,
                lineHeight: '150%'
              }}
            >
              {row.groupByVal} ({row.subRows.length})
            </span>
            <GroupCaret>
              {row.isExpanded ? <Icon name='up' /> : <Icon name='down' />}
            </GroupCaret>
          </div>
        </td>
        <td colSpan={row.cells.length} style={{ backgroundImage: 'none' }} />
      </tr>
      {row.isExpanded &&
        Array.from(
          row.subRows.map((subRow: any, innerIndex: number) => {
            prepareRow(subRow);
            return (
              <TableTr
                key={innerIndex}
                row={subRow}
                checked={checked}
                hasActions={hasActions}
                handleCheckboxChange={handleCheckboxChange}
              />
            );
          })
        )}
    </React.Fragment>
  );
};

export default TableTrGroup;
