import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import Loading, { IProps, IStyleProps } from './Loading';
import { testTranslations } from '../../resources/constants';

configure({adapter: new Adapter()});

describe("Loading", () => {
  let props: IProps & IStyleProps;
  let mountedLoading: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedLoading) {
      mountedLoading = bShallow ? shallow(
        <IntlProvider locale='en' messages={testTranslations}>
          <Loading {...props} />
        </IntlProvider>
      ) : mount(
        <IntlProvider locale='en' messages={testTranslations}>
          <Loading {...props} />
        </IntlProvider>
      );
    }
    return mountedLoading;
  }

  beforeEach(() => {
    props = {
      styleType: 'primary'
    };
    mountedLoading = undefined;
  });

  it("always renders a <div>", () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
})