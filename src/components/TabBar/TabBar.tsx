import React, { SFC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Tab from './Tab/Tab';
import { DeskproAdminTheme } from '../Theme';
import Dropdown from '../Dropdown';
import { action } from '@storybook/addon-actions';

const TabBarStyled = styled.div`
  display: flex;
  width: 100%;
  height: 32px;
  border-bottom: 1.5px solid #eff0f0;
`;

const DropdownItems = [
  { id: 0, link: 'Property4' },
  { id: 1, link: 'Property5' },
  { id: 2, link: 'Property6' }
];

interface ITabsProps {
  label: string;
}

export interface IProps {
  tabItems: ITabsProps[];
}

const TabBar: SFC<IProps> = props => {
  const [tabIndex, setTabState] = useState(0);
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <TabBarStyled onClick={action('clicked')}>
        {props.tabItems.map((tab, index: number) => {
          return (
            <Tab
              label={tab.label}
              index={index}
              value={tabIndex}
              onClick={() => {
                setTabState(index);
              }}
            />
          );
        })}
        <Dropdown
          label="Menu"
          items={DropdownItems}
          onClick={() => {
            setTabState(4);
          }}
        />
      </TabBarStyled>
    </ThemeProvider>
  );
};

export default TabBar;
