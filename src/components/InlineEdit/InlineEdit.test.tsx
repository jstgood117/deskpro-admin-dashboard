import React from 'react';
import { mount, shallow } from '../../test/enzyme';

import InlineEdit from './InlineEdit';

describe('Input', () => {
  let props: { error: boolean };
  let mountedInlileEdit: any;

  const InlileEditComponent: React.FC<{ error: boolean }> = _props => {
    const [inputValues, setValues] = React.useState([0, 0, 0]);
    return (
      <InlineEdit
        inputValues={inputValues}
        setValues={(vals: number[]) => setValues(vals)}
        {...props}
      />
    );
  };

  const wrapper = (bShallow: boolean) => {
    if (!mountedInlileEdit) {
      mountedInlileEdit = bShallow
        ? shallow(<InlileEditComponent {...props} />)
        : mount(<InlileEditComponent {...props} />);
    }
    return mountedInlileEdit;
  };

  beforeEach(() => {
    props = { error: false };
    mountedInlileEdit = undefined;
  });

  it('always renders a <div>', () => {
    const elts = wrapper(false).find('div');
    expect(elts.length).toBeGreaterThan(0);
  });
});
