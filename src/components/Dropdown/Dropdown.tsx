import React, { SFC, Fragment } from 'react';
import styled from 'styled-components';

import Icon from '../Icon';
import { dpstyle, TextLabel } from '../Styled';

const DropdownLabel = styled(dpstyle.div)`
  padding-right: 3px;
`;
const DropdownStyled = styled(dpstyle.div)`
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
const DropdownBtn = styled(dpstyle.div)`
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  color: #a9b0b0;
  display: flex;
`;
const DropdownContent = styled(dpstyle.div)`
  display: none;
  position: absolute;
  background: #ffffff;
  min-width: 110px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 150%;
  top: 30px;
`;
const DropdownContentLink = styled(dpstyle.div)`
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
  id: number;
  link: string;
}

export interface IProps {
  label: string;
  items: IItemProps[];
  onChangeOption?: (option: string) => void;
}

const Dropdown: SFC<IProps> = props => {
  function changeOption(option: string) {
    props.onChangeOption(option);
  }
  return (
    <Fragment>
      <DropdownStyled>
        <DropdownBtn>
          <DropdownLabel><TextLabel>{props.label}</TextLabel></DropdownLabel>
          <Icon name="downVector" />
        </DropdownBtn>
        <DropdownContent>
          {props.items.map(item => {
            return (
              <DropdownContentLink
                key={item.id}
                onClick={() => {
                  changeOption(item.link);
                }}
              >
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
