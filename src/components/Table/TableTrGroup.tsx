import React, { FC, SyntheticEvent } from 'react';

import Checkbox from '../Checkbox';
import Icon from '../Icon';
import { GroupCaret } from './TableStyles';
import { ColumnMeta } from './types';
import { getValueFromColumnType } from '../../utils/getValueFromColumnType';

export type Props = {
  indexOuter: number;
  page: any;
  row: any;
  checked: any;
  hasActions: boolean;
  prepareRow: any;
  groupColumn?: ColumnMeta;
  handleCheckboxChange?: (
    e: SyntheticEvent<HTMLInputElement>,
    rows: any
  ) => void;
};

const TableTrGroup: FC<Props> = ({
  row,
  checked,
  hasActions,
  handleCheckboxChange,
  groupColumn
}) => {
  return (
    <React.Fragment>
      <tr {...row.getRowProps()} className='groupRow'>
        {hasActions && (
          <td className='checkBox' style={{ backgroundImage: 'none' }}>
            <Checkbox
              value={row.id}
              checked={checked.hasOwnProperty(row.id)}
              onChange={(e: SyntheticEvent<HTMLInputElement>) => {
                handleCheckboxChange(e, row.subRows);
              }}
              indeterminate={(checked[row.id] === 'indeterminate')}
            />
          </td>
        )}
        <td colSpan={1} className='groupCol'>
          <div {...row.getExpandedToggleProps()} className='groupTitle'>
            <span>
              {groupColumn && getValueFromColumnType(groupColumn.columnProps, row.subRows[0].original)} ({row.subRows.length})
            </span>
            <GroupCaret>
              {row.isExpanded ? <Icon name='up' /> : <Icon name='down' />}
            </GroupCaret>
          </div>
        </td>
        <td colSpan={row.cells.length} style={{ backgroundImage: 'none' }} />
      </tr>
    </React.Fragment>
  );
};

export default TableTrGroup;
