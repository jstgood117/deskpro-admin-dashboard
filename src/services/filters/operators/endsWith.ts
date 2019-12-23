import { KeyValue } from '../../../types';
import { first, last, get, endsWith as _endsWith } from 'lodash';

export const endsWith = (row: KeyValue, prop:string, value:string) => {

  const parts = prop.split('.');
  const dataPath = first(parts);

  if(row.hasOwnProperty(String(dataPath))) {
    const dataPoint = row[String(dataPath)];

    switch(typeof dataPoint) {
      case 'string':
        return _endsWith(dataPoint, value);
      case 'object':
        const deepProp = last(parts);
        return row[dataPath].some((item: any) =>
        _endsWith(get(item, [deepProp], ''), value)
        );
      default:
        return false;
    }
  }
};