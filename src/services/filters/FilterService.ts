import { filterFactory, FilterType } from './FilterFactory';

export const setupFilters = (columnName:string) => {
  // Adds search
  return addFilter([], columnName, 'contains', '');
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

export const runFilters = (data:object[], filters: FilterType[]) => {

  if(!filters) {
    return data;
  }

  let filtereData = data;
  filters.map((_filter: FilterType) => {
    filtereData = runFilter(filtereData, _filter);
  });

  return filtereData;
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

export const removeFilter = (id: string, filters: FilterType[]): FilterType[] => {
  return filters.filter(_filter => _filter.id !== id);
};