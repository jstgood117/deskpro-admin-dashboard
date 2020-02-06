import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import ErrorBoard, { IProps } from './ErrorBoard';

describe('ErrorBoard', () => {
  let props: IProps;
  let mountedErrorBoard: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedErrorBoard) {
      mountedErrorBoard = bShallow
        ? shallow(<ErrorBoard {...props} />)
        : mount(<ErrorBoard {...props} />);
    }
    return mountedErrorBoard;
  };

  beforeEach(() => {
    props = {
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
