import { operators } from './operators';
import { FilterType } from './types';
import { prop } from '../../utils/prop';


export const filterFactory = (id: string, property: string, operatorName: string, value: string[]): FilterType => {

  if(!operators.hasOwnProperty(operatorName.toString())) {
    return {
      id,
      property,
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
        property,
        operatorName,
        operator:prop(operators, operatorName),
        value
      };
  }
};