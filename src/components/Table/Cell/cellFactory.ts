import React from 'react';
import TableData from '../../TableData';
import { getColorByIndex } from '../../../utils/getRandomColor';
import { ITableColor } from '../../../resources/interfaces';


const getColor = (index: number): ITableColor => {
  return getColorByIndex(index);
};

enum CellEnum {
  NAME_AVATAR = 'NAME_AVATAR',
  TEXT = 'TEXT',
  TEXT_COMMA_SEP = 'TEXT_COMMA_SEP',
  BOOLEAN_YESNO = 'BOOLEAN_YESNO',
  TIME_AGO = 'TIME_AGO',
  AGENT_TEAM_LIST = 'AGENT_TEAM_LIST',
  AGENT_GROUP_LIST = 'AGENT_GROUP_LIST',
  TEAM_MEMBERS_LIST = 'TEAM_MEMBERS_LIST'
}

const cellRenderer = (props: any) => {
  return React.createElement(TableData, props);
};

const generateAvatar = (team: any, index: number) => {
  const randomItem = getColor(index);
  return {
    ...team,
    textColor: randomItem.textColor,
    textBackgroundColor: randomItem.background
  };
};

export const create = (cell: any) => {
  const { type } = cell.column;

  switch (type as CellEnum) {
    case 'NAME_AVATAR':
      const avatarProps = { type: 'avatar_text', props: { name: cell.value } };
      return cellRenderer(avatarProps);

    case 'BOOLEAN_YESNO':
      return cellRenderer({ type: 'yes_no', props: { checked: cell.value } });

    case 'TIME_AGO':
      return cellRenderer({
        type: 'date_time',
        props: { date_time: cell.value }
      });

    case 'AGENT_TEAM_LIST':
      const agentTeamProps = {
        styleType: 'avatar',
        teams: cell.value.map(generateAvatar)
      };
      return cellRenderer({ type: 'multiple_teams', props: agentTeamProps });

    case 'AGENT_GROUP_LIST':
      const agentGroupList = [cell.value.map((_item: any) => _item.title)];
      return cellRenderer({ type: 'string', props: { values: agentGroupList } });

    case 'TEXT_COMMA_SEP':
      return cellRenderer({ type: 'string', props: { values: cell.value, max: 1 } });

    case 'TEXT':
    default:
      return cellRenderer({ type: 'string', props: { values: [cell.value] } });
  }
};

export default {
  create
};
