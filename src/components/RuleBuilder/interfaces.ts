export type RuleOperatorType = '=' | '!=' | '';
export type GroupType = 'all' | 'any';
export type GroupOperatorType = 'and' | 'or';
export type PropertyType = 'text' | 'select';
export type ValueType = 'group' | 'rule';

// For Schema
export interface IRuleBuilderSchema {
  groupTitle: string;
  properties: IPropertySchema[];
}

export interface IPropertySchema {
  propertyId: string;
  title: string;
  oparators: RuleOperatorType[];
  type: PropertyType;
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
  rules: Array<IRuleItem | IRuleValue>;
}