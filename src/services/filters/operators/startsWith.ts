import { KeyValue } from '../../../resources/interfaces';
import { first, last, get, startsWith as _startsWith } from 'lodash';

export const startsWith = (row: KeyValue, prop:string, value:string) => {

  const parts = prop.split('.');
  const dataPath = first(parts);

  if(row.hasOwnProperty(String(dataPath))) {
    const dataPoint = row[String(dataPath)];

    switch(typeof dataPoint) {
      case 'string':
        return _startsWith(dataPoint, value);
      case 'object':
        const deepProp = last(parts);
        return row[dataPath].some((item: any) =>
        _startsWith(get(item, [deepProp], ''), value)
        );
      default:
        return false;
    }
  }
};