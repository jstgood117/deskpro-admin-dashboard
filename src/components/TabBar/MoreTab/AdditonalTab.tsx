import React, { SFC, Fragment, useState } from 'react';
import styled from 'styled-components';

import { dpstyle, TextString } from '../../Styled';
import Icon from '../../Icon';
import Button from '../../Button';
import { isNil } from 'lodash';
import { ITabsProps } from '../../../resources/interfaces';

export interface IStyleProps {
  active: boolean;
}

const TabStyled = styled(dpstyle.div)<{ selected: boolean }>`
  position: relative;
  border-bottom: solid 1.5px
    ${props =>
      props.selected ? props.theme.activeColour : props.theme.greyLighter};
  width: fit-content;
  height: 100%;
  display: inline-flex;
  align-items: center;
  cursor: default;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  color: ${props =>
    props.selected ? props.theme.activeColour : props.theme.static2Colour};
  button {
    path {
      fill: ${props =>
        props.selected ? props.theme.activeColour : props.theme.static2Colour};
    }
  }
  &:hover {
    color: ${props => props.theme.activeColour};
    button {
      path {
        fill: ${props => props.theme.activeColour};
      }
    }
  }
`;

const StyledIcon = styled(dpstyle.div)`
  padding-left: 8px;
  button {
    border: none;
    &:hover {
      border: none;
    }
    width: 18px;
  }
  .dropdownContent {
    top: 34px;
    left: 0;
  }
  .dropdown {
    position: unset;
  }
`;
export interface IProps {
  selectedTabValue?: ITabsProps;
  handle?: (val:ITabsProps)=>void;
  label?: string;
  tabItems: ITabsProps[];
}

const AdditonalTab: SFC<IProps> = props => {
  const [opened, clickButton] = useState(false);
  const selected =
    !isNil(props.selectedTabValue) && props.selectedTabValue.label !== '';
  return (
    <Fragment>
      <TabStyled selected={selected}>
        <TextString>
          {props.selectedTabValue ? props.selectedTabValue.label : props.label}
        </TextString>
        <StyledIcon>
          <Button
            onClick={() => {
              clickButton(!opened);
            }}
            opened={opened}
            onSelect={(val: any) => props.handle(val)}
            iconOnly={true}
            items={props.tabItems}
            size='medium'
            styleType='tertiary'
            className='dropdown'
          >
            <Icon name='downVector' />
          </Button>
        </StyledIcon>
      </TabStyled>
    </Fragment>
  );
};

export default AdditonalTab;
