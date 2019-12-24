/**
 * Components using the react-intl module require access to the intl context.
 * This is not available when mounting single components in Enzyme.
 * These helper functions aim to address that and wrap a valid,
 * English-locale intl context around them.
 */

import React from 'react';
import {IntlProvider} from 'react-intl';
import { mount, shallow } from 'enzyme';

const defaultLocale = 'en';
const locale = defaultLocale;
const onError = () => {};

export const mountWithIntl = (node: React.ReactElement) => {
  return mount(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      onError,
    },
  });
};

export const shallowWithIntl = (node: React.ReactElement) => {
  return shallow(node, {
    wrappingComponent: IntlProvider,
    wrappingComponentProps: {
      locale,
      defaultLocale,
      onError,
    },
  });
};