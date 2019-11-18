import React, { SFC, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';

import { FilterType } from '../../services/filters/types';
import { operators } from '../../services/filters/operators';

import SearchBox from '../SearchBox';
import Button from '../Button';
import Icon from '../Icon';
import { convertRuleSchema } from '../RuleBuilder/utils';
import { testFilterMeta } from '../../resources/constants/mock/testFilterMeta';
import { IFilterProps } from '../../resources/interfaces/filterMeta';
import FilterBox from '../FilterBox';
import { dpstyle } from '../Styled';
import FilterItem from '../FilterItem';

const SortItems = [{ link: 'Sort1' }, { link: 'Sort2' }, { link: 'Sort3' }];
const GroupItems = [{ link: 'Group1' }, { link: 'Group2' }, { link: 'Group3' }];
const ViewItems = [{ link: 'View1' }, { link: 'View2' }];

const StyledTableAction = styled(dpstyle.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 3px 10px rgba(28, 62, 85, 0.1);
  border-radius: 4px;
  padding: 10px;
`;
const TableItems = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;
const FilterItems = styled(dpstyle.div)`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 11px;
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

interface IFilterButton {
  active: boolean;
  existing: boolean;
}
const initialFilters: IFilterProps[] = [
  { property: '', option: '', filterKey: '', applied: false }
];

const StyledFilterButton = styled(dpstyle.div)<IFilterButton>`
  button {
    color: ${props =>
      (props.active || props.existing) && props.theme.activeColour};
    path {
      fill: ${props =>
        (props.active || props.existing) && props.theme.activeColour};
    }
    border: ${props =>
      (props.active || props.existing) &&
      `1px solid ${props.theme.activeColour}`};
    background: ${props =>
      (props.active || props.existing) && props.theme.hoverColour};
  }
  .add-btn {
    button {
      border-top-right-radius: ${props => props.existing && 0}px;
      border-bottom-right-radius: ${props => props.existing && 0}px;
      border-right: ${props => props.existing && 0}px;
    }
  }
  .close-btn {
    button {
      border-top-left-radius: ${props => props.existing && 0}px;
      border-bottom-left-radius: ${props => props.existing && 0}px;
    }
  }
`;
const TableActions: SFC<IProps> = props => {
  const [Group, setGroupValue] = useState('');
  const [Sort, setSortValue] = useState('');
  const [View, setViewValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [openedView, openView] = useState(false);
  const [openedSort, clickButtonSort] = useState(false);
  const [openedGroup, clickButtonGroup] = useState(false);
  const [openedFilter, clickOpenFilter] = useState(false);
  const [applied, apply] = useState(false);
  const [filters, setFilters] = useState(initialFilters);

  const applyFilter = () => {
    filters.map(filter => {
      if (filter.option && filter.property && filter.filterKey)
        filter.applied = true;
      return true;
    });
    setFilters && setFilters([...filters]);
    apply(true);
    clickOpenFilter(false);
  };

  const cancelFilter = () => {
    for (let i = 0; i < filters.length; i++) {
      const filter = filters[i];
      if (!filter.applied) {
        onRemove(filter);
        i = -1;
      }
    }
    clickOpenFilter(false);
  };

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

  const onRemove = useCallback(
    filter => {
      const currentIndex = filters.indexOf(filter);
      if (currentIndex > -1) {
        filters.splice(currentIndex, 1);
      }
      if (filters.length === 0) {
        setFilters &&
          setFilters([
            { property: '', option: '', filterKey: '', applied: false }
          ]);
      } else {
        setFilters && setFilters([...filters]);
      }
    },
    [filters]
  );

  return (
    <StyledTableAction>
      <TableItems>
        <FlexStyled style={{ flex: 5, alignItems: 'center' }}>
          <FlexStyled>
            <SearchBox
              placeholder='Search Box'
              value={searchValue}
              onChange={handleSearchChange}
              onClear={() => setSearchValue('')}
            />
          </FlexStyled>
          {props.filterMenu && (
            <FlexStyled style={{ paddingLeft: 10, position: 'relative' }}>
              <StyledFilterButton
                active={openedFilter}
                existing={filters[0].applied}
              >
                <Button
                  className='add-btn'
                  styleType='secondary'
                  onClick={() => {
                    clickOpenFilter(!openedFilter);
                  }}
                  size='medium'
                >
                  <Icon name='filter' />
                  Filter{' '}
                  {filters[0].applied &&
                    `(${filters.filter(filter => filter.applied === true).length})`}
                </Button>
                {filters[0].applied && (
                  <Button
                    className='close-btn'
                    styleType='secondary'
                    onClick={() => {
                      setFilters([
                        {
                          property: '',
                          option: '',
                          filterKey: '',
                          applied: false
                        }
                      ]);
                    }}
                    size='medium'
                    iconOnly={true}
                  >
                    <Icon name='close' />
                  </Button>
                )}
              </StyledFilterButton>
              <FilterContainer>
                {openedFilter && (
                  <FilterBox
                    filters={filters}
                    setFilters={setFilters}
                    schema={convertRuleSchema(
                      'admin_tickets.some_group_title',
                      testFilterMeta
                    )}
                    cancel={cancelFilter}
                    apply={applyFilter}
                  />
                )}
              </FilterContainer>
            </FlexStyled>
          )}
        </FlexStyled>
        <FlexStyled style={{ flex: 5, flexFlow: 'row-reverse' }}>
          {props.viewMenu && (
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
          )}
          {props.groupMenu && (
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
          )}
          {props.sortMenu && (
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
          )}
        </FlexStyled>
      </TableItems>
      <FilterItems>
        {applied &&
          filters.map(
            (filter, index: number) =>
              filter.option &&
              filter.property &&
              filter.filterKey &&
              filter.applied && (
                <div style={{ paddingRight: 8 }} key={index}>
                  <FilterItem
                    filter={filter}
                    onRemove={() => {
                      onRemove(filter);
                    }}
                  />
                </div>
              )
          )}
      </FilterItems>
    </StyledTableAction>
  );
};

export default TableActions;
