export type RuleOparatorType = '=' | '!=' | '';
export type GroupType = 'all' | 'any';

export interface IRuleSchema {
  groupTitle: string;
  properties: IRuleProperty[];
}

export interface IRuleProperty {
  propertyId: string;
  title: string;
  oparators: RuleOparatorType[];
  type: '';
}