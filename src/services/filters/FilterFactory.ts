import { operators } from './operators';
import { FilterType } from './types';
import { prop } from '../../utils/prop';

const generateFilterId = (columnName:string, operatorName:string) => {
  return `${columnName}-${operatorName}`;
};

export const filterFactory = (columnName: string, operatorName: string, value: any): FilterType => {

  const id = generateFilterId(columnName, operatorName);

  if(!operators.hasOwnProperty(operatorName.toString())) {
    return {
      id,
      columnName,
      operatorName,
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
        operatorName,
        operator:prop(operators, operatorName),
        value
      };
  }
};