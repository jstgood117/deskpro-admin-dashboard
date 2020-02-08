import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import FileCheckBoard, { IProps } from './FileCheckBoard';

describe('FileCheckBoard', () => {
  let props: IProps;
  let mountedErrorBoard: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedErrorBoard) {
      mountedErrorBoard = bShallow
        ? shallow(<FileCheckBoard {...props} />)
        : mount(<FileCheckBoard {...props} />);
    }
    return mountedErrorBoard;
  };

  beforeEach(() => {
    props = {
      type: 'error',
      errors: [
        '/usr/share/nginx/deskpro/site41500/config_new/advanced/config.settings.php',
        '/usr/share/nginx/deskpro/site41500/config_new/advanced/config.env.php'
      ]
    };
    mountedErrorBoard = undefined;
  });

  it('always renders a <div> when errors are existing', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });

  describe('when children is defined', () => {
    beforeEach(() => {
      props = {
        type: 'error',
        errors: []
      };
      mountedErrorBoard = undefined;
    });

    it('doesnt render when errors are empty', () => {
      const elts = wrapper(false).find('div');
      expect(elts.length).toBe(0);
    });
  });
});
