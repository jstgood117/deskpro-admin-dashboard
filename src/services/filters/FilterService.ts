import { filterFactory } from './FilterFactory';
import { FilterType } from './types';

const generateFilterId = (property:string, operatorName:string, iterator: number = 1) => {
  return `${property}-${operatorName}-${iterator}`;
};

export const setupFilters = (property:string) => {
  return addFilter([], property, 'CONTAINS', '');
};

export const getFilter =  (filters:FilterType[], id:string)  => {
  return filters.find(filter => filter.id === id);
};

export const compareFilter =  (filterA:FilterType, filterB:FilterType)  => {
  return (
    filterA.id === filterB.id &&
    filterA.operatorName === filterB.operatorName &&
    filterA.value === filterB.value
  );
};

export const runFilter = (data:object[], filter: FilterType) => {

  const { property, operator, value } = filter;

  if(!data) {
    return data;
  }

  const propName = property;

  return data.filter((_row:any) => {
    const dataPath = propName.split('.')[0];
    return _row.hasOwnProperty(dataPath) && operator(_row, propName.toString(), value);
  });
};

export const runFilterOnAllColumns = (data:object[], filter: FilterType) => {

  const { operator, value } = filter;

  if(!data) {
    return data;
  }

  // @TODO: (O)n^2
  return data.filter((_row:any) => (
    Object.keys(_row).some((_colKey:any) => (
      typeof _row[_colKey] === 'string'
      ? operator(_row, _colKey, value)
      : false
    ))
  ));
};

export const runFilters = (data:object[], filters: FilterType[]) => {

  if(!filters) {
    return data;
  }

  let filteredData = data;
  filters.forEach((_filter: FilterType) => {
    const { property } = _filter;
    filteredData = (property !== '*' ? runFilter(filteredData, _filter) : runFilterOnAllColumns(filteredData, _filter));
  });

  return filteredData;
};

export const addFilter = (
  filters:FilterType[],
  property: string,
  operatorName: string,
  compareValue: string
): FilterType[] => {

  const existingIds = filters.map(filter => filter.id);

  let id = generateFilterId(property, operatorName);
  let i = 1;
  while(existingIds.includes(id)) {
    id = generateFilterId(property, operatorName, ++i);
  }

  const newFilter: FilterType = filterFactory(id, property, operatorName, compareValue);

  return [
    ...filters,
    newFilter
  ];
};

export const removeFilter = (filters: FilterType[], id: string): FilterType[] => {
  return filters.filter(_filter => _filter.id !== id);
};

export const updateFilter = (filters: FilterType[], id: string, operatorName:string, compareValue:string): FilterType[] => {
  const filtersRemoved = removeFilter(filters, id);
  const filterAdded = addFilter(filtersRemoved, id.split('-')[0], operatorName, compareValue);
  return filterAdded;
};