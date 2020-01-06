import React from 'react';
import { mount, shallow } from '../../test/enzyme';
import { WrapperType } from '../../test/types';

import Values, { Props } from './AutoComplete';

describe('AutoComplete', () => {

  const wrapper = (bShallow: boolean, props: IProps): WrapperType => {
    return bShallow
      ? shallow(<AutoComplete {...props} />)
      : mount(<AutoComplete {...props} />);
  };

  test('always renders a <div>', () => {

    const props: Props = {
      containType: 'TEXT',
      filterValue: '',
      filters: [],
      index: 0,
      setFilterValue: jest.fn(),
      uniqueValues: [];
    };

    const root = wrapper(false, props);
    const elts = root.find('div');
    expect(elts.length).toBeGreaterThan(0);

    root.unmount();
  });

  test('Props onChange is called on option select if provided', () => {

    const props: IProps = {
      menuItems: items,
      placeholder: 'Select Property',
      onChange
    };

    const root = wrapper(false, props);
    simulateClick(root);

    expect(onChange).toBeCalledTimes(1);
    expect(setState).toBeCalledTimes(1);

    root.unmount();
  });

  test('Call internal onChange if one if value changes in the text box', () => {

    const props: IProps = {
      menuItems: items,
      placeholder: 'Select Property',
      onChange
    };

    const root = wrapper(false, props);
    simulateInput(root);

    expect(onChange).toBeCalledTimes(1);
    expect(setState).toBeCalledTimes(2);

    root.unmount();
  });

  test('doesn`t call props onChange if one ins`t passed to it', () => {

    const props: IProps = {
      menuItems: items,
      placeholder: 'Select Property',
    };

    const root = wrapper(false, props);
    simulateInput(root);
    simulateClick(root);

    expect(onChange).toBeCalledTimes(0);

    root.unmount();
  });

  afterEach(() => {
    onChange.mockClear();
    setState.mockClear();
  });
});
