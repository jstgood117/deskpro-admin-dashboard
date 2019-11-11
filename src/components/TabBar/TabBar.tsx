import React, { SFC, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Tab from './Tab';
import { dpstyle } from '../Styled';
import { DeskproAdminTheme } from '../Theme';
import AdditonalTab from './MoreTab';
import { ITabsProps } from '../../resources/interfaces';

const TabBarStyled = styled(dpstyle.div)`
  display: flex;
  width: 100%;
  height: 34px;
  border-bottom: 1.5px solid #eff0f0;
`;

export interface IProps {
  tabItems: ITabsProps[];
  handleClick?: (index: number) => void;
  sharedTabsCount: number;
}

const TabBar: SFC<IProps> = ({ tabItems, handleClick, sharedTabsCount }) => {
  const [tabIndex, setTabState] = useState(0);
  const [dropdownValue, setDropdownValue] = useState();

  const moreItems = tabItems.slice(sharedTabsCount);
  function changeTab(index: number) {
    setTabState(index);
    handleClick(index);
    handleMoreTab(null);
  }
  function handleMoreTab(val: ITabsProps) {
    setDropdownValue(val);
    if (val) setTabState(sharedTabsCount);
  }
  return (
    <ThemeProvider theme={DeskproAdminTheme}>
      <TabBarStyled>
        {tabItems.length > 0 && tabItems.map((tab, index: number) => {
          if (index < sharedTabsCount) {
            return (
              <Tab
                key={index}
                label={tab.label}
                messageId={tab.messageId}
                index={index}
                value={tabIndex}
                onClick={e => {
                  changeTab(index);
                }}
              />
            );
          }
          return null;
        })}
        <AdditonalTab
          label='More'
          tabItems={moreItems}
          selectedTabValue={dropdownValue}
          handle={handleMoreTab}
        />
      </TabBarStyled>
    </ThemeProvider>
  );
};

export default TabBar;
