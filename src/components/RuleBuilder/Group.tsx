import React from 'react';
import styled from 'styled-components';

import {
  GroupMoveButtons,
  DropdownText,
  Text,
  ActionButton
} from './Components';
import { FlowLayout, Flex } from '../Styled';

const Container = styled(FlowLayout)`
  padding-top: 12px;
`;

const Body = styled.div`
  background: ${props => props.theme.greyLighter};
  height: 48px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  padding-right: 8px;
`;

const GroupRuleBuilder: React.SFC = ({ ...props }) => {
  return (
    <Container className='rule-item'>
      <GroupMoveButtons label='Where' />
      <Body>
        <Flex>
          <DropdownText text='all'/>
          <Text> off the following:</Text>
        </Flex>
        <Flex>
          <ActionButton toolip='Move up one level' iconName='move-left' />
          <ActionButton iconName='trash' />
        </Flex>
      </Body>
      {props.children}
    </Container>
  );
};

export default GroupRuleBuilder;