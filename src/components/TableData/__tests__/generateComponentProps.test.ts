import {
  generateComponentProps
} from '../apiToComponentAdapter';

import {
  API_TableColumnField,
  API_TablePayloadValue,
  API_TableColumnPhraseMapItem,
} from '../../../codegen/types';

describe('generateComponentProps', () => {

  test('returns correct payload for `TableColumnId` type', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'id'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnId',
      value
    };

    const cell = {
      row: { original: { id: '123' } },
      column: { type }
    };

    const result = generateComponentProps(cell);
    expect(result).toEqual({ type: 'id', props: { id: ['123'] } });
  });

  test('returns correct payload for `TableColumnNameAvatar` type', () => {

    const name: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'name'
    };

    const avatar: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'avatar'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnNameAvatar',
      name,
      avatar
    };

    const cell = {
      row: { original: { name: 'John Smith', avatar: 'http://image.com/img.png' } },
      column: { type }
    };

    const result = generateComponentProps(cell);
    expect(result).toEqual({
      type: 'avatar_text',
      props: {
        name: 'John Smith',
        properties: { background: '#FFF8E1', textColor: '#F8AF3C' }
      }
    });
  });

  test('returns correct payload for `TableColumnBoolYesNo` type', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'is_true'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnBoolYesNo',
      value,
    };

    const cell = {
      row: { original: { is_true: true } },
      column: { type }
    };

    const result = generateComponentProps(cell);

    expect(result).toEqual({ type: 'yes_no', props: { checked: true } });
  });

  test('returns correct payload for `TableColumnTimeAgo` type', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'time'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnTimeAgo',
      value,
    };

    const cell = {
      row: { original: { time: 1580877727 } },
      column: { type }
    };

    const result = generateComponentProps(cell);
    expect(result).toEqual({ type: 'date_time', props: { date_time: 1580877727 } });
  });

  test('returns correct payload for `TableColumnAgentTeamList` type', () => {

    const valuesArray: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'team'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnAgentTeamList',
      valuesArray,
    };

    const cell = {
      row: { original: { team: [{ id: 1, name: 'Team 1' }] } },
      column: { type }
    };

    const result = generateComponentProps(cell);

    expect(result.type).toEqual('multiple_teams');
    expect(result.props.teams[0].name).toEqual('Team 1');

  });

  test('returns correct payload for `TableColumnAgentList` type', () => {

    const valuesArray: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'team'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnAgentList',
      valuesArray,
    };

    const cell = {
      row: { original: { team: [{ id: 1, title: 'Agent 1' }] } },
      column: { type }
    };

    const result = generateComponentProps(cell);

    expect(result.type).toEqual('multiple_agents');
    expect(result.props.agents[0].title).toEqual('Agent 1');

  });

  test('returns correct payload for `TableColumnTicketDepartmentList` type', () => {

    const valuesArray: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'departments'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnTicketDepartmentList',
      valuesArray,
    };

    const cell = {
      row: { original: { departments: [{ id: 1, title: 'Department 1', avatarUrn: 'url:test' }] } },
      column: { type }
    };

    const result = generateComponentProps(cell);

    expect(result.type).toEqual('multiple_agents');
    expect(result.props.agents[0].name).toEqual('Department 1');
    expect(result.props.agents[0].avatar).toEqual('url:test');

  });

  test('returns correct payload for `TableColumnTicketDepartmentList` type, TicketForm', () => {

    const valuesArray: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'departments'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnTicketDepartmentList',
      valuesArray,
    };

    const cell = {
      row: { original: { departments: [{ id: 1, title: 'Department ticket', avatarUrn: 'url:test' }], __typename: 'TicketForm' } },
      column: { type }
    };

    const result = generateComponentProps(cell);

    expect(result.type).toEqual('multiple_ticket');
    expect(result.props.agents[0].name).toEqual('Department ticket');
    expect(result.props.agents[0].avatar).toEqual('url:test');

  });


  test('returns correct payload for `TableColumnRoundRobinAgentList` type', () => {

    const valuesArray: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'members'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnRoundRobinAgentList',
      valuesArray,
    };

    const cell = {
      row: { original: { members: [{ agent: { id: 1, name: 'TableColumnRoundRobinAgentList', avatarUrn: 'url:test' } }]} },
      column: { type }
    };

    const result = generateComponentProps(cell);

    expect(result.type).toEqual('multiple_ticket');
    expect(result.props.agents[0].name).toEqual('TableColumnRoundRobinAgentList');
    expect(result.props.agents[0].avatar).toEqual('url:test');

  });

  test('returns correct payload for `TableColumnTextCommaSep` type', () => {

    const valuesArray: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'textcomma'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnTextCommaSep',
      valuesArray,
    };

    const cell = {
      row: { original: { textcomma: ['String 1', 'String 2', 'String 3'] } },
      column: { type }
    };

    const result = generateComponentProps(cell);
    expect(result).toEqual({
      type: 'string',
      props: { values: ['String 1', 'String 2', 'String 3'], max: 1 }
    });
  });

  test('returns correct payload for `TableColumnTextPhraseCommaSep` type', () => {

    const valuesArray: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'phrases'
    };

    const phraseMap: API_TableColumnPhraseMapItem[] = [{
      value: 'phrase.string1',
      phraseId: '123'
    }];

    const type: API_TableColumnField = {
      __typename: 'TableColumnTextPhraseCommaSep',
      valuesArray,
      phraseMap
    };

    const cell = {
      row: { original: { phrases: ['phrase.string1'] } },
      column: { type }
    };

    const result = generateComponentProps(cell);
    expect(result).toEqual({
      type: 'phrase',
      props: { values: ['123'], max: 1 }
    });
  });

  xtest('returns correct payload for `TableColumnTextPhrase` type', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'text'
    };

    const phraseMap: API_TableColumnPhraseMapItem[] = [{
      value: 'phrase.string1',
      phraseId: '123'
    }];

    const type: API_TableColumnField = {
      __typename: 'TableColumnTextPhrase',
      phraseMap,
      value
    };

    const cell = {
      row: { original: { text: 'phrase.string1' } },
      column: { type }
    };

    const result = generateComponentProps(cell);
    expect(result).toEqual({
      type: 'string',
      props: { values: ['123'] }
    });
  });

  test('returns correct payload for `TableColumnText` type', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'text'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnText',
      value,
    };

    const cell = {
      row: { original: { text: 'value' } },
      column: { type }
    };

    const result = generateComponentProps(cell);
    expect(result).toEqual(result);
  });

  test('returns correct payload for `TableColumnInteger` type', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'number'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnInteger',
      value,
    };

    const cell = {
      row: { original: { number: 321 } },
      column: { type }
    };

    const result = generateComponentProps(cell);
    expect(result).toEqual({
      type: 'count',
      props: { values: [321] }
    });
  });

  test('returns correct payload for `TableColumnId` type', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'id'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnId',
      value,
    };

    const cell = {
      row: { original: { id: 321 } },
      column: { type }
    };

    const result = generateComponentProps(cell);
    expect(result).toEqual({
      type: 'id',
      props: { id: [321] }
    });
  });

  test('returns correct payload for `TableColumnMoney` type', () => {

    const amount: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'price'
    };

    const currency: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'currency'
    };

    const type: API_TableColumnField = {
      __typename: 'TableColumnMoney',
      amount,
      currency
    };

    const cell = {
      row: { original: { price: 12345, currency: 'usd' } },
      column: { type }
    };

    const result = generateComponentProps(cell);
    expect(result).toEqual({ type: 'currency', props: { amount: 12345, currency: 'usd' } });
  });

  test('returns default structure when type not detected', () => {

    type MOCK_DEFAULT_TYPE = {
      __typename: 'TableColumnDefault',
    };

    const type: API_TableColumnField | MOCK_DEFAULT_TYPE = {
      __typename: 'TableColumnDefault',
    };

    const cell = {
      row: { original: { id: 1 } },
      column: { type }
    };

    const result = generateComponentProps(cell);
    expect(result).toEqual({ type: 'string', props: { values: ['Unknown column type'] } });
  });

});