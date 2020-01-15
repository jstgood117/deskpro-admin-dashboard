import React, { SFC } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import Icon from '../../Icon';
import Button from '../../Button';

import Text from './ValueTypes/Text';
import ChoiceFromData from './ValueTypes/ChoiceFromData';

import { FilterProps } from '../../../resources/interfaces/filterMeta';
import Bool from './ValueTypes/Bool';

const StyledFilterOptions = styled.div`
  display: flex;
  align-items: center;
  .input-wrapper {
    background: ${props => props.theme.white};
    border: 1px solid ${props => props.theme.greyLight};
    box-sizing: border-box;
    height: 34px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    input {
      height: 34px;
      cursor: default;
    }
  }
  ,
  .select__control {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .auto-complete {
    input {
      border-right: 0;
      border-radius: 4px;
    }
  }
  .remove-btn {
    button {
      border: none;
      &:hover {
        border: none;
      }
    }
  }
  .focus {
    border: 1px solid ${props => props.theme.lightBlue};
  }
`;

export type Props = {
  filterValue: string[];
  filters: FilterProps[];
  index: number;
  setFilterValue: React.Dispatch<any>;
  uniqueValues: string[];
  filter?: FilterProps;
  setFilters?: (e: any) => void;
  placeholder?: string;
};

export const getComponent = (containType: string, props: Props) => {
  switch (containType) {
    case 'CHOICE_FROM_DATA':
      return <ChoiceFromData {...props} />;
    case 'BOOL':
      return <Bool {...props} />;
    default:
    case 'TEXT':
      return <Text {...props} />;
  }
};

export const Values: SFC<Props & { containType: string }> = ({
  containType,
  ...props
}) => {
  const { filters, filter, setFilters } = props;

  return (
    <StyledFilterOptions>
      <div>{getComponent(containType, props)}</div>
      <div style={{ paddingLeft: 10 }} className='remove-btn'>
        <Button
          styleType='tertiary'
          onClick={() => {
            const currentIndex = _.findIndex(filters, filter);
            if (currentIndex > -1) {
              filters.splice(currentIndex, 1);
            }
            if (filters.length === 0 && setFilters) {
              setFilters([{ property: '', operatorName: '', value: [''] }]);
            } else if (setFilters) {
              setFilters([...filters]);
            }
          }}
          size='small'
          iconOnly={true}
        >
          <Icon name='trash' />
        </Button>
      </div>
    </StyledFilterOptions>
  );
};

export default Values;
