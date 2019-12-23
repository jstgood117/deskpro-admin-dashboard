import { KeyValue } from '../../../types';
import { get, first, last } from 'lodash';
export const includes = (row: KeyValue, prop:string, value:string) => {

  const parts = prop.split('.');
  const dataPath = first(parts);

  if(row.hasOwnProperty(String(dataPath))) {
    const dataPoint = row[String(dataPath)];

    switch(typeof dataPoint) {
      case 'string':
        return dataPoint.toLowerCase().includes(value.toLowerCase());
      case 'object':
        const deepProp = last(parts);
        return row[dataPath].some((item: any) =>
            get(item, [deepProp], '')
            .toLowerCase()
            .includes(value.toLowerCase()
        ));
      default:
        return false;
    }
  }
};