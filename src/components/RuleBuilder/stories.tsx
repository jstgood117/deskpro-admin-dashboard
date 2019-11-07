import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import {
  MoveButtons,
  ActionButton,
  DropdownIcon,
  DropdownText,
  Select
} from './Components';
import GroupHeader from './GroupHeader';
import PropertyBuilder from './Property';
import { Flex } from '../Styled';
import RuleBuilder from './RuleBuilder';
import { IRuleBuilderSchema, IRuleValue } from './interfaces';
import { initGroup } from './utils';
import Button from '../Button';

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
      <DropdownIcon iconName="trash" />

      {/* DropdownText */}
      <DropdownText text="all" />

      {/* Select */}
      <Select placeholder="Select property"></Select>

      <br />

      <br />
      {/* GroupHeader */}
      <GroupHeader index={0} />
      <GroupHeader index={1} />

      <br />
      {/* PropertyBuilder */}
      <PropertyBuilder index={1} />
    </>
  );
};

const Group: React.FC = () => {
  const [value, setValue] = useState<IRuleValue[]>([initGroup()]);
  const ruleSchema: IRuleBuilderSchema = {
    groupTitle: 'admin_tickets.some_group_title',
    properties: [
      {
        propertyId: 'person.name',
        title: 'admin_people.name',
        operators: ['=', '!=', 'in', 'not_in'],
        type: 'text'
      },
      {
        propertyId: 'category.id',
        title: 'admin_people.category',
        operators: ['=', '!='],
        type: 'select',
        options: {
          choices: {
            '0': 'foo',
            '1': 'bar',
            '2': 'baz'
          }
        }
      }
    ]
  };

  const onChangeValue = (newValue: IRuleValue[]) => {
    console.log(newValue);

    setValue(newValue);
  };

  const save = () => {
    console.log(value);
  };

  return (
    <Flex style={{ flexDirection: 'column' }}>
      <RuleBuilder value={value} onChange={onChangeValue} schema={ruleSchema} />
      <div style={{ marginTop: 20 }}>
        <Button styleType="primary" onClick={save}>
          Save
        </Button>
      </div>
    </Flex>
  );
};

storiesOf('Rule Builder', module)
  .add('components', () => <Components />)
  .add('group', () => <Group />);