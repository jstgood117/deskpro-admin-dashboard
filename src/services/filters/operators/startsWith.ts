import { KeyValue } from '../../../types';
import { first, last, get, startsWith as _startsWith } from 'lodash';

export const startsWith = (row: KeyValue, prop:string, values:string[]) => {

  const parts = prop.split('.');
  const dataPath = first(parts);

  if(row.hasOwnProperty(String(dataPath))) {
    const dataPoint = row[String(dataPath)];
    const lowercaseValues = values.map(value => value.toLowerCase());

    switch(typeof dataPoint) {
      case 'string':
        return lowercaseValues.some(value => {
          return _startsWith(dataPoint, value);
        });

      case 'object':
        const deepProp = last(parts);
        return row[dataPath].some((item: any) =>  {
          return lowercaseValues.some(value => {
            return _startsWith(get(item, [deepProp], ''), value);
          });
        });
      default:
        return false;
    }
  }
};