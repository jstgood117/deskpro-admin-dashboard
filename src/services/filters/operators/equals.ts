import { KeyValue } from '../../../resources/interfaces';
import { first, last, get } from 'lodash';
export const equals = (row: KeyValue, prop:string, value:string) => {

  const parts = prop.split('.');
  const dataPath = first(parts);

  if(row.hasOwnProperty(String(dataPath))) {
    const dataPoint = row[String(dataPath)];

    switch(typeof dataPoint) {
      case 'string':
        return dataPoint.toLowerCase() === value.toLowerCase();
      case 'object':
        const deepProp = last(parts);
        return row[dataPath].some((item: any) =>
          get(item, [deepProp], '').toLowerCase() === value.toLowerCase()
        );
      default:
        return false;
    }
  }
};