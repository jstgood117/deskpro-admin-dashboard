import React from 'react';
import SortableList from './SortableList';
import { storiesOf } from '@storybook/react';
import { useState } from '@storybook/addons';
import uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';

storiesOf('SortableList', module).add('SortableList with dummy data', () => {
  const initialState: number[] = [1, 2, 3, 4, 5, 6];
  const [SortList, SetList] = useState(initialState);
  const LIStyle = styled.li`
    cursor: pointer;
    border: solid 1px;
    padding: 4px 10px;
    margin: 4px;
    list-style: none;
    font-family: ${props => props.theme.mainFont};
  `;
  const listItems = SortList.map(val => (
    <LIStyle key={uniqueId()} data-id={val}>
      List Item: {val}
    </LIStyle>
  ));

  return (
    <div>
      <SortableList
        onChange={items => {
          SetList(items);
        }}
        children={listItems}
      />
      <LIStyle
        onClick={() => {
          SetList(initialState);
        }}
      >
        Restor to Default
      </LIStyle>
    </div>
  );
});
