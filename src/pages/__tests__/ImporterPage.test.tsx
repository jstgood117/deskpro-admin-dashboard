import React from 'react';
import { mount, shallow } from 'enzyme';
import ImporterPage from '../Bespoke/Importer';

describe('ImporterPage', () => {
  let mountedCheckbox: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedCheckbox) {
      mountedCheckbox = bShallow
        ? shallow(<ImporterPage path='/importer'/>)
        : mount(<ImporterPage path='/importer' />);
    }
    return mountedCheckbox;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
