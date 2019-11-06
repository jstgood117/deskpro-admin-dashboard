import React from 'react';
import styled, { css } from 'styled-components';

import {
  GroupMoveButtons,
  DropdownText,
  Text,
  ActionButton,
  DropdownIcon,
  DropdownOption
} from './Components';
import { FlowLayout, Flex } from '../Styled';
import { IRuleValue } from './interfaces';
import { GroupOperators, DeleteGroupOptions } from './constants';

const HeaderContainer = styled(FlowLayout)`
  padding-top: 12px;
  flex: 1;
`;

const Body = styled(FlowLayout)<{ index: number }>`
  ${props =>
    props.index === 0
      ? css`
          height: 34px;
          background: ${props => props.theme.greyLighter};
          border: 1px solid ${props => props.theme.greyLighter};
          padding: 0 10px;
          flex: 1;
        `
      : css`
          background: ${props => props.theme.greyLighter};
          height: 48px;
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 8px;
          flex: 1;
        `};
`;

export interface IProps {
  index?: number;
  parentValue?: IRuleValue;
  currentValue?: IRuleValue;
  value?: IRuleValue; // Root value
  onChangeOperator?: (operator: string) => void;
  onMoveUp?: (rule: IRuleValue, index: number) => void;
  onMoveDown?: (rule: IRuleValue, index: number) => void;
  onDeleteGroup?: (rule: IRuleValue, index: number, option: string) => void;
  onUpLevel?: (rule: IRuleValue, index: number) => void;
}

const GroupHeader: React.SFC<IProps> = ({
  index,
  parentValue,
  currentValue,
  value,
  onChangeOperator,
  onMoveUp,
  onMoveDown,
  onDeleteGroup,
  onUpLevel
}) => {
  const parentLength = ((parentValue && parentValue.rules) || []).length;
  const isFirst = index === 0;
  const isLast = index === parentLength - 1;
  const isOnly = parentLength === 1;
  const label = isFirst
    ? 'Where'
    : parentValue && parentValue.operator === 'and'
    ? 'And'
    : 'Or';
  const isRoot = !parentValue || parentValue.id === value.id;

  const DropdownOperator = (
    <DropdownText
      text={currentValue && currentValue.operator === 'or' ? 'any' : 'all'}
      items={GroupOperators}
      renderItem={item => (
        <DropdownOption
          key={item.id}
          onClick={() => {
            onChangeOperator && onChangeOperator(item.id);
          }}
        >
          {item.label}
        </DropdownOption>
      )}
    />
  );

  return !parentValue ? (
    <HeaderContainer className="group-header">
      <Body index={0}>
        <Text>Show objects that meet</Text>
        {DropdownOperator}
        <Text> of the following:</Text>
        {/* <Text> {currentValue.id}</Text> */}
      </Body>
    </HeaderContainer>
  ) : (
    <HeaderContainer
      className="group-header"
      id={'group_header_' + currentValue.id + ''}
    >
      <GroupMoveButtons
        disabledMoveDown={isLast || isOnly}
        disabledMoveUp={isFirst || isOnly}
        label={label}
        onMoveUp={() => onMoveUp(currentValue, index)}
        onMoveDown={() => onMoveDown(currentValue, index)}
      />
      <Body index={1}>
        <Flex>
          {DropdownOperator}
          <Text> off the following:</Text>
          {/* <Text> {currentValue.id}</Text> */}
        </Flex>
        <Flex>
          {!isRoot && !isOnly && (
            <ActionButton
              onClick={() => onUpLevel(currentValue, index)}
              toolip="Move up one level"
              iconName="move-left"
            />
          )}
          <DropdownIcon
            iconName="trash"
            disabled={isOnly}
            items={DeleteGroupOptions}
            renderItem={item => (
              <DropdownOption
                key={item.id}
                onClick={() => {
                  onDeleteGroup && onDeleteGroup(currentValue, index, item.id);
                }}
              >
                {item.label}
              </DropdownOption>
            )}
          />
        </Flex>
      </Body>
    </HeaderContainer>
  );
};

export default GroupHeader;