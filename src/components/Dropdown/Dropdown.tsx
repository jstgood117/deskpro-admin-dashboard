import React, { SFC, Fragment } from 'react';
import styled from 'styled-components';

import Icon from '../Icon';

const DropdownLabel = styled.div`
  padding-right: 3px;
`;
const DropdownStyled = styled.div`
  height: 100%;
  cursor: pointer;
  float: left;
  overflow: hidden;
  display: flex;
  align-item: center;
  :hover {
    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
    }
  }
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
  display: none;
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
`;
interface IItemProps {
  link: string;
}

export interface IProps {
  label: string;
  items: IItemProps[];
  onClick?: (e: any) => void;
}

const Dropdown: SFC<IProps> = props => {
  return (
    <Fragment>
      <DropdownStyled>
        <DropdownBtn>
          <DropdownLabel>{props.label}</DropdownLabel>
          <Icon name="dropdownVector" />
        </DropdownBtn>
        <DropdownContent>
          {props.items.map(item => {
            return (
              <DropdownContentLink onClick={props.onClick}>
                {item.link}
              </DropdownContentLink>
            );
          })}
        </DropdownContent>
      </DropdownStyled>
    </Fragment>
  );
};

export default Dropdown;
