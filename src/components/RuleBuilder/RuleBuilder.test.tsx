import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import RuleBuilder, { IProps } from './RuleBuilder';
import { initGroup } from './utils';

describe('RuleBuilder', () => {
  let props: IProps;
  let mountedRuleBuilder: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedRuleBuilder) {
      mountedRuleBuilder = bShallow
        ? shallow(<RuleBuilder {...props} />)
        : mount(<RuleBuilder {...props} />);
    }
    return mountedRuleBuilder;
  };

  beforeEach(() => {
    props = {
      onChange: () => false,
      value: [initGroup()],
      schema: {
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
      }
    };
    mountedRuleBuilder = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});