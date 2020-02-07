import {
  API_TablePayloadValue,
} from '../../../codegen/types';
import {
  getPayloadValue
} from '../apiToComponentAdapter';

describe('getPayloadValue', () => {
  test('returns null if all switch case statements are false', () => {
    const value: API_TablePayloadValue = {
      __typename: 'TablePayloadValue'
    };
    const row = {};
    const result = getPayloadValue(row, value);
    expect(result).toBe(null);
  });
});
