import get from 'lodash/get';
import jp from 'jsonpath';
import { getColorByIndex, getColorByChar } from '../../utils/getRandomColor';
import { ITableColor } from '../../resources/interfaces';
import { ITableDataProps } from './types';
import {
  API_TableColumnField,
  API_TablePayloadValue,
  API_TableColumnPhraseMapItem
} from '../../codegen/types';
import moment from 'moment';

export const getColor = (index: number): ITableColor => {
  return getColorByIndex(index);
};

export const generateTeamAvatar = (team: any) => {
  const randomItem = getColor(Math.floor(Math.random() * 20));
  return {
    ...team,
    textColor: randomItem.textColor,
    textBackgroundColor: randomItem.background
  };
};

export const generateAgentAvatar = (agent: any) => {
  const randomItem = getColor(Math.floor(Math.random() * 20));
  return {
    ...agent,
    textColor: randomItem.textColor,
    textBackgroundColor: randomItem.background
  };
};

export const convertPhrases = (
  values: string[],
  phraseMap: API_TableColumnPhraseMapItem[]
) => {
  return values.map(value => {
    const match = phraseMap.find(_map => _map.value === value);
    return match ? match.phraseId : value;
  });
};

export const getPayloadValue = (row: any, value: API_TablePayloadValue) => {
  switch (true) {
    case value.dataPath && value.dataPath.charAt(0) === '$':
      return jp.query(row, value.dataPath);
    case !!value.dataPath:
      return get(row, value.dataPath);
    case !!value.staticValue:
      return value.staticValue;
    case !!value.staticJson:
      try {
        return JSON.parse(value.staticJson);
      } catch (e) {
        console.error('Failed to parse JSON string', value.staticJson);
        console.error(e);
        return null;
      }
    default:
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
          name,
          properties: getColorByChar(name.charAt(0))
        }
      };

    case 'TableColumnBoolYesNo':
    case 'TableColumnBoolOnOff':
      return {
        type: 'yes_no',
        props: { checked: getPayloadValue(row, type.value) }
      };

    case 'TableColumnDateTime':
      const value = getPayloadValue(row, type.value);
      const parsedValue = moment(value);
      return {
        type: 'date_time',
        props: {
          date_time: parsedValue.isValid()
            ? parsedValue.format('MMM DD, YYYY')
            : value
        }
      };
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
      const agentGroupList = [
        getPayloadValue(row, type.valuesArray).map((_item: any) => _item.title)
      ];
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

    case 'TableColumnTicketDepartmentList':
      return {
        type: 'multiple_agents',
        props: {
          viewModel: 'label',
          agents: getPayloadValue(row, type.valuesArray).map(
            (department: any) => {
              const colors = getColorByChar(department.title.charAt(0));

              return {
                name: department.title,
                avatar: department.avatar,
                avatarProps: {
                  textBackgroundColor: colors.background,
                  textColor: colors.textColor
                }
              };
            }
          ),
          max: 3
        }
      };

    case 'TableColumnTextCommaSep':
      return {
        type: 'string',
        props: { values: getPayloadValue(row, type.valuesArray), max: 1 }
      };

    case 'TableColumnTextPhraseCommaSep':
      const values = getPayloadValue(row, type.valuesArray);
      return {
        type: 'phrase',
        props: { values: convertPhrases(values, type.phraseMap), max: 1 }
      };

    case 'TableColumnTextPhrase':
      return {
        type: 'string',
        props: { values: convertPhrases(values, type.phraseMap) }
      };

    case 'TableColumnText':
      return {
        type: 'string',
        props: { values: [getPayloadValue(row, type.value)] }
      };

    case 'TableColumnInteger':
      return {
        type: 'count',
        props: { values: [getPayloadValue(row, type.value)] }
      };

    case 'TableColumnId':
      return { type: 'id', props: { id: [getPayloadValue(row, type.value)] } };

    // case 'TableColumnTemplate':
    //   return { type: 'template', props: { template: '<p>{{testing}}</p>', data: {testing:123} } };

    case 'TableColumnMoney':
      return {
        type: 'currency',
        props: {
          amount: getPayloadValue(row, type.amount),
          currency: getPayloadValue(row, type.currency)
        }
      };

    default:
      return { type: 'string', props: { values: ['Unknown column type'] } };
  }
};
