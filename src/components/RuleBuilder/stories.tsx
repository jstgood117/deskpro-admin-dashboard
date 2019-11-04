import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import {
  MoveButtons,
  ActionButton,
  DropdownIcon,
  HeaderContainer,
  Text,
  DropdownText,
  Select
} from './Components';
import GroupRuleBuilder from './Group';
import PropertyBuilder from './Property';
import { Flex } from '../Styled';
import RuleBuilder from './RuleBuilder';

const Components: React.FC = () => {
  return (
    <>
      {/* Move */}
      <MoveButtons
        onMoveUp={() => actions('MoveUp')}
        onMoveDown={() => actions('MoveDown')}
      />

      {/* Action */}
      <Flex>
        <ActionButton iconName="group" />
        <ActionButton iconName="plus" />
        <ActionButton iconName="undo" />
        <ActionButton toolip="Move up one level" iconName="move-left" />
        <ActionButton iconName="trash" />
      </Flex>

      {/* DropdownIcon */}
      <DropdownIcon iconName="trash" onClick={() => actions('Dropdown')} />

      {/* DropdownText */}
      <DropdownText text="all" onClick={() => actions('Dropdown')} />

      {/* Select */}
      <Select placeholder="Select property"></Select>

      <br />
      {/* Header */}
      <HeaderContainer>
        <Text>Show objects that meet</Text>
        <DropdownText text="all" onClick={() => actions('Dropdown')} />
        <Text> of the following:</Text>
      </HeaderContainer>

      <br />
      {/* GroupRuleBuilder */}
      <GroupRuleBuilder />

      <br />
      {/* PropertyBuilder */}
      <PropertyBuilder />
    </>
  );
};

const Group: React.FC = () => {
  return <RuleBuilder />;
}

storiesOf('Rule Builder', module)
  .add('components', () => <Components />)
  .add('group', () => <Group />);