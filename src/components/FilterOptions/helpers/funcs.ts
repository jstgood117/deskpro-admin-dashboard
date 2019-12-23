import { FilterMeta, FilterProps } from '../../../resources/interfaces/filterMeta';
import { KeyValue } from '../../../types';

export const getIntlOperatorTitle = (operatorName: string, operatorKeys: KeyValue) => {
  return (operatorName && operatorKeys.hasOwnProperty(operatorName))
    ? operatorKeys[operatorName]
    : '';
};

export const getOptionPropertyByPath = (path: string, containProperties: FilterMeta[]) => {
  const match = containProperties.find(_option => _option.path === path);

  return match ? match.title : '';
};

export const getTypeByPath = (path: string, containProperties: FilterMeta[]) => {
  const match = containProperties.find(_option => _option.path === path);

  return match ? match.type : 'TEXT';
};

export const getPathByOptionProperty = (title: string, containProperties: FilterMeta[]) => {
  const match = containProperties.find(_option => _option.title === title);
  return match ? match.path : '';
};

export const getOperatorByTitle = (title: string, containOptions: any[]) => {
  const match = containOptions.find(_option => _option === title);
  return match ? match : '';
};

export const getCurrentOperators = (
  currentPath: string,
  filter:FilterProps,
  containProperties: FilterMeta[]
) => {
  const newItems = containProperties.filter(_option => {
    return (_option.path === currentPath || _option.path === filter.property);
  });
  return newItems[0] ? newItems[0].operators : [];
};
