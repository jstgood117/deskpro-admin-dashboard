import { createIntl, createIntlCache } from 'react-intl';
import { generatFilterOptions } from '../functions';
import { FilterMeta } from '../../../resources/interfaces/filterMeta';

describe('generatFilterOptions', () => {
  const cache = createIntlCache();

  const intl = createIntl(
    {
      locale: 'en',
      messages: { 'admin_common.col.name': 'Name' }
    },
    cache
  );

  const filterDef: FilterMeta[] = [
    {
      title: 'admin_common.col.name',
      operators: ['CONTAINS', 'NOT_CONTAINS'],
      type: 'TEXT',
      path: 'name',
      dataPath: 'name'
    }
  ];

  test('returns translated string: Name', () => {
    const result = generatFilterOptions(filterDef, intl);
    expect(result[0].title).toBe('Name');
  });
});
