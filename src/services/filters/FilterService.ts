import { filterFactory } from './FilterFactory';
import { FilterType } from './types';

export const setupFilters = (columnName:string) => {
  return addFilter([], columnName, 'CONTAINS', '');
};

export const runFilter = (data:object[], filter: FilterType) => {

  const { columnName, operator, value } = filter;

  if(!data) {
    return data;
  }

  return data.filter((_row:any) => {
    return _row.hasOwnProperty(columnName) && operator(_row[columnName.toString()], value);
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
      ? operator(_row[_colKey], value)
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
    const { columnName } = _filter;
    filteredData = (columnName !== '*' ? runFilter(filteredData, _filter) : runFilterOnAllColumns(filteredData, _filter));
  });

  return filteredData;
};

export const addFilter = (
  filters:FilterType[],
  columnName: string,
  operatorName: string,
  compareValue: any
): FilterType[] => {

  const newFilter: FilterType = filterFactory(columnName, operatorName, compareValue);

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