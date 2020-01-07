import { KeyValue } from '../../../types';
import { first, last, get } from 'lodash';
export const equals = (row: KeyValue, prop:string, values:string[]) => {

  const parts = prop.split('.');
  const dataPath = first(parts);

  if(row.hasOwnProperty(String(dataPath))) {
    const dataPoint = row[String(dataPath)];
    const lowercaseValues = values.map(value => value.toLowerCase());

    switch(typeof dataPoint) {
      case 'string':
        return lowercaseValues.includes(dataPoint.toLowerCase());
      case 'object':
        const deepProp = last(parts);
        return row[dataPath].some((item: any) =>
          lowercaseValues.includes(get(item, [deepProp], '').toLowerCase())
        );
      default:
        return false;
    }
  }
};