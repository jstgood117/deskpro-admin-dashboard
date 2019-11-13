import { operators } from './operators';
import { FilterType } from './types';
import { prop } from '../../utils/prop';


export const filterFactory = (id: string, columnName: string, operatorName: string, value: any): FilterType => {

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