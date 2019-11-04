import React, { SFC, Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { ISidebarItem } from '../../../resources/interfaces';
import Icon from '../../Icon';
import SidebarItem from './SidebarItem';
import { ReactComponent as CaretDown } from './caret-down.svg';
import { useLocation, matchPath } from 'react-router-dom';
import { TextLabel, BoxLayout, BoxFill, Box } from '../../Styled';

const SectionHeaderWrapper = styled.div`
  display: flex;
  height: 57px;
  align-items: center;
  border-bottom: 0.8px solid #d3d6d7;
  font-size: 15px;
  font-weight: bold;
`;

const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  width: 44px;
  align-items: center;
  & svg {
    margin: auto;
  }
`;

const SectionTitle = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const SectionHeader: SFC<{ sectionName: string }> = ({ sectionName }) => (
  <SectionHeaderWrapper>
    <IconWrapper>
      <Icon name={sectionName} />
    </IconWrapper>
    <SectionTitle>
      <FormattedMessage id={sectionName} />
    </SectionTitle>
  </SectionHeaderWrapper>
);

const List = styled.ul`
  margin: 10px 0 15px 0;
  padding: 0;

  &.collapsed {
    display: none;
  }

  ul {
    margin: 0;
  }
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  display: block;
`;

const SubgroupTitleContainer = styled.div`
  padding: 10px 16px 10px 39px;
  display: flex;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  color: ${props => props.theme.staticColour};
  font-weight: bold;

  &:hover {
		background-color: #d4dbdf;
	}
`;

export interface IProps {
  key: number;
  sectionName: string;
  navItems?: ISidebarItem[];
}

const TopLevelNavGroup: SFC<{ navItem: ISidebarItem }> = ({ navItem }) => {
  const [isOpen, setOpen] = useState(false);

  const loc = useLocation();

  useEffect(() => {
    const matchingNav = navItem.navItems.find(n => {
      return matchPath(loc.pathname, { path: n.path, exact: true })
    });
    if (matchingNav && !isOpen) {
      setOpen(true);
    }
  }, [isOpen, setOpen, navItem.navItems, loc]);

  const className = isOpen ? '' : 'collapsed';
  const caretStyle = isOpen ? {} : {transform: 'rotate(180deg)'};

  return (
    <Fragment>
      <SubgroupTitleContainer onClick={() => setOpen(!isOpen)}>
        <BoxLayout>
          <BoxFill><TextLabel bold={1}><FormattedMessage id={navItem.itemName} /></TextLabel></BoxFill>
          <Box><CaretDown style={caretStyle} /></Box>
        </BoxLayout>
      </SubgroupTitleContainer>
      <List className={className}>
        {navItem.navItems.map((n, idx) => <SidebarItem key={idx} path={n.path!!} itemName={n.itemName} depth={1} />)}
      </List>
    </Fragment>
  );
};

const SidebarSection: SFC<IProps> = props => {
  const { sectionName, navItems } = props;

  return (
    <Fragment>
      <SectionHeader sectionName={sectionName} />
      {navItems && (
        <List>
            {navItems.map((navItem, index) => {
              return (
                <ListItem key={`${index}.group`}>
                  {!navItem.navItems || !navItem.navItems.length
                  ? <SidebarItem path={navItem.path!!} itemName={navItem.itemName} depth={0} />
                  : <TopLevelNavGroup navItem={navItem} />}
                </ListItem>
              );
            })}
        </List>
      )}
    </Fragment>
  );
};

export default SidebarSection;
