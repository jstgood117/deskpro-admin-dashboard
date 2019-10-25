import React, { SFC, useState } from 'react';
import styled from 'styled-components';

import Tab from './Tab';
import { dpstyle } from '../Styled';

const TabBarStyled = styled(dpstyle.div)`
  display: flex;
  width: 100%;
  height: 32px;
  border-bottom: 1.5px solid #eff0f0;
`;


interface ITabsProps {
  label?: string;
  messageId?: string;
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
            messageId={tab.messageId}
            index={index}
            value={tabIndex}
            onClick={e => {
              changeTab(index, tab.label);
            }}
          />
        );
      })}
    </TabBarStyled>
  );
};

export default TabBar;
