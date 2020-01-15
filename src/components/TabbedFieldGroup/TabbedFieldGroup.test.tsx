import React from 'react';

import { mount, shallow } from '../../test/enzyme';
import { WrapperType } from '../../test/types';

import TabbedFieldGroup, { IProps } from './TabbedFieldGroup';

describe('TabbedFieldGroup', () => {
  const wrapper = (bShallow: boolean, props: IProps): WrapperType => {
    if (bShallow) {
      return shallow(<TabbedFieldGroup {...props} />);
    }

    return mount(<TabbedFieldGroup {...props} />);
  };

  it('should render 3 buttons for TabbedFieldGroup', () => {
    const root = wrapper(false, {
      elements: [{}],
      tabs: [{}, {}, {}]
    });
    expect(root.find('button').length).toEqual(3);
    root.unmount();
  });

  it('should render SingleSelect on 4 tabs for TabbedFieldGroup', () => {
    const root = wrapper(false, {
      elements: [{}],
      tabs: [{}, {}, {}, {}]
    });
    expect(root.find('button').length).toEqual(0);
    expect(root.find('input').length).toEqual(1);
    root.unmount();
  });

  it('should generate expand toggle on `allowExpanded` props passed', () => {
    const root = wrapper(false, {
      allowExpanded: true,
      elements: [{ elements: [{}] }],
      tabs: [{}]
    });
    expect(root.find('input[type="checkbox"]').length).toEqual(1);
    root.unmount();
  });
});
