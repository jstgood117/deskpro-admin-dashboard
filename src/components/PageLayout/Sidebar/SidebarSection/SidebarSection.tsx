import React, { SFC, Fragment } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { ISidebarItem } from '../../../../resources/interfaces';
import Icon from '../../../Icon';
import SidebarItem from './SidebarItem';

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
`;

const ListItem = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SubListItem = styled.li`
  margin: 0 0 0 15px;
  padding: 0;
  list-style: none;
`;

export interface IProps {
  key: number;
  sectionName: string;
  navItems?: ISidebarItem[];
}

const SidebarSection: SFC<IProps> = props => {
  const { sectionName, navItems } = props;

  return (
    <Fragment>
      <SectionHeader sectionName={sectionName} />
      {navItems && (
        <List>
            {navItems.map((navItem, index) => {
              return (
                <Fragment key={`${index}.group`}>
                  <ListItem>
                    <SidebarItem key={`${index}.group.item`} {...navItem}></SidebarItem>
                  </ListItem>
                  { navItem.navItems && navItem.navItems.map((subNavItem, subIndex) => <SubListItem key={`${index}.group.li.${subIndex}`}><SidebarItem key={`${index}.group.item.${subIndex}`} {...subNavItem}></SidebarItem></SubListItem>)}
                </Fragment>
              );
            })}
        </List>
      )}
    </Fragment>
  );
};

export default SidebarSection;
