import React, { SFC } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { uniqueId } from 'lodash';

import { dpstyle } from '../Styled';
import Button from '../Button';
import Icon from '../Icon';
import { IItemType } from '../AutoComplete/AutoComplete';
import FilterOptions from '../FilterOptions';

export type IProps = {
  properties: IItemType[];
  options: IItemType[];
  filters: IFilterProps[];
  setFilters: (e: any) => void;
};

export type IFilterProps = {
  property: string;
  option: string;
  filterKey: string;
};
const StyledBox = styled(dpstyle.div)`
  width: fit-content;
  padding: 20px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  .add-filter {
    button {
      border: none;
      &:hover {
        border: none;
      }
    }
  }
`;

const FilterBox: SFC<IProps> = ({
  properties,
  options,
  filters,
  setFilters
}) => {
  return (
    <StyledBox>
      {filters.length > 0 &&
        filters.map((filter, index: number) => {
          return (
            <div
              style={{ display: 'flex', alignItems: 'center', paddingBottom: 14 }}
              key={uniqueId()}
            >
              <FilterOptions
                properties={properties}
                options={options}
                placeholder='Select Property'
                setFilters={setFilters}
                filters={filters}
                index={index}
                filter={filter}
              />
            </div>
          );
        })}
      <div style={{ paddingTop: 2 }} className='add-filter'>
        <Button styleType='tertiary' onClick={action('clicked')} size='small'>
          <Icon name='plus' />
          Add Filter
        </Button>
      </div>
      <div style={{ paddingTop: 44, display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Button styleType='primary' onClick={action('clicked')} size='medium'>
            Apply Filter
          </Button>
        </div>
        <div>
          <Button
            styleType='tertiary'
            onClick={action('clicked')}
            size='medium'
          >
            Cancel
          </Button>
        </div>
      </div>
    </StyledBox>
  );
};

export default FilterBox;
