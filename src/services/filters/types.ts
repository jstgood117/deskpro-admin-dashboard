export type IOperatorType = (...args: any[]) => boolean;

export type FilterType = {
  id:string;
  property: string;
  operatorName: string;
  operator: IOperatorType;
  value:string[];
};
