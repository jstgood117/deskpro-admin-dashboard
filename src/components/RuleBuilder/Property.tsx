import React from 'react';
import styled from 'styled-components';

import { GroupMoveButtons, Select, ActionButton } from './Components';
import { FlowLayout, Flex } from '../Styled';
import { IRuleItem, IRuleValue } from './interfaces';

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
  addGroup?: (rule: IRuleItem, index: number) => void;
  addRule?: (rule: IRuleItem, index: number) => void;
  onMoveUp?: (rule: IRuleItem, index: number) => void;
  onMoveDown?: (rule: IRuleItem, index: number) => void;
  onDelete?: (rule: IRuleItem, index: number) => void;
}

const PropertyBuilder: React.SFC<IProps> = ({
  index,
  parentValue,
  rule,
  addGroup,
  addRule,
  onMoveUp,
  onMoveDown,
  onDelete
}) => {
  const parentLength = ((parentValue && parentValue.rules) || []).length;
  const isFirst = index === 0;
  const isLast = index === parentLength - 1;
  const isOnly = parentLength === 1;
  const label = isFirst
    ? 'Where'
    :  parentValue && parentValue.operator === 'and'
    ? 'And'
    : 'Or';

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
          <Select position='left' placeholder='Select property'/>
          <Select position='center'/>
          <Select position='right'/>
        </Content>
      </BodyContainer>
      <Flex>
        <ActionButton onClick={() => addGroup(rule, index)} iconName='group' />
        <ActionButton onClick={() => onDelete(rule, index)} disabled={isOnly} iconName='trash' />
        <ActionButton onClick={() => addRule(rule, index)} iconName='plus' />
      </Flex>
    </Container>
  );
};

export default PropertyBuilder;