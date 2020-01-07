import React, { SFC } from 'react';
import Text from './ValueTypes/Text';
import ChoiceFromData from './ValueTypes/ChoiceFromData';

import { FilterProps } from '../../../resources/interfaces/filterMeta';

export type Props = {
  containType: string;
  filter?: FilterProps;
  filterValue: any;
  filters: FilterProps[];
  index: number;
  setFilterValue: React.Dispatch<any>;
  setFilters?: (e: any) => void;
  uniqueValues: string[];
  placeholder?: string;
};

export const Values: SFC<Props> = ({ containType, ...props}) => {

  switch(containType) {
    case 'CHOICE_FROM_DATA':
      return (
        <ChoiceFromData {...props} />
      );
    default:
    case 'TEXT':
      return (
        <Text {...props} />
      );
  }

};

export default Values;