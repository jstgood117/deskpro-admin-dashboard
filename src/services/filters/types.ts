export type IOperatorType = (...args: any[]) => boolean;

export type FilterType = {
  id:string;
  columnName: string;
  operator: IOperatorType;
  value:any
};
