import {
  convertPhrases,
} from '../apiToComponentAdapter';

import {
  API_TableColumnPhraseMapItem
} from '../../../codegen/types';

describe('convertPhrases', () => {
  test('for index 0 returns correct color', () => {
    const phrases:API_TableColumnPhraseMapItem[] = [{
      __typename: 'TableColumnPhraseMapItem',
      value: '123',
      phraseId: 'phrase.number',
    }];

    const result1 = convertPhrases(['123'], phrases);
    expect(result1).toEqual(['phrase.number']);

    const result2 = convertPhrases(['nope'], phrases);
    expect(result2).toEqual(['nope']);
  });
});
