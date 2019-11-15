import React, { useState } from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

import {
  GroupMoveButtons,
  Select,
  ActionButton,
  DropdownOption
} from './Components';
import { FlowLayout, Flex } from '../Styled';
import {
  IRuleItem,
  IRuleValue,
  IRuleBuilderSchema,
  IPropertySchema,
  RuleOperatorType
} from '../../resources/interfaces/filterMeta';
import FormBuilder from './Form';

const Container = styled(FlowLayout)`
  padding-top: 12px;
`;

const BodyContainer = styled(FlowLayout)`
  background: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.greyLighter};
  box-shadow: 0px 3px 5px ${props => props.theme.greyLighter};
  flex: 1;
`;

const Content = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  flex: 1;
`;

export interface IProps {
  index: number;
  parentValue?: IRuleValue;
  rule?: IRuleItem;
  schema?: IRuleBuilderSchema;
  addGroup?: (rule: IRuleItem, index: number) => void;
  addRule?: (rule: IRuleItem, index: number) => void;
  onMoveUp?: (rule: IRuleItem, index: number) => void;
  onMoveDown?: (rule: IRuleItem, index: number) => void;
  onDelete?: (rule: IRuleItem, index: number) => void;
  updateRule?: (rule: IRuleItem, index: number) => void;
}

const PropertyBuilder: React.SFC<IProps> = ({
  index,
  parentValue,
  rule,
  schema,
  addGroup,
  addRule,
  onMoveUp,
  onMoveDown,
  onDelete,
  updateRule
}) => {
  const [propertyState, setPropertyState] = useState<IPropertySchema>(null);
  const parentLength = ((parentValue && parentValue.rules) || []).length;
  const properties = (schema && schema.properties) || [];
  const operators = (propertyState && propertyState.operators) || [];
  const isFirst = index === 0;
  const isLast = index === parentLength - 1;
  const isOnly = parentLength === 1;
  const label = isFirst
    ? 'Where'
    : parentValue && parentValue.operator === 'and'
    ? 'And'
    : 'Or';
  const selectProperty = (property: IPropertySchema) => {
    if (rule.rule.propertyId !== property.propertyId) {
      setPropertyState(property);

      rule.rule.propertyId = property.propertyId;
      if (!property.operators.includes(rule.rule.operator)) {
        rule.rule.operator = '';
      }
      rule.rule.value = '';
      updateRule(rule, index);
    }
  };
  const selectOperator = (operator: RuleOperatorType) => {
    if (rule.rule.operator !== operator) {
      rule.rule.operator = operator;
      updateRule(rule, index);
    }
  };
  const onChangeValue = (value: any) => {
    rule.rule.value = value;
    updateRule(rule, index);
  };

  return (
    <Container className='rule-property'>
      <BodyContainer>
        <GroupMoveButtons
          disabledMoveDown={isLast || isOnly}
          disabledMoveUp={isFirst || isOnly}
          onMoveUp={() => onMoveUp(rule, index)}
          onMoveDown={() => onMoveDown(rule, index)}
          label={label}
        />
        <Content>
          <Select
            position='left'
            value={get(rule, 'rule.propertyId')}
            placeholder={get(rule, 'rule.propertyId') || 'Select property'}
            items={properties}
            renderItem={(item: IPropertySchema) => (
              <DropdownOption
                onClick={() => selectProperty(item)}
                key={item.title}
              >
                {item.title}
              </DropdownOption>
            )}
          />
          <Select
            position='center'
            items={operators}
            value={get(rule, 'rule.operator')}
            placeholder={get(rule, 'rule.operator')}
            renderItem={item => (
              <DropdownOption onClick={() => selectOperator(item)} key={item}>
                {item}
              </DropdownOption>
            )}
          />

          <FormBuilder
            value={get(rule, 'rule.value')}
            onChangeValue={onChangeValue}
            property={propertyState}
          />
        </Content>
      </BodyContainer>
      <Flex>
        <ActionButton onClick={() => addGroup(rule, index)} iconName='group' />
        <ActionButton
          onClick={() => onDelete(rule, index)}
          disabled={isOnly}
          iconName='trash'
        />
        <ActionButton onClick={() => addRule(rule, index)} iconName='plus' />
      </Flex>
    </Container>
  );
};

export default PropertyBuilder;