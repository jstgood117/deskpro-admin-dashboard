import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount, shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import Dialog, { IProps } from './Dialog';
import { testTranslations } from '../../resources/constants';

configure({ adapter: new Adapter() });

describe('Dialog', () => {
  let props: IProps;
  let mountedDialog: any;

  const wrapper = (bShallow: boolean) => {
    if (!mountedDialog) {
      mountedDialog = bShallow
        ? shallow(
            <IntlProvider locale="en" messages={testTranslations}>
              <Dialog {...props} />
            </IntlProvider>
          )
        : mount(
            <IntlProvider locale="en" messages={testTranslations}>
              <Dialog appElement={document.createElement('div')} {...props} />
            </IntlProvider>
          );
    }
    return mountedDialog;
  };

  beforeEach(() => {
    props = {
      isOpen: true,
      children: undefined
    };
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});