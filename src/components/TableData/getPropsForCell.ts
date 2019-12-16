import get from 'lodash/get';
import { getColorByIndex, getColorByChar } from '../../utils/getRandomColor';
import { ITableColor, KeyValue } from '../../resources/interfaces';
import { ITableDataProps } from './types';
import { API_TableColumnField, API_TablePayloadValue } from '../../codegen/types';

const getColor = (index: number): ITableColor => {
  return getColorByIndex(index);
};

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

const getPayloadValue = (row: any, value: API_TablePayloadValue) => {
  if (value.dataPath) {
    return get(row, value.dataPath);
  } else if (value.staticValue) {
    return value.staticValue;
  } else if (value.staticJson) {
    try {
      return JSON.parse(value.staticJson);
    } catch (e) {
      console.error("Failed to parse JSON string", value.staticJson);
      console.error(e);
      return null;
    }
  } else {
    return null;
  }
};

export const generateComponentProps = (cell: any): ITableDataProps => {
  const type = cell.column.type as API_TableColumnField;
  const row = cell.row.original;

  switch (type.__typename) {
    case 'TableColumnNameAvatar':
      const name = getPayloadValue(row, type.name) || 'undef';
      return {
        type: 'avatar_text',
        props: {
          name: name,
          properties: getColorByChar(name.charAt(0))
        }
      };

    case 'TableColumnBoolYesNo':
      return { type: 'yes_no', props: { checked: getPayloadValue(row, type.value) } };

    case 'TableColumnTimeAgo':
      return {
        type: 'date_time',
        props: { date_time: getPayloadValue(row, type.value) }
      };

    case 'TableColumnAgentTeamList':
      const agentTeamProps = {
        styleType: 'label',
        teams: getPayloadValue(row, type.valuesArray).map(generateTeamAvatar)
      };
      return { type: 'multiple_teams', props: agentTeamProps };

    case 'TableColumnAgentGroupList':
      const agentGroupList = [getPayloadValue(row, type.valuesArray).map((_item: any) => _item.title)];
      return {
        type: 'string',
        props: { values: agentGroupList }
      };

    case 'TableColumnAgentList':
      const agentsProps = {
        styleType: 'label',
        agents: getPayloadValue(row, type.valuesArray).map(generateAgentAvatar)
      };
      return { type: 'multiple_agents', props: agentsProps };

    case 'TableColumnTextCommaSep':
      return {
        type: 'string',
        props: { values: getPayloadValue(row, type.valuesArray), max: 1 }
      };

    case 'TableColumnText':
      return { type: 'string', props: { values: [getPayloadValue(row, type.value)] } };

    default:
      return { type: 'string', props: { values: ['Unknown column type: ' + type.__typename] } };
  }
};