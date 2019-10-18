import React, { SFC, Fragment, useState } from 'react';
import styled from 'styled-components';

import Icon from '../../Icon';

export interface StyleProps {
  openState: boolean;
}

const DropdownLabel = styled.div`
  padding-right: 12px;
`;
const DropdownStyled = styled.div<StyleProps>`
  padding: 4px 10px;
  background: #ffffff;
  border: 0.8px solid #a9b0b0;
  box-sizing: border-box;
  border-radius: 3px;
  cursor: pointer;
  float: left;
  overflow: hidden;
  display: flex;
  align-item: center;
  outline: none;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  color: #a9b0b0;
`;
const DropdownBtn = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  color: #a9b0b0;
  display: flex;
`;
const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #ffffff;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  top: 40px;
`;
const DropdownContentPanel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  zindex: 0;
`;
const DropdownContentLink = styled.div`
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  :hover {
    background-color: #e8ebee;
  }
  z-index: 1;
`;
const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

interface IItemProps {
  link: string;
}

export interface IProps {
  iconName?: string;
  label: string;
  items: IItemProps[];
  onClick?: (e: any) => void;
}

const DropdownButton: SFC<IProps> = props => {
  const [openState, clickButton] = useState(false);
  return (
    <Fragment>
      <DropdownStyled openState={openState}>
        <DropdownBtn
          onClick={() => {
            clickButton(!openState);
          }}
        >
          {props.iconName ? (
            <StyledIcon>
              <Icon name={props.iconName} />
            </StyledIcon>
          ) : null}
          <DropdownLabel>{props.label}</DropdownLabel>
          <Icon name="downVector" />
        </DropdownBtn>
        {openState && (
          <DropdownContent
            onClick={() => {
              clickButton(!openState);
            }}
          >
            {props.items.map((item, index: number) => {
              return (
                <DropdownContentLink key={index} onClick={props.onClick}>
                  {item.link}
                </DropdownContentLink>
              );
            })}
            <DropdownContentPanel />
          </DropdownContent>
        )}
      </DropdownStyled>
    </Fragment>
  );
};

export default DropdownButton;
