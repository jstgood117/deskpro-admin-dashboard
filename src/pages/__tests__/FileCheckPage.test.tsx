import React from 'react';
import { mount, shallow } from 'enzyme';
import FileCheckPage from '../Bespoke/FileCheck';

describe('FileCheckPage', () => {
  let mountedFileCheckPage: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedFileCheckPage) {
      mountedFileCheckPage = bShallow
        ? shallow(<FileCheckPage path='/sysadmin/file-check'/>)
        : mount(<FileCheckPage path='/sysadmin/file-check' />);
    }
    return mountedFileCheckPage;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
