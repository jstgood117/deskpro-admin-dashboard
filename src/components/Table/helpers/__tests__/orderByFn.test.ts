import { orderByFn } from '../order';
import data from '../../../../fixtures/tableDataLarge';
import { customSortMethod  } from '../../../../utils/sort';

describe('orderByFn', () => {

  test('performance test - 1000 rows runs in under 200ms', () => {

    const t0 = performance.now();
    orderByFn(data, [customSortMethod], [false]);
    const t1 = performance.now();

    const t2 = performance.now();
    orderByFn(data, [customSortMethod], [true]);
    const t3 = performance.now();

    expect(t1-t0).toBeLessThan(200);
    expect(t3-t2).toBeLessThan(200);
  });

});
