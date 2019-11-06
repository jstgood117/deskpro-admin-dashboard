import { operators } from './operators';

type IOperatorType = (...args: any[]) => boolean;

export type FilterType = {
  id:string;
  columnName: string;
  operator: IOperatorType;
  value:any
};

const generateFilterId = (columnName:string, operatorName:string) => {
  return `${columnName}-${operatorName}`;
};

export const filterFactory = (columnName: string, operatorName: string, value: any): FilterType => {

  const id = generateFilterId(columnName, operatorName);

  if(!operators.hasOwnProperty(operatorName.toString())) {
    return {
      id,
      columnName,
      operator:() => true,
      value
    };
  }

  switch(operatorName) {
    case 'equal':
    default:
      return {
        id,
        columnName,
        operator:operators.equals,
        value
      };
  }
};