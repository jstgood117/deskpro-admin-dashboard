import React from 'react';
import { mount } from '../../test/enzyme';
import { WrapperType } from '../../test/types';

import AgentSelector from './AgentSelector';
import { createIntl } from 'react-intl';
import { testTranslations } from '../../resources/constants/constants';

describe('StringListBuilder', () => {
  const agents = [
    { id: 'test1', name: 'test 1' },
    { id: 'test2', name: 'test 2' }
  ];
  const intl = createIntl({
    locale: 'en',
    messages: {}
  });
  const wrapper = (props: any): WrapperType => {
    return mount(<AgentSelector intl={intl} {...props} />);
  };

  it('should generate agents rows', () => {
    const root = wrapper({
      agents: [...agents],
      selected: { test1: true }
    });
    expect(root.find({ type: 'checkbox' }).length).toBe(2);
    const props = [
      root
        .find({ type: 'checkbox' })
        .at(0)
        .props(),
      root
        .find({ type: 'checkbox' })
        .at(1)
        .props()
    ];
    expect(props[0].checked).toBeTrue();
    expect(props[1].checked).toBeFalse();
  });

  it('should select all agents', () => {
    const onSelect = jest.fn();
    const root = wrapper({
      agents: [...agents],
      selected: {},
      onSelect
    });
    root
      .find('button')
      .at(0)
      .simulate('click');
    root
      .find('button')
      .at(1)
      .simulate('click');
    expect(onSelect).toBeCalledWith({ test1: true, test2: true });
  });
});
