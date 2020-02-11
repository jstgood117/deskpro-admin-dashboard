import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import SettingsData from './SettingsData';

describe('RuleBuilder', () => {
  let props: any;
  let mountedRuleBuilder: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedRuleBuilder) {
      mountedRuleBuilder = bShallow
        ? shallow(<SettingsData {...props} />)
        : mount(<SettingsData {...props} />);
    }
    return mountedRuleBuilder;
  };

  beforeEach(() => {
    props = {
      type: 'header-card'
    };
    mountedRuleBuilder = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
