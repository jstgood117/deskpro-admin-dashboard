import { orderByFn } from '../order';
import data from '../../../../fixtures/largeData';
import { customSortMethod  } from '../../../../utils/sort';

describe('orderByFn', () => {
  xtest('performance test - 1000 rows runs in under 200ms', () => {

    const t0 = performance.now();
    orderByFn(data, [customSortMethod], [false]);
    const t1 = performance.now();
    expect(t1-t0).toBeLessThan(200);
  });

  test('sorts rows correctly in ascending order', () => {

    const result = orderByFn(data, [customSortMethod], [false]);

    const ids = result.map(_item => _item.id);
    let sorted = true;
    for (let i = 0; i < ids.length - 1; i++) {
      if (ids[i] > ids[i+1]) {
        sorted = false;
        break;
      }
    }

    expect(sorted).toBe(true);
  });

  test('sorts rows correctly in descending order', () => {

    const result = orderByFn(data, [customSortMethod], [true]);

    const ids = result.map(_item => _item.id);
    let sorted = true;
    for (let i = 0; i < ids.length - 1; i++) {
      if (ids[i] < ids[i+1]) {
        sorted = false;
        break;
      }
    }

    expect(sorted).toBe(true);
  });
});