import React, { SFC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { DeskproAdminTheme } from '../Theme';
import { FlowLayout } from '../Styled';
import Icon from '../Icon';

export interface INavProps {
  NavItem: string;
}
export interface IProps {
  itemList?: INavProps[];
}
export interface IItemStyleProps {
  selected?: boolean;
}

const NavigationStyle = styled(FlowLayout)`
  width: 45px;
  height: 100%;
  background: ${props => props.theme.activeColour};
  display: inline-flex;
  flex-direction: column;
  position: absolute;
  left: 0px;
`;
const ItemStyle = styled(FlowLayout)<IItemStyleProps>`
  width: 100%;
  height: 45px;
  display: inline-flex;
  flex-direction: column;
  &:hover {
    background-color: ${props =>
      !props.selected
        ? `${props.theme.lightBlue}15`
        : props.theme.brandPrimary};
  }
  background-color: ${props =>
    props.selected ? props.theme.brandPrimary : props.theme.activeColour};
  cursor: pointer;
`;

const Navigation: SFC<IProps> = ({ itemList }) => {
  const [value, setValue] = useState('');
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <NavigationStyle>
        {itemList.length > 0 &&
          itemList.map((item: INavProps, index: number) => (
            <ItemStyle
              key={index}
              onClick={() => {
                setValue(item.NavItem);
              }}
              selected={value === item.NavItem}
            >
              <span style={{ margin: 'auto' }}>
                <Icon name={item.NavItem} />
              </span>
            </ItemStyle>
          ))}
      </NavigationStyle>
    </ThemeProvider>
  );
};

export default Navigation;
