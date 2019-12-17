import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import HandlebarsTemplate, { HandlebarsProps } from './Handlebars';

describe('Handlebars', () => {
  let props: HandlebarsProps;
  let mountedHandlebars: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedHandlebars) {
      mountedHandlebars = bShallow
        ? shallow(
            <HandlebarsTemplate {...props} />
          )
        : mount(
            <HandlebarsTemplate {...props} />
          );
    }
    return mountedHandlebars;
  };

  beforeEach(() => {
    props = {
      template: '<p>{{name}}</p>',
      data: {
        name: 'John'
      }
    };
    mountedHandlebars = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
