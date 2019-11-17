import React, { SFC, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';

// import { testFilterMeta, operatorOptions, ValueType, OperatorTypes } from '../../resources/constants/mock/testFilterMeta';
import { FilterType } from '../../services/filters/types';
import { operators } from '../../services/filters/operators';

import SearchBox from '../SearchBox';
import Button from '../Button';
import Icon from '../Icon';

import { convertRuleSchema } from '../RuleBuilder/utils';
import { testFilterMeta } from '../../resources/constants/mock/testFilterMeta';
import { IFilterProps } from '../../resources/interfaces/filterMeta';
import FilterBox from '../FilterBox';
// import { addFilter, removeFilter } from '../../services/filters';
export interface IProps {}

const SortItems = [{ link: 'Sort1' }, { link: 'Sort2' }, { link: 'Sort3' }];
const GroupItems = [{ link: 'Group1' }, { link: 'Group2' }, { link: 'Group3' }];
const ViewItems = [{ link: 'View1' }, { link: 'View2' }];

const StyledTableAction = styled.div`
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(28, 62, 85, 0.1);
  border-radius: 4px;
  height: 54px;
  position: relative;
`;
const FlexStyled = styled.div`
  display: flex;
`;
const FilterContainer = styled.div`
  position: absolute;
  top: 34px;
  bottom: 0;
  left: 10px;
  right: 0;
  background-color: #fff;
`;

export interface IProps {
  showSearch: boolean;
  filterMenu: boolean;
  sortMenu: boolean;
  groupMenu: boolean;
  viewMenu: boolean;
  onSearchChange?: (e: any) => void;
  filters?: FilterType[];
  onFilterChange?: (rules: FilterType[]) => void;
}
const initialFilters: IFilterProps[] = [
  { property: '', option: '', filterKey: '' }
];

const TableActions: SFC<IProps> = props => {
  const [Group, setGroupValue] = useState('');
  const [Sort, setSortValue] = useState('');
  const [View, setViewValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [openedView, openView] = useState(false);
  const [openedSort, clickButtonSort] = useState(false);
  const [openedGroup, clickButtonGroup] = useState(false);
  const [openedFilter, clickOpenFilter] = useState(false);
  const [filters, setFilters] = useState(initialFilters);

  const onSearchChange = (value: string) => {
    const { onFilterChange } = props;
    if (onFilterChange) {
      onFilterChange([
        {
          id: '*-CONTAINS-1',
          columnName: '*',
          operatorName: 'CONTAINS',
          operator: operators.CONTAINS,
          value
        }
      ]);
    }
  };

  const debounceOnSearchChange = useCallback(debounce(onSearchChange, 300), []);

  const handleSearchChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const { value } = event.currentTarget;
    setSearchValue(value);

    debounceOnSearchChange(value);
  };

  return (
    <StyledTableAction>
      <FlexStyled style={{ flex: 5, alignItems: 'center' }}>
        <FlexStyled style={{ paddingLeft: 10 }}>
          <SearchBox
            placeholder='Search Box'
            value={searchValue}
            onChange={handleSearchChange}
            onClear={() => setSearchValue('')}
          />
        </FlexStyled>
        {props.filterMenu ? (
          <FlexStyled style={{ paddingLeft: 10, position: 'relative' }}>
            <Button
              styleType='secondary'
              onClick={() => {
                clickOpenFilter(!openedFilter);
              }}
              size='medium'
            >
              <Icon name='filter' />
              Filter
            </Button>
            <FilterContainer>
              {openedFilter && (
                <FilterBox
                  filters={filters}
                  setFilters={setFilters}
                  schema={convertRuleSchema(
                    'admin_tickets.some_group_title',
                    testFilterMeta
                  )}
                  cancel={clickOpenFilter}
                />
              )}
            </FilterContainer>
          </FlexStyled>
        ) : null}
      </FlexStyled>
      <FlexStyled style={{ flex: 5, flexFlow: 'row-reverse' }}>
        {props.viewMenu ? (
          <FlexStyled style={{ paddingRight: 10 }}>
            <Button
              styleType='secondary'
              onClick={() => {
                openView(!openedView);
              }}
              size='medium'
              opened={openedView}
              items={ViewItems}
              dropdownValue={View}
              onSelect={(val: any) => setViewValue(val)}
            >
              <Icon name='view' />
              {View ? View.link : 'View'}
              <Icon name='downVector' />
            </Button>
          </FlexStyled>
        ) : null}
        {props.groupMenu ? (
          <FlexStyled style={{ paddingRight: 10 }}>
            <Button
              styleType='secondary'
              onClick={() => {
                clickButtonGroup(!openedGroup);
              }}
              size='medium'
              opened={openedGroup}
              items={GroupItems}
              dropdownValue={Group}
              onSelect={(val: any) => setGroupValue(val)}
            >
              <Icon name='group' />
              {Group ? Group.link : 'Group'}
              <Icon name='downVector' />
            </Button>
          </FlexStyled>
        ) : null}
        {props.sortMenu ? (
          <FlexStyled style={{ paddingRight: 10 }}>
            <Button
              styleType='secondary'
              onClick={() => {
                clickButtonSort(!openedSort);
              }}
              size='medium'
              opened={openedSort}
              items={SortItems}
              dropdownValue={Sort}
              onSelect={(val: any) => setSortValue(val)}
            >
              <Icon name='sort' />
              {Sort ? Sort.link : 'Sort'}
              <Icon name='downVector' />
            </Button>
          </FlexStyled>
        ) : null}
      </FlexStyled>
    </StyledTableAction>
  );
};

export default TableActions;
