import { getColorByIndex, getColorByChar } from '../../utils/getRandomColor';
import { ITableColor, KeyValue } from '../../resources/interfaces';
import { ITableDataProps } from './types';

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
  AGENT_LIST = 'AGENT_LIST',
  AGENT_GROUP_LIST = 'AGENT_GROUP_LIST',
  TEAM_MEMBERS_LIST = 'TEAM_MEMBERS_LIST'
}

const generateTeamAvatar = (team: any) => {
  const randomItem = getColor(Math.floor(Math.random() * 20));
  return {
    ...team,
    textColor: randomItem.textColor,
    textBackgroundColor: randomItem.background
  };
};

const generateAgentAvatar = (agent: any) => {
  const randomItem = getColor(Math.floor(Math.random() * 20));
  return {
    ...agent,
    textColor: randomItem.textColor,
    textBackgroundColor: randomItem.background
  };
};

export const getPropsForCell = (cell: any) => {
  const { row, column } = cell;
  const { columnProps } = column;

  const props:  KeyValue = {};
  columnProps.forEach((columnProp: any) => {
    return props[columnProp.path] = row.original[columnProp.path];
  }, {});
  return props;
};

export const generateComponentProps = (cell: any): ITableDataProps => {
  const { column } = cell;
  const { type } = column;

  switch (type as CellEnum) {
    case 'NAME_AVATAR':
      return {
        type: 'avatar_text',
        props: {
          name: cell.value,
          properties: getColorByChar(cell.value.charAt(0))
        }
      };

    case 'BOOLEAN_YESNO':
      return { type: 'yes_no', props: { checked: cell.value } };

    case 'TIME_AGO':
      return {
        type: 'date_time',
        props: { date_time: cell.value }
      };

    case 'AGENT_TEAM_LIST':
      const agentTeamProps = {
        styleType: 'label',
        teams: cell.value.map(generateTeamAvatar)
      };
      return { type: 'multiple_teams', props: agentTeamProps };

    case 'AGENT_GROUP_LIST':
      const agentGroupList = [cell.value.map((_item: any) => _item.title)];
      return {
        type: 'string',
        props: { values: agentGroupList }
      };

    case 'AGENT_LIST':
      const agentsProps = {
        styleType: 'label',
        agents: cell.value.map(generateAgentAvatar)
      };
      return { type: 'multiple_agents', props: agentsProps };

    case 'TEXT_COMMA_SEP':
      return {
        type: 'string',
        props: { values: cell.value, max: 1 }
      };

    case 'TEXT':
    default:
      return { type: 'string', props: { values: [cell.value] } };
  }
};