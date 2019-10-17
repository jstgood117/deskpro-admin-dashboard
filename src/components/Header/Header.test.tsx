import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import Header, { IProps } from './Header';
import { testTranslations } from '../../resources/constants';

configure({ adapter: new Adapter() });

describe('Header', () => {
  let props: IProps;
  let mountedHeader: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedHeader) {
      mountedHeader = bShallow
        ? shallow(
            <IntlProvider locale="en" messages={testTranslations}>
              <Header {...props} />
            </IntlProvider>
          )
        : mount(
            <IntlProvider locale="en" messages={testTranslations}>
              <Header {...props} />
            </IntlProvider>
          );
    }
    return mountedHeader;
  };

  beforeEach(() => {
    props = {
      title: 'admin.agents.page_title',
      description: 'admin.agents.page_description',
      illustration: null
    };
    mountedHeader = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
