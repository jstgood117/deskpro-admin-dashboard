import React, { FC, useState, useCallback, useContext, useEffect } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { injectIntl, WrappedComponentProps } from 'react-intl';
import { IMenuItemProps } from '../../resources/interfaces';
import { KeyValue, ColumnOrder } from '../../types';

import { FilterProps, FilterMeta } from '../../resources/interfaces/filterMeta';

import {
  StandardTableContext,
  StandardTableContextValues
} from '../../contexts/StandardTableContext';

import { dpstyle } from '../Styled';
import SearchBox from '../SearchBox';
import Button from '../Button';
import Icon from '../Icon';
import FilterBox from '../FilterBox';
import FilterItem from '../FilterItem';
import OrderableMenu from '../Menu/OrderableMenu';
import Menu from '../Menu';
import {
  generateViewList,
  generatSortMenuItems,
  generateGroupMenuItems,
  generatFilterOptions
} from './functions';
import { SortType } from '../Table/types';

const StyledTableAction = styled(dpstyle.div)`
  z-index: 1;
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
  flex-wrap: wrap;
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
  z-index: 2;
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
  sortBy?: SortType[];
  onOrderChange: (columnOrder: ColumnOrder[]) => void;
  onSortChange: (sortItems: SortType[]) => void;
  onGroupByChange: (columnNames: string[]) => void;
  getUniqueValues?: (columnName: string) => string[];
}

interface IFilterButton {
  active: boolean;
  existing: boolean;
}

const initialFilter: FilterProps[] = [
  { property: '', operatorName: '', value: [''], applied: false }
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
const TableActions: FC<IProps & WrappedComponentProps> = ({
  intl,
  onOrderChange,
  onSortChange,
  onGroupByChange,
  sortBy,
  getUniqueValues,
  ...props
}) => {
  const context: StandardTableContextValues = useContext(StandardTableContext);
  const {
    onFilterChange,
    onSearchChange,
    filterDef,
    tableDef,
    initialColumnOrder
  } = context;

  const { columnsViewList, checkedState } = generateViewList(tableDef);

  const [Sort, setSortValue] = useState<
    { link: string; label: string; desc?: boolean } | string
  >('');
  const [searchValue, setSearchValue] = useState('');
  const [openedSort, clickButtonSort] = useState(false);
  const [openedFilter, clickOpenFilter] = useState(false);
  const [applied, apply] = useState(false);
  const [internalFilters, setFilters] = useState(initialFilter);
  const [sortList, setList] = useState(columnsViewList);
  const [value, setValue] = useState();
  const [groupValue, setGroupValue] = useState();

  const [sortMenuItems, setSortMenuItems] = useState(
    generatSortMenuItems(tableDef, intl)
  );
  // eslint-disable-next-line
  const [groupMenuItems, setGroupMenuItems] = useState(
    generateGroupMenuItems({
      tableDef,
      sortMenuItems,
      intl
    })
  );
  const [checked, setChecked] = useState<KeyValue>(checkedState);
  const [initialChecked] = useState<KeyValue>(checkedState);
  const [columnOrder, setColumnOrder] = useState<ColumnOrder[]>(
    initialColumnOrder
  );
  const [resetColumnOrder] = useState<IMenuItemProps[]>(columnsViewList);
  useEffect(() => {
    setFilters([
      { property: '', operatorName: '', value: [''], applied: false }
    ]);
  }, []);

  useEffect(() => {
    const _columnOrder: ColumnOrder[] = Array(sortList.length);
    sortList.forEach((_column: IMenuItemProps, index: number) => {
      _columnOrder[index] = {
        column: _column.name,
        show: checked[_column.key]
      };
    });

    setColumnOrder(_columnOrder);
  }, [checked, sortList]);

  useEffect(() => {
    onOrderChange(columnOrder);
    const showedColumns: string[] = [];
    columnOrder.map(columnInfo => {
      if (columnInfo.show) {
        showedColumns.push(columnInfo.column);
      }
      return true;
    });
    const newSortMenuItems = generatSortMenuItems(tableDef, intl).filter(
      obj => {
        return showedColumns.includes(obj.link);
      }
    );
    setSortMenuItems(newSortMenuItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnOrder, onOrderChange]);

  useEffect(() => {
    let link = '';
    let desc = false;
    if (Array.isArray(sortBy) && sortBy.length) {
      link = intl.formatMessage({ id: sortBy[0].id });
      desc = sortBy[0].desc;
    }
    setSortValue(link ? { link, label: link, desc } : link);
  }, [intl, sortBy]);

  const getFilterTitle = (path: string) => {
    const match = filterDef.find(
      (_filter: FilterMeta) => _filter.path === path
    );
    return match ? match.title : path;
  };

  const applyFilter = () => {
    internalFilters.map(filter => {
      if (filter.operatorName && filter.property && filter.value)
        filter.applied = true;
      return true;
    });
    if (setFilters) {
      setFilters(internalFilters);
    }

    if (onFilterChange) {
      onFilterChange(internalFilters);
    }

    apply(true);
    clickOpenFilter(false);
  };

  const cancelFilter = () => {
    for (let i = 0; i < internalFilters.length; i++) {
      const filter = internalFilters[i];
      if (!filter.applied) {
        onRemove(filter);
        i = -1;
      }
    }

    if (onFilterChange) {
      onFilterChange(internalFilters);
    }

    clickOpenFilter(false);
  };

  const resetFilters = () => {
    const initialFilters = [
      {
        property: '',
        operatorName: '',
        value: [''],
        applied: false
      }
    ];

    setFilters(initialFilters);

    if (onFilterChange) {
      onFilterChange(initialFilters);
    }
  };

  const _onSearchChange = (_value: string) => {
    if (onSearchChange) {
      onSearchChange(_value, internalFilters);
    }
  };

  const handleSortChange = (val: any) => {
    const id = val.link;
    const link = intl.formatMessage({ id });
    let desc = false;
    if (typeof Sort !== 'string' && Sort.link === link) {
      desc = !Sort.desc;
    }
    if (val.sort) {
      desc = val.sort !== 'asc';
    }

    onSortChange([{ id, desc }]);

    setSortValue({
      ...val,
      link,
      desc
    });
  };

  const handleGroupChange = (val: any) => {
    if (val.sortable) {
      const { name: label, column: link, ...item } = val;
      return handleSortChange({ link, label, ...item });
    }
    const { column } = val;
    const isSelectedGroupBy = val === groupValue;

    onGroupByChange(isSelectedGroupBy ? [] : [column]);
    setGroupValue(isSelectedGroupBy ? '' : val);
  };

  const debounceOnSearchChange = useCallback(debounce(_onSearchChange, 300), [
    internalFilters
  ]);

  const handleSearchChange = (
    event: React.SyntheticEvent<HTMLInputElement>
  ) => {
    const searchInputValue = event.currentTarget.value;
    setSearchValue(searchInputValue);

    debounceOnSearchChange(searchInputValue);
  };

  const onRemove = useCallback(
    filter => {
      const currentIndex = internalFilters.indexOf(filter);
      if (currentIndex > -1) {
        internalFilters.splice(currentIndex, 1);
      }
      if (internalFilters.length === 0) {
        if (setFilters) {
          setFilters([
            { property: '', operatorName: '', value: [''], applied: false }
          ]);
        }
      } else {
        if (setFilters) {
          setFilters([...internalFilters]);
        }
      }

      if (onFilterChange) {
        onFilterChange(internalFilters);
      }
    },
    [internalFilters, onFilterChange]
  );

  return (
    <StyledTableAction className='table-actions'>
      <TableItems>
        <FlexStyled style={{ flex: 5, alignItems: 'center' }}>
          <FlexStyled>
            <SearchBox
              placeholder='Search Box'
              value={searchValue}
              onChange={handleSearchChange}
              onClear={() => {
                setSearchValue('');
                debounceOnSearchChange('');
              }}
            />
          </FlexStyled>
          {props.filterMenu && (
            <FlexStyled style={{ paddingLeft: 10, position: 'relative' }}>
              <StyledFilterButton
                active={openedFilter}
                existing={internalFilters[0].applied}
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
                  {internalFilters[0].applied &&
                    `(${
                      internalFilters.filter(filter => filter.applied === true)
                        .length
                    })`}
                </Button>
                {internalFilters[0].applied && (
                  <Button
                    className='close-btn'
                    styleType='secondary'
                    onClick={() => {
                      resetFilters();
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
                    filters={internalFilters}
                    setFilters={setFilters}
                    options={generatFilterOptions(filterDef, intl)}
                    cancel={cancelFilter}
                    apply={applyFilter}
                    getUniqueValues={getUniqueValues}
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
                label={'admin_common.table.view'}
                order={val => setList(val)}
                onSelect={val => setValue(val)}
                value={value}
                initialList={resetColumnOrder}
                menuItems={sortList}
                setChecked={setChecked}
                checked={checked}
                initialChecked={initialChecked}
                size='medium'
              />
            </FlexStyled>
          )}
          {props.groupMenu && (
            <FlexStyled style={{ paddingRight: 10 }}>
              <Menu
                name='group'
                menuItems={groupMenuItems}
                iconName='group'
                value={groupValue}
                size='medium'
                subMenuDirection='left'
                label='admin_agents_groups.group'
                onSelect={handleGroupChange}
              />
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
                items={sortMenuItems}
                dropdownValue={Sort}
                onSelect={handleSortChange}
                name={
                  typeof Sort !== 'string' && Sort.desc ? 'sort-desc' : 'sort'
                }
              >
                <Icon name='sort' />
                Sort
                <Icon name='downVector' />
              </Button>
            </FlexStyled>
          )}
        </FlexStyled>
      </TableItems>
      {internalFilters[0].applied && (
        <FilterItems>
          {applied &&
            internalFilters.map(
              (filter, index: number) =>
                filter.value &&
                filter.property &&
                filter.operatorName &&
                filter.applied && (
                  <div style={{ padding: 4 }} key={index}>
                    <FilterItem
                      property={getFilterTitle(filter.property)}
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
      )}
    </StyledTableAction>
  );
};

export default injectIntl(TableActions);
