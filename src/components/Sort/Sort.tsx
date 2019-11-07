import React, { SFC, CSSProperties, useState } from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import { FlowLayout } from '../Styled';
import { ISortItem } from '../../resources/interfaces';
import Button from '../Button';

const SortItem = styled(FlowLayout)`
  cursor: pointer;
  justify-content: space-between;
  padding: 5px 15px;
  height: 31px;
  z-index: 2;
  &:hover {
    background: ${props => props.theme.textHover};
  }
`;

const Text = styled.span<{ seleced?: boolean }>`
  font-family: ${props => props.theme.mainFont};
  font-style: normal;
  font-weight: ${props => (props.seleced ? 500 : 'normal')};
  font-size: 14px;
  line-height: 150%;
`;

const IconContainer = styled.div`
  flex-direction: column;
  display: inline-flex;
`;

const IconItem = styled.div<{ selected?: boolean }>`
  display: flex;
  margin: 2px 0;
  path {
    fill: ${props =>
      props.selected
        ? props.theme.activeColour
        : props.theme.hoverColour} !important;
  }
`;

export interface ISortIconProps {
  sortType: string;
  style?: CSSProperties;
  className?: string;
}
const SortIcon: SFC<ISortIconProps> = ({ sortType, style, className }) => {
  return (
    <IconContainer style={style} className={className}>
      <IconItem selected={sortType === 'asc'}>
        <Icon name='arrow-drop-up' />
      </IconItem>
      <IconItem selected={sortType === 'desc'}>
        <Icon name='arrow-drop-down' />
      </IconItem>
    </IconContainer>
  );
};

export interface IProps {
  items: ISortItem[];
  sortSelected: ISortItem | null;
  onSelectSort: (item: ISortItem) => void;
}
const Sort: SFC<IProps> = ({ items, sortSelected = null, onSelectSort }) => {
  const [opened, open] = useState(false);
  const selectSort = (item: ISortItem) => {
    const sortItem =
      sortSelected && sortSelected.field === item.field ? sortSelected : item;
    const sort = sortItem.sort === 'asc' ? 'desc' : 'asc';

    onSelectSort({
      ...item,
      sort
    });
  };
  return (
    <Button
      styleType='tertiary'
      items={items}
      opened={opened}
      onClick={() => {
        open(!opened);
      }}
      renderItem={(item: ISortItem, index: number) => {
        const selected = sortSelected && sortSelected.field === item.field;
        const sortType = sortSelected && sortSelected.sort;
        return (
          <SortItem key={item.field} onClick={() => selectSort(item)}>
            <Text seleced={selected}>{item.label}</Text>
            {selected && <SortIcon sortType={sortType} />}
          </SortItem>
        );
      }}
    >
      <Icon name='sort' />
      Sort
      <Icon name='downVector' />
    </Button>
  );
};

export { Sort, SortIcon };
