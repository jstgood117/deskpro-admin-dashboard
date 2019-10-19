import React, { SFC } from 'react';
import SearchBox from '../SearchBox';
import FilterButton from '../Button/FilterButton';
import DropdownButton from '../Button/DropdownButton/DropdownButton';
import styled from 'styled-components';
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
  return (
    <div>
      {(props.showSearch ||
        props.filterMenu ||
        props.sortMenu ||
        props.groupMenu ||
        props.viewMenu) && (
        <StyledTableAction>
          <FlexStyled style={{ flex: 5 }}>
            {props.showSearch && (
              <FlexStyled style={{ paddingLeft: 10 }}>
                <SearchBox
                  placeholder="Search Box"
                  handleSearch={props.onSearchChange}
                />
              </FlexStyled>
            )}
            {props.filterMenu && (
              <FlexStyled style={{ paddingLeft: 10 }}>
                <FilterButton>Filter</FilterButton>
              </FlexStyled>
            )}
          </FlexStyled>
          <FlexStyled style={{ flex: 5, flexFlow: 'row-reverse' }}>
            {props.viewMenu && (
              <FlexStyled style={{ paddingRight: 10 }}>
                <DropdownButton
                  label="View"
                  iconName="view"
                  items={ViewItems}
                  onChangeOption={action('clicked onChangeOption')}
                />
              </FlexStyled>
            )}
            {props.groupMenu && (
              <FlexStyled style={{ paddingRight: 10 }}>
                <DropdownButton
                  label="Group"
                  iconName="group"
                  items={GroupItems}
                  onChangeOption={action('clicked onChangeOption')}
                />
              </FlexStyled>
            )}
            {props.sortMenu && (
              <FlexStyled style={{ paddingRight: 10 }}>
                <DropdownButton
                  label="Sort"
                  iconName="sort"
                  items={SortItems}
                  onChangeOption={action('clicked onChangeOption')}
                />
              </FlexStyled>
            )}
          </FlexStyled>
        </StyledTableAction>
      )}
    </div>
  );
};

export default TableActions;
