import React, { SFC } from 'react';
import Text from './ValueTypes/Text';

import { FilterProps } from '../../../resources/interfaces/filterMeta';

export type Props = {
  containType: string;
  filter?: FilterProps;
  filterValue: any;
  filters: FilterProps[];
  index: number;
  setFilterValue: React.Dispatch<any>;
  setFilters?: (e: any) => void;
};

export const Values: SFC<Props> = ({ containType, ...props}) => {
  switch(containType) {
    default:
    case 'TEXT':
      return (
        <Text {...props} />
      );
  }
};

export default Values;