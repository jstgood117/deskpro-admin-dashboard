import React, { SFC } from 'react';
import styled from 'styled-components';

import Icon from '../../../Icon';
import Input from '../../../Input';
import Button from '../../../Button';

import { Props } from './types';

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

export const Text: SFC<Props> = ({
  filter,
  filters,
  filterValue,
  index,
  setFilterValue,
  setFilters
}) => {
  return (
    <StyledFilterOptions>
      <div>
        <Input
          inputType='secondary'
          style={{ minWidth: 218 }}
          value={
            filter && filter.value !== undefined ? filter.value : filterValue
          }
          onClear={() => {
            filters[index].value = '';
            setFilterValue('');
          }}
          showClear={true}
          onChange={event => {
            filters[index].value = event.target.value;
            setFilterValue(event.target.value);
          }}
        />
      </div>
      <div style={{ paddingLeft: 10 }} className='remove-btn'>
        <Button
          styleType='tertiary'
          onClick={() => {
            const currentIndex = filters.indexOf(filter);
            if (currentIndex > -1) {
              filters.splice(currentIndex, 1);
            }
            if (filters.length === 0 && setFilters) {
              setFilters([{ property: '', operatorName: '', value: '' }]);
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

export default Text;