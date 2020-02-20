import React, { FC, SyntheticEvent } from 'react';
import { useRouteMatch } from 'react-router-dom';
import _ from 'lodash';

import Checkbox from '../Checkbox';
import { generateComponentProps, convertStringToObject } from '../TableData/apiToComponentAdapter';
import TableData from '../TableData';
import { KeyValue } from '../../types';

export type Props = {
  indexOuter: number;
  page: any;
  row: any;
  checked: any;
  hasActions: boolean;
  handleCheckboxChange?: (
    e: SyntheticEvent<HTMLInputElement>,
    rows: any
  ) => void;
};

const TableTr: FC<Props> = ({
  page,
  indexOuter,
  row,
  checked,
  hasActions,
  handleCheckboxChange
}) => {
  const isChecked = checked.hasOwnProperty(row.original.id);
  const match = useRouteMatch();

  return (
    <tr
      {...row.getRowProps()}
      className={
        (row.depth === 1
          ? (page[indexOuter + 1] && page[indexOuter + 1].depth === 0) ||
            indexOuter === page.length - 1
            ? 'isLastSubRow '
            : 'subrow '
          : row.subRows.length > 0 && row.isExpanded
          ? 'hasSubRows '
          : ' ') +
        (checked.hasOwnProperty((row.original as KeyValue).id.toString())
          ? 'row--selected '
          : ' ') +
        (row.depth === 1 || row.subRows.length > 0
          ? hasActions
            ? 'has-checkboxes'
            : 'non-checkboxes'
          : '')
      }
    >
      {hasActions && (
        <td
          style={{
            paddingLeft: `${row.depth === 1 && row.depth * 30}px`
          }}
          className='checkBox'
        >
          <Checkbox
            value={row.original.id}
            checked={isChecked}
            onChange={(event: SyntheticEvent<HTMLInputElement>) => {
              handleCheckboxChange(event, row.original.subRows);
            }}
          />
        </td>
      )}
      {_.sortBy(row.cells, 'column.index').map(
        (cell: any, indexInner: number) => {
          const isIdColumn = cell.column.type.__typename === 'TableColumnId';
          const isAgentPage = match.url === '/agents';
          const isTeamAgentsPage = cell.column.id === 'admin_common.col.teams' && isAgentPage;
          const isDepartmentsAgentsPage = cell.column.id === 'admin_common.col.departments' && isAgentPage;
          const isGroupAgentsPage = cell.column.id === 'admin_common.col.groups' && isAgentPage;
          const dataPath = isTeamAgentsPage ? 'agent_teams' : (isGroupAgentsPage ? 'agent_groups' : 'departments');
          const __typename = isGroupAgentsPage ? 'TableColumnAgentGroupList' : 'TableColumnTicketDepartmentList';

          return (
            <td
              className={
                !hasActions && indexInner === 0
                  ? `td-${indexInner} firstColumn`
                  : `td-${indexInner}`
              }
              {...cell.getCellProps()}
              {...cell.row.getExpandedToggleProps({
                onClick: () => {},
                style: {
                  textAlign: isIdColumn && 'right',
                  verticalAlign: isIdColumn && 'bottom',
                  paddingBottom: isIdColumn && '5px',
                  paddingLeft: `${indexInner === 0 &&
                    row.depth === 1 &&
                    row.depth * 30}px`,
                  cursor: 'default'
                }
              })}
              key={indexInner}
            >
              {(isTeamAgentsPage || isGroupAgentsPage || isDepartmentsAgentsPage) ? (
                <TableData
                  {...generateComponentProps({
                    ...cell,
                    column: {
                      ...cell.column,
                      type: {
                        __typename,
                        valuesArray: {
                          dataPath
                        }
                      }
                    },
                    row: {
                      ...cell.row,
                      original: {
                        ...cell.row.original,
                        [dataPath]: _.isEmpty(cell.value[0]) ? cell.value : convertStringToObject(cell.value[0])
                      }
                    },
                    value: _.isEmpty(cell.value[0]) ? cell.value : convertStringToObject(cell.value[0])
                  })}
                />
              ) : (
                <TableData {...generateComponentProps(cell)} />
              )}
            </td>
          );
        }
      )}
      <td className='td-action-buttons'>
        <span className='action-buttons'>
          {!checked.hasOwnProperty(
            (row.original as KeyValue).id.toString()
          ) && (
            <TableData
              type='action_buttons'
              props={{
                onPencilClick: () => {},
                onDuplicateClick: () => {},
                onTrashClick: () => {}
              }}
            />
          )}
        </span>
      </td>
    </tr>
  );
};

export default TableTr;
