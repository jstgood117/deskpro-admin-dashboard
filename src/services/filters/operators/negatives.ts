import { KeyValue } from '../../../types';

import { equals } from './equals';
import { includes } from './includes';
import { startsWith } from './startsWith';
import { endsWith } from './endsWith';

export const doesNotEqual = (row: KeyValue, prop:string, value:string) => {
  return !equals(row, prop, value);
};

export const doesNotInclude = (row: KeyValue, prop:string, value:string) => {
  return !includes(row, prop, value);
};

export const doesNotStartWith = (row: KeyValue, prop:string, value:string) => {
  return !startsWith(row, prop, value);
};

export const doesNotEndWith = (row: KeyValue, prop:string, value:string) => {
  return !endsWith(row, prop, value);
};
