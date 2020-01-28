import { KeyValue } from '../../../types';
import { get, first, last } from 'lodash';

export const includes = (row: KeyValue, prop: string, values: string[]) => {
  const parts = prop.split('.');
  const dataPath = first(parts);

  if (row.hasOwnProperty(String(dataPath))) {
    const dataPoint = row[String(dataPath)];
    const lowercaseValues = Array.from(values || []).map(value => value.toLowerCase());

    switch (typeof dataPoint) {
      case 'string':
        return lowercaseValues.some(value => {
          return dataPoint.toLowerCase().includes(value);
        });
      case 'object':
        const deepProp = last(parts);
        return lowercaseValues.some(value => {
          return row[dataPath].some((item: any) =>
            get(item, [deepProp], '')
              .toLowerCase()
              .includes(value)
          );
        });
      default:
        return false;
    }
  }
};
