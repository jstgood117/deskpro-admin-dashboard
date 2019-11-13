export type IOperatorType = (...args: any[]) => boolean;

export type FilterType = {
  id:string;
  columnName: string;
  operatorName: string;
  operator: IOperatorType;
  value:any
};
