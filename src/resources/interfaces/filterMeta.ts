export type RuleOperatorType = '' | '=' | '!=' | 'in' | 'not_in';
export type GroupType = 'all' | 'any';
export type GroupOperatorType = 'and' | 'or';
export type PropertyType = 'text' | 'select';
export type ValueType = 'group' | 'rule';

// For Schema
export interface IRuleBuilderSchema {
  groupTitle: string;
  properties: IPropertySchema[];
}

export interface IRuleOptions {
  choices: object;
}

export interface IPropertySchema {
  propertyId: string;
  title: string;
  operators: RuleOperatorType[];
  type: PropertyType;
  options?: IRuleOptions;
}

// For Value
export interface IPropertyValue {
  propertyId: string;
  operator: RuleOperatorType;
  value: any;
}

export interface IRuleItem {
  id: string;
  type: ValueType;
  rule: IPropertyValue;
}

export interface IRuleValue {
  id: string;
  type: ValueType;
  operator: GroupOperatorType;
  rules: (IRuleItem | IRuleValue)[];
}

export type FilterProps = {
  property: string;
  operatorName: string;
  value: string;
  applied?: boolean;
  type?: string;
};

export type FilterValueType = 'BOOL' | 'TEXT' | 'CHOICE_FROM_DATA';

export type OperatorType =
  | 'IN'
  | 'NOT_IN'
  | 'EQUAL'
  | 'NOT_EQUAL'
  | 'STARTS_WITH'
  | 'ENDS_WITH'
  | 'CONTAINS'
  | 'NOT_CONTAINS'
  | 'YES_NO';

export type OperatorOptionsType = {
  value: OperatorType;
  title: string;
};

export type OperatorOptionsTypes = OperatorOptionsType[];

export type FilterMeta = {
  title: string;
  operators: OperatorType[];
  type: string;
  path: string;
  dataPath: string;
  uniqueValues?: any[];
};

export const operatorDictionary: any = {
  IN: 'Contains',
  NOT_IN: 'Not in',
  EQUAL: 'Is',
  NOT_EQUAL: 'Is not',
  STARTS_WITH: 'Starts with',
  ENDS_WITH: 'Ends with',
  CONTAINS: 'Contains one of the following',
  NOT_CONTAINS: 'Does not Contain one of the following',
  YES_NO: 'Yes / No'
};