import { FilterProps } from '../../../../resources/interfaces/filterMeta';

export type Props = {
  filter?: FilterProps;
  filterValue: string[];
  filters: FilterProps[];
  index: number;
  setFilterValue: React.Dispatch<string[]>;
  setFilters?: (e: FilterProps[]) => void;
  uniqueValues: string[];
  placeholder?: string;
};