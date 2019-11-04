import React, { useState, CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import { dpstyle, FlowLayout } from '../Styled';
import Icon from '../Icon';
import { P1 } from '../Typography';
import Tooltip from '../Tooltip';

type ButtonEventClickType = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type DivEventClickType = React.MouseEvent<HTMLDivElement, MouseEvent>;
const BaseButton = styled(dpstyle.div)`
  background: ${props => props.theme.secondaryColour};
  border: 1px solid ${props => props.theme.greyLight};
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  justify-content: center;
  padding: 0;
  path {
    fill: ${props => props.theme.greyDark};
  }
  &:disabled {
    background: ${props => props.theme.greyLighter};
    path {
      fill: ${props => props.theme.greyLight};
    }
  }
  &:hover {
    background: ${props => props.theme.hoverColour};
    border-color: ${props => props.theme.activeColour};
    path {
      fill: ${props => props.theme.activeColour};
    }
  }
`;

/**** MoveButton ****/
const MoveButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const MoveButtonStyled = styled(BaseButton)`
  width: 26px;
  height: 16px;
`;
interface IMoveButtonProps {
  onMoveUp?: (e: DivEventClickType) => void;
  onMoveDown?: (e: DivEventClickType) => void;
}
const MoveButtons: React.SFC<IMoveButtonProps> = ({ onMoveUp, onMoveDown }) => {
  return (
    <MoveButtonGroup>
      <MoveButtonStyled onClick={onMoveUp}>
        <Icon name='move-up' />
      </MoveButtonStyled>
      <MoveButtonStyled style={{ marginTop: 4 }} onClick={onMoveDown}>
        <Icon name='move-down' />
      </MoveButtonStyled>
    </MoveButtonGroup>
  );
};

/**** ActionButton ****/
const ActionButtonStyled = styled(BaseButton)`
  width: 36px;
  height: 22px;
  margin-left: 8px;
`;
interface IActionButtonProps {
  iconName: string;
  toolip?: string;
  onClick?: (e: DivEventClickType) => void;
}
const ActionButton: React.SFC<IActionButtonProps> = ({
  iconName,
  toolip = '',
  onClick
}) => {
  return (
    <Tooltip
      placement='bottom'
      styleType='dark'
      enabled={!!toolip}
      content={toolip}
    >
      <ActionButtonStyled onClick={onClick}>
        <Icon name={iconName} />
      </ActionButtonStyled>
    </Tooltip>
  );
};

/**** HeaderContainer ****/
const HeaderContainer = styled(FlowLayout)`
  height: 34px;
  background: ${props => props.theme.greyLighter};
  border: 1px solid ${props => props.theme.greyLighter};
  padding: 0 10px;
`;

/**** Text ****/
const Text = styled(P1)``;

/**** DropdownIcon ****/
const DropdownIconStyled = styled.div`
  width: 30px;
  color: ${props => props.theme.staticColour};
  display: inline-flex;
  justify-content: center;
`;
const ArrowButton = styled.div<{ hideBorder?: boolean }>`
  border-left: 1px solid ${props => props.theme.greyLight};
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  ${props =>
    props.hideBorder &&
    css`
      border: none;
    `}
`;
const DropdownIconContainer = styled(BaseButton)<{ active: boolean }>`
  width: 55px;
  height: 22px;
  justify-content: flex-start;
  &:hover {
    ${ArrowButton} {
      border-color: ${props => props.theme.activeColour};
    }
  }
  ${props =>
    props.active &&
    css`
      ${ArrowButton} {
        background: ${props.theme.textHover};
        border-left: 1px solid ${props.theme.activeColour};
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
      background: ${_props => _props.theme.hoverColour};
      border-color: ${_props => _props.theme.activeColour};
      path {
        fill: ${_props => _props.theme.activeColour};
      }
    `}
`;
interface IDropdownIconProps {
  iconName: string;
  toolip?: string;
  onClick?: (e: DivEventClickType) => void;
}
const DropdownIcon: React.SFC<IDropdownIconProps> = ({ iconName, onClick }) => {
  const [active, setActive] = useState(false);

  return (
    <DropdownIconContainer
      active={active}
      onClick={(e: DivEventClickType) => {
        setActive(!active);
        onClick(e);
      }}
    >
      <DropdownIconStyled>
        <Icon name={iconName} />
      </DropdownIconStyled>
      <ArrowButton>
        <Icon name='downVector' />
      </ArrowButton>
    </DropdownIconContainer>
  );
};

/**** DropdownText ****/
const DropdowTextContainer = styled(BaseButton)<{ active: boolean }>`
  color: ${props => props.theme.staticColour};
  padding: 0 10px;
  margin: 0 10px;
`;
const DropdownTextStyled = styled(Text)`
  margin-right: 5px;
`;
export interface IDropdownTextProps {
  text?: string;
  onClick?: (e: DivEventClickType) => void;
}
const DropdownText: React.SFC<IDropdownTextProps> = ({ text, onClick }) => {
  const [active, setActive] = useState(false);

  return (
    <DropdowTextContainer
      active={active}
      onClick={(e: DivEventClickType) => {
        setActive(!active);
        if(onClick) { onClick(e); }
      }}
    >
      <DropdownTextStyled>{text}</DropdownTextStyled>
      <ArrowButton hideBorder={true}>
        <Icon name='downVector' />
      </ArrowButton>
    </DropdowTextContainer>
  );
};

/**** Select ****/
interface ISelectContainerProps {
  active: boolean;
}
const SelectContainer = styled(BaseButton)<ISelectContainerProps>`
  border: 1px solid ${props => props.theme.greyLight};
  padding: 0 10px;
  height: 26px;
  position: relative;
  justify-content: flex-start;
  &.left {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-color: transparent;
    &:hover {
      border-right-color: ${props => props.theme.activeColour};
    }
    min-width: 160px;
  }
  &.center {
    border-radius: 0;
    border-right-color: transparent;
    &:hover {
      border-right-color: ${props => props.theme.activeColour};
    }
    min-width: 210px;
  }
  &.right {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    width: 100%;
  }
`;
const SelectTextStyled = styled(Text)<{ active?: boolean }>`
  margin-right: 10px;
  line-height: 1;
  color: ${props =>
    props.active ? props.theme.staticColour : props.theme.static2Colour};
`;
const SelectArrowButton = styled(ArrowButton)`
  position: absolute;
  right: 8px;
  top: 3px;
`;
export interface ISelectProps {
  placeholder?: string;
  style?: CSSProperties;
  position?: 'left' | 'center' | 'right';
  value?: any;
  onClick?: (e: DivEventClickType) => void;
}
const Select: React.SFC<ISelectProps> = ({
  placeholder,
  style,
  position,
  value,
  onClick
}) => {
  const [active, setActive] = useState(false);

  return (
    <SelectContainer
      style={style}
      active={active}
      className={position}
      onClick={(e: DivEventClickType) => {
        setActive(!active);
        if(onClick) { onClick(e); }
      }}
    >
      <SelectTextStyled active={!!value}>{placeholder}</SelectTextStyled>
      <SelectArrowButton hideBorder={true}>
        <Icon name='downVector' />
      </SelectArrowButton>
    </SelectContainer>
  );
};

/**** GroupMoveButtons ****/
export type IGroupMoveButtonsProps = {
  label: string;
} & IMoveButtonProps;
const GroupMoveButtonsStyled = styled.div`
  width: 104px;
  padding: 4px 9px;
  display: inline-flex;
  align-items: center;
  background: ${props => props.theme.greyLightest};
  border-right: 1px solid ${props => props.theme.greyLighter};
`;
const GroupMoveButtonLabel = styled(Text)`
  font-weight: 500;
  margin-left: 16px;
`;
const GroupMoveButtons: React.SFC<IGroupMoveButtonsProps> = ({
  label,
  ...props
}) => {
  return (
    <GroupMoveButtonsStyled>
      <MoveButtons {...props} />
      <GroupMoveButtonLabel>{label}</GroupMoveButtonLabel>
    </GroupMoveButtonsStyled>
  );
};

export {
  MoveButtons,
  ActionButton,
  HeaderContainer,
  Text,
  DropdownIcon,
  DropdownText,
  Select,
  GroupMoveButtons
};