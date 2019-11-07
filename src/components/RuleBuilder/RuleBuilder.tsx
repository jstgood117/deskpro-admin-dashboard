import React from 'react';
import styled from 'styled-components';

import GroupHeader from './GroupHeader';
import PropertyBuilder from './Property';
import { IRuleBuilderSchema, IRuleValue, IRuleItem } from './interfaces';
import {
  addNewGroup,
  addNewRule,
  changeRuleValue,
  moveItem,
  deleteRule,
  deleteGroup,
  upLevelGroup,
  updateRule
} from './utils';

const RuleItemContainer = styled.div`
  position: relative;
  .group-item,
  .group-container {
    position: relative;
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: -12px;
    }
    &::before {
      border-top: 1px solid ${props => props.theme.greyLight};
      top: 35px;
      width: 12px;
      height: 0;
    }
    &::after {
      border-left: 1px solid ${props => props.theme.greyLight};
      height: 100%;
      width: 0px;
      top: 0px;
    }
    &:last-child {
      ::after {
        height: 35px;
      }
    }
  }
`;

const GroupBody = styled.div`
  padding-left: 30px;
`;

const RuleBuilderContainer = styled.div``;

export interface IRuleBuilderItemProps {
  schema: IRuleBuilderSchema;
  value: IRuleValue; // Raw value
  currentValue?: IRuleValue; // Current value to recursive
  parentValue?: IRuleValue; // Parent value
  level?: number; // Rule level
  onChange?: (value: IRuleValue) => void;
}

const RuleBuilderItem: React.FC<IRuleBuilderItemProps> = ({
  schema,
  value,
  currentValue,
  parentValue,
  level,
  onChange
}) => {
  const addGroup = (rule: IRuleItem, index: number) => {
    const newValue = addNewGroup(value, currentValue, index);
    onChange(newValue);
  };
  const addRule = (rule: IRuleItem, index: number) => {
    const newValue = addNewRule(value, currentValue, index);
    onChange(newValue);
  };
  const onChangeOperator = (operator: string) => {
    const newValue = changeRuleValue(value, currentValue, 'operator', operator);
    onChange(newValue);
  };
  const onMoveUpProperty = (rule: IRuleItem, index: number) => {
    const newValue = moveItem(value, currentValue, index, index - 1);
    onChange(newValue);
  };
  const onMoveDownProperty = (rule: IRuleItem, index: number) => {
    const newValue = moveItem(value, currentValue, index, index + 1);
    onChange(newValue);
  };
  const onMoveUpGroup = (rule: IRuleValue, index: number) => {
    const newValue = moveItem(value, parentValue, index, index - 1);
    onChange(newValue);
  };
  const onMoveDownGroup = (rule: IRuleValue, index: number) => {
    const newValue = moveItem(value, parentValue, index, index + 1);
    onChange(newValue);
  };
  const onDeleteProperty = (rule: IRuleItem, index: number) => {
    const newValue = deleteRule(value, currentValue, index);
    onChange(newValue);
  };
  const onDeleteGroup = (rule: IRuleValue, index: number, option: string) => {
    const newValue = deleteGroup(value, parentValue, rule, index, option);
    onChange(newValue);
  };
  const onUpLevel = (rule: IRuleValue, index: number) => {
    const newValue = upLevelGroup(value, parentValue, rule, index);
    onChange(newValue);
  };
  const onUpdateRule = (rule: IRuleItem, index: number) => {
    const newValue = updateRule(value, currentValue, rule, index);
    onChange(newValue);
  };
  if (!currentValue) {
    currentValue = { ...value };
  }
  const index = ((parentValue && parentValue.rules) || []).findIndex(
    item => item.id === currentValue.id
  );

  return (
    <RuleItemContainer className={index > -1 ? 'group-container' : ''}>
      <GroupHeader
        index={index}
        currentValue={currentValue}
        parentValue={parentValue}
        value={value}
        onChangeOperator={onChangeOperator}
        onMoveUp={onMoveUpGroup}
        onMoveDown={onMoveDownGroup}
        onDeleteGroup={onDeleteGroup}
        onUpLevel={onUpLevel}
      />
      <GroupBody className='group-items'>
        {currentValue.rules.map((item, ruleIndex) =>
          item.type === 'rule' ? (
            <div className='group-item' key={item.id}>
              <PropertyBuilder
                schema={schema}
                addGroup={addGroup}
                parentValue={currentValue}
                rule={item as IRuleItem}
                addRule={addRule}
                index={ruleIndex}
                onMoveUp={onMoveUpProperty}
                onMoveDown={onMoveDownProperty}
                onDelete={onDeleteProperty}
                updateRule={onUpdateRule}
              />
            </div>
          ) : (
            <RuleBuilderItem
              level={ruleIndex}
              key={item.id}
              onChange={onChange}
              schema={schema}
              value={value}
              currentValue={item as IRuleValue}
              parentValue={currentValue}
            />
          )
        )}
      </GroupBody>
    </RuleItemContainer>
  );
};

export interface IProps {
  schema: IRuleBuilderSchema;
  value: IRuleValue[];
  onChange: (value: IRuleValue[]) => void;
}

const RuleBuilder: React.FC<IProps> = ({ schema, value, onChange }) => {
  const onChangeValue = (ruleValue: IRuleValue) => {
    const newValue = value.map(item =>
      item.id === ruleValue.id ? ruleValue : item
    );
    onChange(newValue);
  };

  return (
    <RuleBuilderContainer>
      {value.map(item => (
        <RuleBuilderItem
          key={item.id}
          schema={schema}
          value={item}
          onChange={onChangeValue}
        />
      ))}
    </RuleBuilderContainer>
  );
};
export default RuleBuilder;