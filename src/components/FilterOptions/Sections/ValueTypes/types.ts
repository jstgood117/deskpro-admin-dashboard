import { FilterProps } from '../../../../resources/interfaces/filterMeta';

export type Props = {
  filter?: FilterProps;
  filterValue: any;
  filters: FilterProps[];
  index: number;
  setFilterValue: React.Dispatch<any>;
  setFilters?: (e: any) => void;
  uniqueValues: string[];
  placeholder?: string;
};