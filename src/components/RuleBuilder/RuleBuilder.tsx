import React from 'react';
import styled from 'styled-components';

import GroupRuleBuilder from './Group';
import PropertyBuilder from './Property';
import { HeaderContainer, DropdownText, Text } from './Components';

const Container = styled.div`
  position: relative;
  .rule-item {
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

const BodyContainer = styled.div`
  padding-left: 30px;
`;

const RuleBuilder: React.SFC = () => {
  return (
    <Container>
      <HeaderContainer>
        <Text>Show objects that meet</Text>
        <DropdownText text='all' onClick={() => false} />
        <Text> of the following:</Text>
      </HeaderContainer>

      <BodyContainer>
        <PropertyBuilder/>
        <GroupRuleBuilder>
          <BodyContainer>
            <BodyContainer>
              <PropertyBuilder/>
              <PropertyBuilder/>
              <GroupRuleBuilder>
                <BodyContainer>
                  <PropertyBuilder/>
                </BodyContainer>
              </GroupRuleBuilder>
            </BodyContainer>
          </BodyContainer>
        </GroupRuleBuilder>
      </BodyContainer>
    </Container>
  );
};

export default RuleBuilder;