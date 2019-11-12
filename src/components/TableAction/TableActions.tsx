import React, { SFC, useState, useCallback } from 'react';
import { debounce, chain } from 'lodash';
import styled from 'styled-components';

// import { testFilterMeta, operatorOptions, ValueType, OperatorTypes } from '../../resources/constants/mock/testFilterMeta';
import { FilterType } from '../../services/filters/types';
import { operators } from '../../services/filters/operators';

import SearchBox from '../SearchBox';
import Button from '../Button';
import Icon from '../Icon';

import RuleBuilder from '../RuleBuilder/RuleBuilder';
import { IRuleValue } from '../RuleBuilder/interfaces';
import { initGroup, convertRuleSchema } from '../RuleBuilder/utils';
import { testFilterMeta } from '../../resources/constants/mock/testFilterMeta';
import { addFilter, removeFilter } from '../../services/filters';
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
  top: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
`;
const FilterContent = styled.div<{ active: boolean }>`
  opacity: ${props => (props.active ? 1 : 0)};
  box-shadow: 0px 3px 10px rgba(28, 62, 85, 0.1);
  padding: 10px;
`;
const ButtonContainer = styled.div`
  margin-top: 20px;
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

const TableActions: SFC<IProps> = props => {
  const [Group, setGroupValue] = useState('');
  const [Sort, setSortValue] = useState('');
  const [View, setViewValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [filterValue, setFilterValue] = useState<IRuleValue[]>([initGroup()]);
  const [openedView, openView] = useState(false);
  const [openedSort, clickButtonSort] = useState(false);
  const [openedGroup, clickButtonGroup] = useState(false);
  const [openedFilter, clickOpenFilter] = useState(false);

  const onSearchChange = (value: string) => {
    const { onFilterChange } = props;
    if (onFilterChange) {
      onFilterChange([{
        id:'*-CONTAINS',
        columnName:'*',
        operatorName:'CONTAINS',
        operator:operators.CONTAINS,
        value
      }]);
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

  const handleChangeFilter = (newValue: IRuleValue[]) => {
    const rules = chain(newValue)
    .flatMap(builderItem => builderItem.rules)
    .map((rule: any) => {
      return {
        id:`${rule.rule.propertyId}-${rule.rule.operator}`,
        columnName:rule.rule.propertyId,
        operatorName:rule.rule.operator,
        operator:() => true,
        value:rule.rule.value,
      };
    })
    .value();

    const { onFilterChange } = props;
    if(onFilterChange) { onFilterChange(rules); }

    setFilterValue(newValue);
  };

  const handleSaveFilter = () => {
    clickOpenFilter(false);
  };

  // console.log(props.onFilterChange); // Call this with id:string, operatorName:string, value:string
  // console.log(testFilterMeta); // This drives what can be rendered out for each filter
  // console.log(props.filters); // Current filters; Don't render any filters that start `id` with '*-'
  // console.log(operatorOptions); // All the Operator Options, dropdown ready!
  // console.log(OperatorTypes); // Types of Operators
  // console.log(ValueType); // Value types

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
          <FlexStyled style={{ paddingLeft: 10 }}>
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

      <FilterContainer>
        <FilterContent active={openedFilter}>
          <RuleBuilder
            value={filterValue}
            onChange={handleChangeFilter}
            schema={convertRuleSchema(
              'admin_tickets.some_group_title',
              testFilterMeta
            )}
          />
          <ButtonContainer>
            <Button styleType='primary' onClick={() => handleSaveFilter()}>
              Save
            </Button>
          </ButtonContainer>
        </FilterContent>
      </FilterContainer>
    </StyledTableAction>
  );
};

export default TableActions;