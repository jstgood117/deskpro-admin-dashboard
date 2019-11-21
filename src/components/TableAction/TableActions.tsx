import React, { SFC, useState, useCallback } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';

import { testFilterMeta } from '../../resources/constants/mock/testFilterMeta';
import { IFilterProps } from '../../resources/interfaces/filterMeta';
import { ITableSetup } from '../../resources/interfaces';

import { dpstyle } from '../Styled';
import SearchBox from '../SearchBox';
import Button from '../Button';
import Icon from '../Icon';
import FilterBox from '../FilterBox';
import FilterItem from '../FilterItem';

import OrderableMenu from '../Menu/OrderableMenu';
import { testOrderableMenuItems } from '../../resources/constants/constants';
import { transformColumnData } from '../Table/Table';

const SortItems = [{ link: 'Sort1' }, { link: 'Sort2' }, { link: 'Sort3' }];
const GroupItems = [{ link: 'Group1' }, { link: 'Group2' }, { link: 'Group3' }];

const StyledTableAction = styled(dpstyle.div)`
  position: absolute;
  right: 0;
  left: 0;
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
  .dropdownContent {
    top: 34px;
  }
`;
const FilterContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 34px;
  bottom: 0;
  left: 10px;
  right: 0;
  background-color: #fff;
`;

export interface IProps {
  intl: any;
  showSearch: boolean;
  filterMenu: boolean;
  sortMenu: boolean;
  groupMenu: boolean;
  viewMenu: boolean;
  filters?: IFilterProps[];
  onFilterChange?: (rules: IFilterProps[]) => void;
  onSearchChange?: (value: string, filters: IFilterProps[]) => void;
  tableDef: ITableSetup;
}

interface IFilterButton {
  active: boolean;
  existing: boolean;
}
const initialFilters: IFilterProps[] = [
  { columnName: '', operatorName: '', value: '', applied: false }
];

const StyledFilterButton = styled(dpstyle.div)<IFilterButton>`
  display: flex;
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
      min-width: ${props => props.existing && 100}px;
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
const TableActions: SFC<IProps> = ({
  intl,
  onFilterChange,
  onSearchChange,
  tableDef,
  ...props
}) => {

  const [Group, setGroupValue] = useState('');
  const [Sort, setSortValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [openedSort, clickButtonSort] = useState(false);
  const [openedGroup, clickButtonGroup] = useState(false);
  const [openedFilter, clickOpenFilter] = useState(false);
  const [applied, apply] = useState(false);
  const [filters, setFilters] = useState(initialFilters);
  const [value, setValue] = useState();
  const [SortList, SetList] = useState(testOrderableMenuItems);
  const checkedState: { [key: string]: boolean } = {};
  const [checked, setChecked] = useState(checkedState);

  const columnData = transformColumnData([...tableDef.columns], intl);

  const getColumnNameFromPath = (fullPath: string) => {

    const columnPath = fullPath.split('.').pop();

    const column = columnData.find((_col: any) => _col.accessor === columnPath);
    return column ? column.Header : columnPath;
  };

  const applyFilter = () => {
    filters.map(filter => {
      if (filter.operatorName && filter.columnName && filter.value)
        filter.applied = true;
      return true;
    });
    setFilters && setFilters([...filters]);

    if(onFilterChange) {
      onFilterChange(filters);
    }

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

    if(onFilterChange) {
      onFilterChange(filters);
    }

    clickOpenFilter(false);
  };

  const _onSearchChange = (_value: string) => {
    if (onSearchChange) {
      onSearchChange(_value, filters);
    }
  };

  const debounceOnSearchChange = useCallback(debounce(_onSearchChange, 300), []);

  const handleSearchChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const searchInputValue = event.currentTarget.value;
    setSearchValue(searchInputValue);

    debounceOnSearchChange(searchInputValue);
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
            { columnName: '', operatorName: '', value: '', applied: false }
          ]);
      } else {
        setFilters && setFilters([...filters]);
      }

      if(onFilterChange) {
        onFilterChange(filters);
      }
    },
    [filters, onFilterChange]
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
                    `(${
                      filters.filter(filter => filter.applied === true).length
                    })`}
                </Button>
                {filters[0].applied && (
                  <Button
                    className='close-btn'
                    styleType='secondary'
                    onClick={() => {
                      setFilters([
                        {
                          columnName: '',
                          operatorName: '',
                          value: '',
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
                    options={testFilterMeta}
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
            <FlexStyled>
              <OrderableMenu
                iconName='view'
                label={value ? value['name'] : 'View'}
                value={value}
                onSelect={val => setValue(val)}
                order={val => SetList(val)}
                initialList={testOrderableMenuItems}
                menuItems={SortList}
                setChecked={setChecked}
                checked={checked}
                size='medium'
              />
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
              filter.value &&
              filter.columnName &&
              filter.operatorName &&
              filter.applied && (
                <div style={{ paddingRight: 8 }} key={index}>
                  <FilterItem
                    columnName={getColumnNameFromPath(filter.columnName)}
                    operatorName={filter.operatorName}
                    value={filter.value}
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

export default injectIntl(TableActions);
