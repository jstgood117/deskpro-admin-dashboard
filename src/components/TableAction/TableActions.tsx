import React, { SFC, useState } from 'react';
import styled from 'styled-components';

import SearchBox from '../SearchBox';
import DropdownButton from '../Button/DropdownButton/DropdownButton';
import Button from '../Button';
import { action } from '@storybook/addon-actions';

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
`;
const FlexStyled = styled.div`
  display: flex;
`;

export interface IProps {
  showSearch: boolean;
  filterMenu: boolean;
  sortMenu: boolean;
  groupMenu: boolean;
  viewMenu: boolean;
  onSearchChange?: (e: any) => void;
}

const TableActions: SFC<IProps> = props => {
  const [Group, setGroupValue] = useState('');
  const [Sort, setSortValue] = useState('');
  const [View, setViewValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  return (
    <StyledTableAction>
      <FlexStyled style={{ flex: 5, alignItems: 'center' }}>
        <FlexStyled style={{ paddingLeft: 10 }}>
          <SearchBox
            placeholder='Search Box'
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
            onClear={() => setSearchValue('')}
          />
        </FlexStyled>
        {props.filterMenu ? (
          <FlexStyled style={{ paddingLeft: 10 }}>
            <Button
              styleType='secondary'
              onClick={action('clicked')}
              size='medium'
              icon='filter'
            >
              Filter
            </Button>
          </FlexStyled>
        ) : null}
      </FlexStyled>
      <FlexStyled style={{ flex: 5, flexFlow: 'row-reverse' }}>
        {props.viewMenu ? (
          <FlexStyled style={{ paddingRight: 10 }}>
            <DropdownButton
              label={View ? (View.link as any) : 'View'}
              iconName='view'
              size='medium'
              items={ViewItems}
              onSelect={val => setViewValue(val)}
              value={View}
            />
          </FlexStyled>
        ) : null}
        {props.groupMenu ? (
          <FlexStyled style={{ paddingRight: 10 }}>
            <DropdownButton
              iconName='group'
              size='medium'
              items={GroupItems}
              label={Group ? (Group.link as any) : 'Group'}
              onSelect={val => setGroupValue(val)}
              value={Group}
            />
          </FlexStyled>
        ) : null}
        {props.sortMenu ? (
          <FlexStyled style={{ paddingRight: 10 }}>
            <DropdownButton
              label={Sort ? (Sort.link as any) : 'Sort'}
              iconName='sort'
              size='medium'
              items={SortItems}
              onSelect={val => setSortValue(val)}
              value={Sort}
            />
          </FlexStyled>
        ) : null}
      </FlexStyled>
    </StyledTableAction>
  );
};

export default TableActions;
