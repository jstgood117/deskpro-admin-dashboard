import React from 'react';
import { mount, shallow } from '../../../test/enzyme';

import FileUpload, { IProps } from './FileUpload';

const blob = new Blob([''], { type: 'text/html' });
const file = blob as File;

const iterator = function* i() {
  yield file;
};

const fileList: FileList = {
  length: 0,
  item: () => null,
  [Symbol.iterator]:iterator
};

describe('Label', () => {
  const props: IProps = { id: 'id1', onChangeFile: (e: any) => {}, files:fileList};
  let mountedLabel: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedLabel) {
      mountedLabel = bShallow
        ? shallow(<FileUpload {...props} />)
        : mount(<FileUpload {...props} />);
    }
    return mountedLabel;
  };

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
