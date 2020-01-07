import { KeyValue } from '../../../types';

import { equals } from './equals';
import { includes } from './includes';
import { startsWith } from './startsWith';
import { endsWith } from './endsWith';

export const doesNotEqual = (row: KeyValue, prop:string, values:string[]) => {
  return !equals(row, prop, values);
};

export const doesNotInclude = (row: KeyValue, prop:string, values:string[]) => {
  return !includes(row, prop, values);
};

export const doesNotStartWith = (row: KeyValue, prop:string, values:string[]) => {
  return !startsWith(row, prop, values);
};

export const doesNotEndWith = (row: KeyValue, prop:string, values:string[]) => {
  return !endsWith(row, prop, values);
};
