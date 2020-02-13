import { orderByFn } from '../orderFn';
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


  test('Returns original data if any of the rows are grouped', () => {

    const grouped = [{
      'id':'1000',
      'isGrouped': true,
      'name':'Shelia Krok',
      'subRows':[] as any[]
    }, {
      'id':'1001',
      'name':'Able Limpton',
      'subRows':[] as any[]
    }];

    const result = orderByFn(grouped, [customSortMethod], [false]);
    expect(result).toEqual(grouped);
  });

});
