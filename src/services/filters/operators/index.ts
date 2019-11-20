import { equals } from './equals';
import { includes } from './includes';

export type OperatorTypes = 'IN' |
'NOT_IN' |
'EQUAL' |
'NOT_EQUAL' |
'STARTS_WITH' |
'ENDS_WITH' |
'CONTAINS' |
'NOT_CONTAINS' |
'YES_NO';

type KeyValue = {
  [key: string]: any;
};

export const operators = {
  EQUAL:equals,
  CONTAINS:includes
};

export const operatorKeys: KeyValue = {
  IN: 'admin_common.filter_operator.in',
  NOT_IN: 'admin_common.filter_operator.not_in',
  EQUAL: 'admin_common.filter_operator.equal',
  NOT_EQUAL: 'admin_common.filter_operator.not_equal',
  STARTS_WITH: 'admin_common.filter_operator.starts_with',
  ENDS_WITH: 'admin_common.filter_operator.ends_with',
  CONTAINS: 'admin_common.filter_operator.contains',
  NOT_CONTAINS: 'admin_common.filter_operator.not_contains',
  YES_NO: 'admin_common.filter_operator.yes_no'
};
