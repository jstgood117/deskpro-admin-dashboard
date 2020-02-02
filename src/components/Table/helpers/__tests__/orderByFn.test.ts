import { orderByFn } from '../order';
import data from '../../../../fixtures/largeData';
import { customSortMethod  } from '../../../../utils/sort';

describe('orderByFn', () => {
  test('performance test', () => {
    orderByFn(data, [customSortMethod], [true]);
  });
});