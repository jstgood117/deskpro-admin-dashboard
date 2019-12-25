import { KeyValue } from '../../../types';
import { get, first, last } from 'lodash';
export const yesNo = (row: KeyValue, prop:string, value: never) => {

  const parts = prop.split('.');
  const dataPath = first(parts);

  if(row.hasOwnProperty(String(dataPath))) {
    const dataPoint = row[String(dataPath)];

    switch(typeof dataPoint) {
      case 'string':
        return !!dataPoint;
      case 'object':
        const deepProp = last(parts);
        return row[dataPath].some((item: any) =>
            !!get(item, [deepProp], '')
        );
      default:
        return false;
    }
  }
};
