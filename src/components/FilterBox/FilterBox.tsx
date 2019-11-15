import React, { SFC, useCallback } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { uniqueId } from 'lodash';

import Icon from '../Icon';
import Button from '../Button';
import { dpstyle } from '../Styled';
import FilterOptions from '../FilterOptions';
import { IRuleBuilderSchema } from '../../resources/interfaces/filterMeta';

export type IProps = {
  filters: IFilterProps[];
  setFilters: (e: any) => void;
  schema: IRuleBuilderSchema;
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

const FilterBox: SFC<IProps> = ({ filters, setFilters, schema }) => {
  const onAdd = useCallback(() => {
    const lastIndex = filters.length - 1;
    filters[lastIndex].filterKey &&
      filters[lastIndex].option &&
      filters[lastIndex].property &&
      setFilters([...filters, { property: '', option: '', filterKey: '' }]);
  }, [filters, setFilters]);
  return (
    <StyledBox>
      {filters.length > 0 &&
        filters.map((filter, index: number) => {
          return (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingBottom: 14
              }}
              key={uniqueId()}
            >
              <FilterOptions
                placeholder='Select Property'
                setFilters={setFilters}
                filters={filters}
                index={index}
                filter={filter}
                schema={schema}
              />
            </div>
          );
        })}
      <div style={{ paddingTop: 2 }} className='add-filter'>
        <Button styleType='tertiary' onClick={onAdd} size='small'>
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
