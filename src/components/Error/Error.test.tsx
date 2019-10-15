import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import Error, { IProps, IStyleProps } from './Error';
import { testTranslations } from '../../resources/constants';

configure({adapter: new Adapter()});

const testError = {
  graphQLErrors: [
    { message: 'error happened'},
    { message: 'second error happened'},
  ]
}

describe("Error", () => {
  let props: IProps & IStyleProps;
  let mountedError: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedError) {
      mountedError = bShallow ? shallow(
        <IntlProvider locale='en' messages={testTranslations}>
          <Error {...props} />
        </IntlProvider>
      ) : mount(
        <IntlProvider locale='en' messages={testTranslations}>
          <Error {...props} />
        </IntlProvider>
      );
    }
    return mountedError;
  }

  beforeEach(() => {
    props = {
      apolloError: undefined,
    };
    mountedError = undefined;
  });

  it("always renders a <div>", () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
})