import React, { SFC, useState } from 'react';
import styled from 'styled-components';

import Tab from './Tab';
import Dropdown from '../Dropdown';
import { action } from '@storybook/addon-actions';
import { dpstyle } from '../Styled';

const TabBarStyled = styled(dpstyle.div)`
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
  handleClick?: (index: number) => void;
}

const TabBar: SFC<IProps> = ({ tabItems, handleClick }) => {
  const [tabIndex, setTabState] = useState(0);

  function changeTab(index: number, label: string) {
    setTabState(index);
    handleClick(index);
  }

  return (
    <TabBarStyled>
      {tabItems.map((tab, index: number) => {
        return (
          <Tab
            key={index}
            label={tab.label}
            index={index}
            value={tabIndex}
            onClick={e => {
              changeTab(index, tab.label);
            }}
          />
        );
      })}
      <Dropdown
        label="More"
        items={DropdownItems}
        onChangeOption={action('clicked Tab Option')}
      />
    </TabBarStyled>
  );
};

export default TabBar;
