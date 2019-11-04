import React from 'react';
import styled from 'styled-components';

import { GroupMoveButtons, Select, ActionButton } from './Components';
import { FlowLayout, Flex } from '../Styled';

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

const PropertyBuilder: React.SFC = () => {
  return (
    <Container className="rule-item">
      <BodyContainer>
        <GroupMoveButtons label="Where" />
        <Content>
          <Select position="left" placeholder="Select property"></Select>
          <Select position="center"></Select>
          <Select position="right"></Select>
        </Content>
      </BodyContainer>
      <Flex>
        <ActionButton iconName="group" />
        <ActionButton iconName="trash" />
        <ActionButton iconName="plus" />
      </Flex>
    </Container>
  );
};

export default PropertyBuilder;