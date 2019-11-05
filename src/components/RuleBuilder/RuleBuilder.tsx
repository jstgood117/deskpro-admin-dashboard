import React, { useEffect } from 'react';
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
  upLevelGroup
} from './utils';

const Container = styled.div`
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

export interface IRuleBuilderItemProps {
  schema: IRuleBuilderSchema;
  rule: IRuleValue;
  index: number;
  onChange?: (value: IRuleValue[]) => void;
  addGroup?: (rule: IRuleItem, index: number) => void;
  addRule?: (rule: IRuleItem, index: number) => void;
}

export interface IProps {
  schema: IRuleBuilderSchema;
  value: IRuleValue; // Raw value
  currentValue?: IRuleValue; // Current value to recursive
  parentValue?: IRuleValue; // Parent value
  level?: number; // Rule level
  onChange?: (value: IRuleValue) => void;
}

const RuleBuilder: React.FC<IProps> = ({
  schema,
  value,
  currentValue,
  parentValue,
  level,
  onChange
}) => {
  const addGroup = (rule: IRuleItem, _index: number) => {
    const newValue = addNewGroup(value, currentValue, _index);
    onChange(newValue);
  };
  const addRule = (rule: IRuleItem, _index: number) => {
    const newValue = addNewRule(value, currentValue, _index);
    onChange(newValue);
  };
  const onChangeOperator = (operator: string) => {
    const newValue = changeRuleValue(value, currentValue, 'operator', operator);
    onChange(newValue);
  };
  const onMoveUpProperty = (rule: IRuleItem, _index: number) => {
    const newValue = moveItem(value, currentValue, _index, _index - 1);
    onChange(newValue);
  };
  const onMoveDownProperty = (rule: IRuleItem, _index: number) => {
    const newValue = moveItem(value, currentValue, _index, _index + 1);
    onChange(newValue);
  };
  const onMoveUpGroup = (rule: IRuleValue, _index: number) => {
    const newValue = moveItem(value, parentValue, _index, _index - 1);
    onChange(newValue);
  };
  const onMoveDownGroup = (rule: IRuleValue, _index: number) => {
    const newValue = moveItem(value, parentValue, _index, _index + 1);
    onChange(newValue);
  };
  const onDeleteProperty = (rule: IRuleItem, _index: number) => {
    const newValue = deleteRule(value, currentValue, _index);
    onChange(newValue);
  };
  const onDeleteGroup = (rule: IRuleValue, _index: number, option: string) => {
    const newValue = deleteGroup(value, parentValue, rule, _index, option);
    onChange(newValue);
  };
  const onUpLevel = (rule: IRuleValue, _index: number) => {
    const newValue = upLevelGroup(value, parentValue, rule, _index);
    onChange(newValue);
  };
  if (!currentValue) {
    currentValue = { ...value };
  }
  const index = ((parentValue && parentValue.rules) || []).findIndex(
    item => item.id === currentValue.id
  );

  return (
    <Container className={index > -1 ? 'group-container' : ''}>
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
                addGroup={addGroup}
                addRule={addRule}
                index={ruleIndex}
                parentValue={currentValue}
                onMoveUp={onMoveUpProperty}
                onMoveDown={onMoveDownProperty}
                onDelete={onDeleteProperty}
              />
            </div>
          ) : (
            <RuleBuilder
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
    </Container>
  );
};

export default RuleBuilder;