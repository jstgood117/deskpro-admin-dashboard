import {getPayloadValue} from '../apiToComponentAdapter';
import { API_TablePayloadValue } from '../../../codegen/types';
describe('getPayloadValue', () => {

  const original = console.error;

  beforeEach(() => {
    console.error = jest.fn();
  });

  const row = {
    id:123,
    name:'John',
    teams:[{
      id:234,
      name:'Blue Team'
    },{
      id:345,
      name:'Red Team'
    }]
  };

  test('returns value from if dataPath is available as a prop on row', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: 'name',
      staticValue: 'Static Value',
      staticJson: '{"test":"rendered out some json"}',
    };

    const result = getPayloadValue(row, value);
    expect(result).toBe('John');

  });

  test('returns deeps values from row prop is dataPath starts with $', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: '$.teams[*].name',
      staticValue: 'Static Value',
      staticJson: '{"test":"rendered out some json"}',
    };

    const result = getPayloadValue(row, value);
    expect(result).toEqual(['Blue Team', 'Red Team']);
  });

  test('returns undefined from row prop is dataPath starts with $ but prop not found', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: '$.teams[*].doesntexist',
      staticValue: 'Static Value',
      staticJson: '{"test":"rendered out some json"}',
    };

    const result = getPayloadValue(row, value);
    expect(result).toEqual([]);
  });

  test('returns static value is dataPath is null', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: null,
      staticValue: 'Static Value',
      staticJson: '{"test":"rendered out some json"}',
    };

    const result = getPayloadValue(row, value);
    expect(result).toEqual('Static Value');
  });

  test('returns json object if dataPath and staticValue is null', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: null,
      staticValue: null,
      staticJson: '{"test":"rendered out some json"}',
    };

    const result = getPayloadValue(row, value);
    expect(result).toEqual({'test':'rendered out some json'});
  });

  test('returns null if staticJson is unparsable', () => {

    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue',
      dataPath: null,
      staticValue: null,
      staticJson: '{"test:"rendered out some json"}',
    };

    const result = getPayloadValue(row, value);
    expect(result).toEqual(null);
  });

  afterEach(() => {
    console.error = original;
  });
});