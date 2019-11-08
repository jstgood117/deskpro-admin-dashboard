import React, { useState, CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import { dpstyle } from '../Styled';
import Icon from '../Icon';
import { P1 } from '../Typography';
import Tooltip from '../Tooltip';

/**** BaseButton ****/
type ButtonEventClickType = React.MouseEvent<HTMLButtonElement, MouseEvent>;
type DivEventClickType = React.MouseEvent<HTMLDivElement, MouseEvent>;
const BaseButton = styled(dpstyle.div)<{ disabled?: boolean }>`
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
  ${props =>
    props.disabled &&
    css`
      background: ${_props => _props.theme.greyLighter};
      path {

        fill: ${_props => _props.theme.greyLight};
      }
      pointer-events: none;
    `}
`;

/**** MoveButton ****/
const MoveButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
const MoveButtonStyled = styled(props => <BaseButton {...props} />)<{ disabled?: boolean; }>`
  width: 26px;
  height: 16px;
`;
interface IMoveButtonProps {
  disabledMoveUp?: boolean;
  disabledMoveDown?: boolean;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
}
const MoveButtons: React.SFC<IMoveButtonProps> = ({
  disabledMoveUp,
  disabledMoveDown,
  onMoveUp,
  onMoveDown
}) => {
  return (
    <MoveButtonGroup>
      <MoveButtonStyled disabled={disabledMoveUp} onClick={onMoveUp}>
        <Icon name='move-up' />
      </MoveButtonStyled>
      <MoveButtonStyled
        disabled={disabledMoveDown}
        style={{ marginTop: 4 }}
        onClick={onMoveDown}
      >
        <Icon name='move-down' />
      </MoveButtonStyled>
    </MoveButtonGroup>
  );
};

/**** ActionButton ****/
const ActionButtonStyled = styled(BaseButton)<{ disabled?: boolean }>`
  width: 36px;
  height: 22px;
  margin-left: 8px;
  ${props =>
    props.disabled &&
    css`
      background: ${props.theme.greyLightest};
      pointer-events: none;
      path {
        fill: ${props.theme.greyLight};
      }
    `};
`;
interface IActionButtonProps {
  iconName: string;
  toolip?: string;
  disabled?: boolean;
  onClick?: (e: DivEventClickType) => void;
}
const ActionButton: React.SFC<IActionButtonProps> = ({
  iconName,
  toolip = '',
  disabled,
  onClick
}) => {
  return (
    <Tooltip
      placement='bottom'
      styleType='dark'
      enabled={!!toolip && !disabled}
      content={toolip}
    >
      <ActionButtonStyled
        disabled={disabled}
        onClick={e => !disabled && onClick && onClick(e)}
      >
        <Icon name={iconName} />
      </ActionButtonStyled>
    </Tooltip>
  );
};

/**** Text ****/
const Text = styled(P1)``;

/**** DropdownOption ****/
const DropdownOption = styled(Text)`
  padding: 7px 15px;
  z-index: 2;
  &:hover {
    background: ${props => props.theme.textHover};
  }
`;

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
interface IDropdownIconContainerProps {
  active: boolean;
  disabled: boolean;
}
const DropdownIconContainer = styled(props => <BaseButton {...props} />)<IDropdownIconContainerProps>`
  width: 55px;
  height: 22px;
  margin-left: 8px;
  justify-content: flex-start;
  position: relative;
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
const DropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background: #fff;
  min-width: 160px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  z-index: 1;
  top: 24px;
  right: 0;
  left: 0;
  max-width: 100%;
`;
const DropdownContentPanel = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
`;
interface IDropdownIconProps {
  iconName: string;
  items?: any[];
  disabled?: boolean;
  renderItem?: (item: any, index: number) => void;
}
const DropdownIcon: React.SFC<IDropdownIconProps> = ({
  iconName,
  items,
  disabled,
  renderItem
}) => {
  const [active, setActive] = useState(false);

  return (
    <DropdownIconContainer
      active={active}
      disabled={disabled}
      onClick={(e: DivEventClickType) => {
        setActive(!active);
      }}
    >
      <DropdownIconStyled>
        <Icon name={iconName} />
      </DropdownIconStyled>
      <ArrowButton>
        <Icon name='downVector' />
      </ArrowButton>
      {active && (
        <DropdownContent>
          {(items || []).map((item: any, index: number) =>
            renderItem(item, index)
          )}
          <DropdownContentPanel />
        </DropdownContent>
      )}
    </DropdownIconContainer>
  );
};

/**** DropdownText ****/
const DropdowTextContainer = styled(BaseButton)<{ active: boolean }>`
  color: ${props => props.theme.staticColour};
  padding: 0 10px;
  margin: 0 10px;
  position: relative;
`;
const DropdownTextStyled = styled(Text)`
  margin-right: 5px;
`;
export interface IDropdownTextProps {
  text?: string;
  items?: any[];
  renderItem?: (item: any, index: number) => void;
}
const DropdownText: React.SFC<IDropdownTextProps> = ({
  text,
  items,
  renderItem
}) => {
  const [active, setActive] = useState(false);

  return (
    <DropdowTextContainer
      active={active}
      onClick={(e: DivEventClickType) => {
        setActive(!active);
      }}
    >
      <DropdownTextStyled>{text}</DropdownTextStyled>
      <ArrowButton hideBorder={true}>
        <Icon name='downVector' />
      </ArrowButton>
      {active && (
        <DropdownContent>
          {(items || []).map((item: any, index: number) =>
            renderItem(item, index)
          )}
          <DropdownContentPanel />
        </DropdownContent>
      )}
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
  items?: any[];
  renderItem?: (item: any, index: number) => void;
}
const Select: React.SFC<ISelectProps> = ({
  placeholder,
  style,
  position,
  value,
  items,
  renderItem
}) => {
  const [active, setActive] = useState(false);

  return (
    <SelectContainer
      style={style}
      active={active}
      className={position}
      onClick={(e: DivEventClickType) => {
        setActive(!active);
      }}
    >
      <SelectTextStyled active={!!value}>{placeholder}</SelectTextStyled>
      <SelectArrowButton hideBorder={true}>
        <Icon name='downVector' />
      </SelectArrowButton>
      {active && (
        <DropdownContent>
          {(items || []).map((item: any, index: number) =>
            renderItem(item, index)
          )}
          <DropdownContentPanel />
        </DropdownContent>
      )}
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
  Text,
  DropdownOption,
  DropdownIcon,
  DropdownText,
  Select,
  GroupMoveButtons
};