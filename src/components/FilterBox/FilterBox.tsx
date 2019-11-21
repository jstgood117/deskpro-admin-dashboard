import React, { SFC, useCallback } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { uniqueId } from 'lodash';

import Icon from '../Icon';
import Button from '../Button';
import { dpstyle } from '../Styled';
import FilterOptions from '../FilterOptions';
import { DeskproAdminTheme } from '../Theme';
import { IFilterProps } from '../../resources/interfaces/filterMeta';

export type IProps = {
  filters: IFilterProps[];
  setFilters: (e: any) => void;
  options: any;
  cancel?: () => void;
  apply?: () => void;
};

const StyledBox = styled(dpstyle.div)`
  width: fit-content;
  padding: 20px;
  background: ${props => props.theme.white};
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
  filters,
  setFilters,
  options,
  cancel,
  apply
}) => {

  const onAdd = useCallback(() => {
    const lastIndex = filters.length - 1;
    filters[lastIndex].value &&
      filters[lastIndex].operatorName &&
      filters[lastIndex].columnName &&
      setFilters([...filters, { columnName: '', operatorName: '', value: '' }]);
  }, [filters, setFilters]);
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
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
                  options={options}
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
            <Button
              styleType='primary'
              onClick={() => {
                apply();
              }}
              size='medium'
            >
              Apply Filter
            </Button>
          </div>
          <div>
            <Button
              styleType='tertiary'
              onClick={() => {
                cancel();
              }}
              size='medium'
            >
              Cancel
            </Button>
          </div>
        </div>
      </StyledBox>
    </ThemeProvider>
  );
};

export default FilterBox;
