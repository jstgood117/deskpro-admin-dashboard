import {KeyValue} from '../types';

export const prop = (obj: KeyValue, key: string) => {
  return obj[key];
};
