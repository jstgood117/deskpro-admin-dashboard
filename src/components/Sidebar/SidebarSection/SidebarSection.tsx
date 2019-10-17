import React, { SFC, Fragment } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import { ISidebarItem } from '../../../resources/interfaces';
import Icon from '../../Icon';
import SidebarItem from './SidebarItem';
import SidebarSubSection from './SidebarSubSection';

const SidebarSectionStyled = styled.div`
  display: flex;
  height: 57px;
  align-items: center;
  border-bottom: 0.8px solid #d3d6d7;
  font-size: 15px;
  font-weight: bold;
`;
const IconWrapperStyled = styled.div`
  height: 100%;
  display: flex;
  width: 44px;
  align-items: center;
  & svg {
    margin: auto;
  }
`;
const SidebarSectionList = styled.ul`
  padding-inline-start: 0;
`;
const FormattedMessageStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

export interface IProps {
  key: number;
  path: string;
  sectionName: string;
  navItems?: ISidebarItem[];
}

const SidebarSection: SFC<IProps> = props => {
  const { path, sectionName, navItems } = props;

  return (
    <Fragment>
      <SidebarSectionStyled>
        <IconWrapperStyled>
          <Icon name={sectionName} />
        </IconWrapperStyled>
        <FormattedMessageStyled>
          <FormattedMessage id={sectionName} />
        </FormattedMessageStyled>
      </SidebarSectionStyled>
      {navItems && (
        <SidebarSectionList>
          {navItems.map((navItem, index) => {
            if (navItem.navItems) {
              return (
                <SidebarSubSection
                  key={index}
                  path={path}
                  {...navItem}
                ></SidebarSubSection>
              );
            }
            return (
              <SidebarItem key={index} path={path} {...navItem}></SidebarItem>
            );
          })}
        </SidebarSectionList>
      )}
    </Fragment>
  );
};

export default SidebarSection;
