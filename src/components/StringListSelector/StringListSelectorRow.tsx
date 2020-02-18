import React, { FC } from 'react';
import styled from 'styled-components';

import Checkbox from '../Checkbox';
import { Items } from '../StringListBuilderNew/components/Usergroups';

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
    margin: 0 12px 0 10px;
  }
`;

interface IProps {
  item: Items;
  onSelect: (item: any) => void;
}

const StringListSelectorRow: FC<IProps> = ({ item, onSelect }) => (
  <SelectorRowStyled>
    <Checkbox checked={item.selected} onChange={onSelect} />
    {item.value}
  </SelectorRowStyled>
);

export default StringListSelectorRow;
