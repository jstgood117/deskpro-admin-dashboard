import { KeyValue } from '../../../resources/interfaces';
import { equals } from './equals';
import { includes } from './includes';
import { startsWith } from './startsWith';
import { endsWith } from './endsWith';
import { yesNo} from './yesNo';

import {
  doesNotEqual,
  doesNotInclude,
  doesNotStartWith,
  doesNotEndWith
} from './negatives';

export type OperatorTypes = 'IN' |
'NOT_IN' |
'EQUAL' |
'NOT_EQUAL' |
'STARTS_WITH' |
'NOT_STARTS_WITH' |
'ENDS_WITH' |
'NOT_ENDS_WITH' |
'CONTAINS' |
'NOT_CONTAINS' |
'YES_NO';

export const operators = {
  EQUAL:equals,
  NOT_EQUAL:doesNotEqual,
  CONTAINS:includes,
  NOT_CONTAINS:doesNotInclude,
  IN:includes,
  NOT_IN:doesNotInclude,
  STARTS_WITH:startsWith,
  NOT_STARTS_WITH: doesNotStartWith,
  ENDS_WITH: endsWith,
  NOT_ENDS_WITH: doesNotEndWith,
  YES_NO: yesNo
};

export const operatorKeys: KeyValue = {
  IN: 'admin_common.filter_operator.in',
  NOT_IN: 'admin_common.filter_operator.not_in',
  EQUAL: 'admin_common.filter_operator.equal',
  NOT_EQUAL: 'admin_common.filter_operator.not_equal',
  STARTS_WITH: 'admin_common.filter_operator.starts_with',
  NOT_STARTS_WITH: 'admin_common.filter_operator.not_starts_with',
  ENDS_WITH: 'admin_common.filter_operator.ends_with',
  NOT_ENDS_WITH: 'admin_common.filter_operator.not_ends_with',
  CONTAINS: 'admin_common.filter_operator.contains',
  NOT_CONTAINS: 'admin_common.filter_operator.not_contains',
  YES_NO: 'admin_common.filter_operator.yes_no'
};
