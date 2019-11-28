import React, { SFC, useState, useCallback, useContext, useEffect } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';
import { injectIntl } from 'react-intl';
import {
  IMenuItemProps,
  ColumnOrder,
  KeyValue
} from '../../resources/interfaces';

import {
  FilterProps,
  FilterMeta
} from '../../resources/interfaces/filterMeta';

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
import { generateViewList } from './generateViewList';

const SortItems = [{ link: 'Sort1' }, { link: 'Sort2' }, { link: 'Sort3' }];
const GroupItems = [{ link: 'Group1' }, { link: 'Group2' }, { link: 'Group3' }];

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
  intl: any;
  showSearch: boolean;
  filterMenu: boolean;
  sortMenu: boolean;
  groupMenu: boolean;
  viewMenu: boolean;
  onOrderChange: (columnOrder: ColumnOrder[]) => void;
}

interface IFilterButton {
  active: boolean;
  existing: boolean;
}
const initialFilter: FilterProps[] = [
  { property: '', operatorName: '', value: '', applied: false }
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
const TableActions: SFC<IProps> = ({ intl, onOrderChange, ...props }) => {
  const context: StandardTableContextValues = useContext(StandardTableContext);
  const {
    onFilterChange,
    onSearchChange,
    filterDef,
    tableDef,
    initialColumnOrder
  } = context;

  const {
    columnsViewList,
    checkedState
  } = generateViewList(tableDef);

  const [Group, setGroupValue] = useState('');
  const [Sort, setSortValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [openedSort, clickButtonSort] = useState(false);
  const [openedGroup, clickButtonGroup] = useState(false);
  const [openedFilter, clickOpenFilter] = useState(false);
  const [applied, apply] = useState(false);
  const [internalFilters, setFilters] = useState(initialFilter);
  const [value, setValue] = useState();
  const [SortList, SetList] = useState(columnsViewList);
  const [checked, setChecked] = useState<KeyValue>(checkedState);
  const [initialChecked] = useState<KeyValue>(checkedState);
  const [columnOrder, setColumnOrder] = useState<ColumnOrder[]>(initialColumnOrder);
  const [resetColumnOrder] = useState<IMenuItemProps[]>(columnsViewList);

  useEffect(() => {
    setFilters([
      { property: '', operatorName: '', value: '', applied: false }
    ]);
  }, []);

  useEffect(() => {

    const _columnOrder: ColumnOrder[] = Array(SortList.length);
    SortList.forEach((_column: IMenuItemProps, index: number) => {

      _columnOrder[index] = {
        column:_column.name,
        show: checked[_column.key]
      };

    });

    setColumnOrder(_columnOrder);

  }, [checked, SortList]);

  useEffect(() => {
    onOrderChange(columnOrder);
  }, [columnOrder, onOrderChange]);

  const getFilterTitle = (path: string) => {
    const match = filterDef.find((_filter: FilterMeta) => _filter.path === path);
    return match ? match.title : path;
  };

  const applyFilter = () => {
    internalFilters.map(filter => {
      if (filter.operatorName && filter.property && filter.value)
        filter.applied = true;
      return true;
    });
    setFilters && setFilters(internalFilters);

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

  const _onSearchChange = (_value: string) => {

    if (onSearchChange) {
      onSearchChange(_value, internalFilters);
    }
  };

  const debounceOnSearchChange = useCallback(
    debounce(_onSearchChange, 300),
    [internalFilters]
  );

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
        setFilters &&
          setFilters([
            { property: '', operatorName: '', value: '', applied: false }
          ]);
      } else {
        setFilters && setFilters([...internalFilters]);
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
              onClear={() => setSearchValue('')}
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
                      internalFilters.filter(filter => filter.applied === true).length
                    })`}
                </Button>
                {internalFilters[0].applied && (
                  <Button
                    className='close-btn'
                    styleType='secondary'
                    onClick={() => {
                      setFilters([
                        {
                          property: '',
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
                    filters={internalFilters}
                    setFilters={setFilters}
                    options={filterDef}
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
                initialList={resetColumnOrder}
                menuItems={SortList}
                setChecked={setChecked}
                checked={checked}
                initialChecked={initialChecked}
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
