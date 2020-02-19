import React, { FC } from 'react';
import styled from 'styled-components';

import Checkbox from '../Checkbox';
import { Items } from './UserGroupSelector';

const SelectorRowStyled = styled.div`
  display: flex;
  align-items: center;
  height: 34px;
  font-family: Rubik;
  font-size: 14px;
  line-height: 150%;
  user-select: none;
  color: ${props => props.theme.staticColour};

  &:hover {
    background: ${props => props.theme.textHover};
    font-weight: normal;
    color: ${props => props.theme.brandPrimary};
  }

  & > div:first-child {
    margin: 0 8px 0 10px;
  }
`;

interface IProps {
  item: Items;
  onSelect: () => void;
}

const UserGroupSelectorRow: FC<IProps> = ({ item, onSelect }) => (
  <SelectorRowStyled>
    <Checkbox checked={item.selected} onChange={onSelect} />
    {item.value}
  </SelectorRowStyled>
);

export default UserGroupSelectorRow;
