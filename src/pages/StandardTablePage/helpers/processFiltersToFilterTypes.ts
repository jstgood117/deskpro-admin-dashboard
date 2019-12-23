import { FilterProps } from '../../../resources/interfaces/filterMeta';
import { FilterType } from '../../../services/filters/types';
import { addFilter } from '../../../services/filters';

export const processFiltersToFilterTypes = (
  internalFilters: FilterProps[]
): FilterType[] => {
  let serviceFilters: FilterType[] = [];
  internalFilters.forEach((internalFilter: FilterProps) => {
    const { value, property, operatorName } = internalFilter;
    if (property !== '' && operatorName !== '') {
      serviceFilters = addFilter(
        serviceFilters,
        property,
        operatorName,
        value
      );
    }
  });

  return serviceFilters;
};
